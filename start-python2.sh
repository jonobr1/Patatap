#!/bin/sh
sleep 5s && chromium-browser --kiosk --start-fullscreen http://localhost:8080/ &
# sleep 5s && /Applications/Chromium.app/Contents/MacOS/Chromium --kiosk --start-fullscreen http://localhost:8080/ &
python -m SimpleHTTPServer 8080
