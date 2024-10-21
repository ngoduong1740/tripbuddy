# Colors used for logs
$NC = "$([char]0x1b)[0m"      # Reset color
$GREEN = "$([char]0x1b)[32m"  # Green color
$RED = "$([char]0x1b)[31m"    # Red color
$CYAN = "$([char]0x1b)[36m"   # Cyan color

function Print-Color {
    param([string]$color, [string]$message)
    Write-Host "$color$message$NC"
}

# Check for code command
if (!(Get-Command code -ErrorAction SilentlyContinue)) {
    Print-Color $RED "Could not detect code command on your system.`nAborting."
    Write-Host "Check if VS Code is properly installed."
    Write-Host "Make sure to add $(Print-Color $GREEN 'code') command to the PATH"
    exit 1
}

# Path to the extensions.json file
$extensionsJsonPath = ".vscode/extensions.json"

# Check if the file exists
if (!(Test-Path $extensionsJsonPath -PathType Leaf)) {
    Print-Color $RED "File $extensionsJsonPath could not be found.`nAborting."
    exit 1
}

# Read and parse the JSON file
try {
    $extensionsJson = Get-Content $extensionsJsonPath -Raw | ConvertFrom-Json
    $extensions = $extensionsJson.recommendations
} catch {
    Print-Color $RED "Error parsing $extensionsJsonPath.`nAborting."
    Write-Host "Make sure the file is valid JSON."
    exit 1
}

if (!$extensions -or $extensions.Count -eq 0) {
    Print-Color $RED "No extensions found in the recommendations list.`nAborting."
    exit 1
}

# Get currently installed extensions
$INSTALLED_EXTENSIONS = code --list-extensions

Print-Color $CYAN "Found $($extensions.Count) extensions to process."

# Loop over extensions and try to install them
foreach ($extension_name in $extensions) {
    Write-Host "`nWorking on $(Print-Color $GREEN $extension_name) extension."

    if ($INSTALLED_EXTENSIONS -contains $extension_name) {
        Write-Host "Extension already installed. Skipping further steps."
    }
    else {
        Write-Host "Running: code --install-extension $extension_name"
        $result = code --install-extension $extension_name

        if ($LASTEXITCODE -eq 0) {
            Print-Color $GREEN "Extension installed successfully."
        }
        else {
            Print-Color $RED "Extension installation failed."
            Write-Host "Check the logs above to get more information about the error."
        }
    }
}

Write-Host "`nCheck the logs above for detailed report."
Print-Color $GREEN "Successfully finished processing all extensions."
