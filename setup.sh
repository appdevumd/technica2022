#!/bin/sh

echo "Checking for node..."
if command -v node
then
    echo "Node found! Installing dependencies..."

    (cd ./app && npm i)
    (cd ./backend && npm i)

    echo '{"text": "Hello Technica!"}' > ./backend/data.json

    echo ""
    echo "Enter an IP address that you can use to connect to this computer: "
    read -r backend_ip
    echo "export const BACKEND_IP = \"$backend_ip\";" > ./backend/ip.js
    echo "export const BACKEND_IP = \"$backend_ip\";" > ./app/ip.js

    echo ""
    echo "Done setup! Happy Hacking!"
else
    echo "Unable to find node. Please install from https://nodejs.org/en/download/ or your package manager of choice."
fi
