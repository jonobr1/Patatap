#!/bin/sh
sleep 5s && chromium-browser --kiosk --start-fullscreen http://localhost:8080/ &
python -m http.server 8080
