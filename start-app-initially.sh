#!/bin/bash

# Start the database server
/path/to/database/server &

# Wait for 3 seconds
sleep 3

# Execute the echo command
npm run dev
