Write-Host "Checking for node..."

if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Node found! Installing dependencies..."

    pwsh -Command { Set-Location ./app; npm i }
    pwsh -Command { Set-Location ./backend; npm i }

    '{"text": "Hello Technica!"}' > ./backend/data.json

    Write-Host ""
    $backend_ip = Read-Host -Prompt "Enter an IP address that you can use to connect to this computer"
    "export const BACKEND_IP = `"$backend_ip`";" > ./backend/ip.js
    "export const BACKEND_IP = `"$backend_ip`";" > ./app/ip.js

    Write-Host ""
    Write-Host "Done setup! " -ForegroundColor Cyan -NoNewline
    Write-Host "Happy Hacking!" -ForegroundColor Magenta
} else {
    Write-Host "Unable to find node. Please install from https://nodejs.org/en/download/ or your Windows package manager of choice." -ForegroundColor Red
}
