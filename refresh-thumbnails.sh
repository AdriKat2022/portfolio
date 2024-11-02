#!/bin/bash

auto_refresh=true
auto_add_to_commit=true
GIT_ROOT=$(git rev-parse --show-toplevel)

# The prompt WON'T WORK in the git hook
function prompt_yes_no() {
    local message="$1"
    local default="${2:-y}"

    # Set the default prompt to uppercase
    if [[ "$default" =~ ^[Yy]$ ]]; then
        prompt="(Y/N) [Y]"
        default="y"
    else
        prompt="(Y/N) [N]"
        default="n"
    fi

    # Display the prompt message
    read -p "$message $prompt: " input

    # If no input, use the default; otherwise, use the provided input
    if [[ -z "$input" ]]; then
        input="$default"
    fi

    # Return success for 'y' or 'Y', failure for 'n' or 'N'
    [[ "$input" =~ ^[Yy]$ ]]
}

echo "Checking PDFs..."

# Directory to store thumbnails
THUMBNAIL_DIR="assets/thumbnails"

# Create the directory if it doesn't exist
mkdir -p "$THUMBNAIL_DIR"

pdfs=$(git diff --cached --name-only --diff-filter=ACM | grep '\.pdf$')
thumbnails_path=""

if [ -z $pdfs ]; then
    echo "No new PDFs to generate."
    exit 0
else
    thumbnail_count=$(wc -w <<< "$pdfs")
    if prompt_yes_no "$thumbnail_count pdf changes were found. Refresh the thumbnails ?" "y"; then
        # Loop through PDF files in the latest commit or merge
        for pdf in $pdfs; do
            # Define thumbnail path
            thumbnail_path="$GIT_ROOT/$THUMBNAIL_DIR/$(basename "$pdf" .pdf).jpg"
            thumbnails_path="$thumbnails_path $thumbnail_path"
            # Generate thumbnail using Imagick
            convert -background white -alpha remove -density 150 -thumbnail x500 "$GIT_ROOT/$pdf[0]" "$thumbnail_path"
            echo "Generated thumbnail for $GIT_ROOT/$pdf -> $thumbnail_path"
        done

        if prompt_yes_no "Index the new thumbnails ?" "y"; then
            git add $thumbnails_path
            echo "Finished adding thumbnails."
        fi
    fi
fi



if prompt_yes_no "Commit ?" "y"; then
    read -p "Enter the commit message: " commit_msg
    if [ -n "$commit_msg" ]; then
        git commit -m "$commit_msg"
    else
        echo "Commit aborted due to empty message."
    fi
fi

exit 0