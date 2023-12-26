#!/bin/bash
# You might need to install webp - "brew install webp" on a mac

# Set the path to the main image directory
main_directory="static/imgs"

# Create a new directory for WebP images
webp_directory="${main_directory}/webp"
mkdir -p "${webp_directory}"

# This fixes error handling for the convert_images function if no png/jpg files exist.
# The zsh versions:
setopt null_glob
setopt nocase_glob
# These are the bash versions if you don't use zsh (unset them at the bottom too)
# shopt -s nullglob # Sets nullglob
# shopt -s nocaseglob # Sets nocaseglob

# Recursively converts images in the main_directory
convert_images() {
  local input_dir="$1"
  local output_dir="${webp_directory}/${input_dir}"
  
  # Check if the directory is named "webp" and skip it
  if [[ "$input_dir" == *"/webp" ]]; then
    return
  fi

  # Create output directory
  mkdir -p "${output_dir}"

  # Convert images to WebP
  for file in "${main_directory}/${input_dir}"/*.{png,jpg,jpeg}; do
    if [ -f "$file" ]; then
      filename=$(basename "$file")
      cwebp -q 80 "$file" -o "${output_dir}/${filename%.*}.webp"
    fi
  done

  # Recursively convert images in subdirectories
  for subdirectory in "${main_directory}/${input_dir}"/*/; do
    # Remove leading slashes... I don't think this works but it doesn't seem to matter?
    convert_images "${input_dir}/$(basename "${subdirectory%/}")"
  done
}

convert_images ""

unsetopt null_glob
unsetopt nocase_glob
# shopt -u nullglob
# shopt -u nocaseglob