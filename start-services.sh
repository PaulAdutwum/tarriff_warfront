#!/bin/bash

# Colors for better visibility
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Tariff Impact Tracker Services...${NC}"

# Check if tmux is installed
if ! command -v tmux &> /dev/null; then
    echo -e "${YELLOW}tmux is not installed. Services will be started in separate terminals.${NC}"
    echo -e "${YELLOW}Consider installing tmux for better process management.${NC}"
    
    # Start services in background
    echo -e "${BLUE}Starting Backend API Server...${NC}"
    cd backend && npm run start &
    
    echo -e "${BLUE}Starting AI Service...${NC}"
    cd ai-service && python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
    
    echo -e "${BLUE}Starting Frontend...${NC}"
    cd frontend && npm run dev &
    
    echo -e "${GREEN}All services started in background.${NC}"
    echo -e "${YELLOW}To stop services, use: kill $(jobs -p)${NC}"
else
    # Create a new tmux session
    SESSION_NAME="tariff-tracker"
    
    # Check if the session already exists
    tmux has-session -t $SESSION_NAME 2>/dev/null
    if [ $? -eq 0 ]; then
        echo -e "${YELLOW}Session $SESSION_NAME already exists. Killing it...${NC}"
        tmux kill-session -t $SESSION_NAME
    fi
    
    # Create new session and windows
    echo -e "${BLUE}Creating tmux session with separate windows for each service...${NC}"
    tmux new-session -d -s $SESSION_NAME -n backend
    tmux new-window -t $SESSION_NAME:1 -n ai-service
    tmux new-window -t $SESSION_NAME:2 -n frontend
    
    # Start backend in window 0
    tmux send-keys -t $SESSION_NAME:0 "cd backend && echo -e '${GREEN}Starting Backend API Server...${NC}' && npm run start" C-m
    
    # Start AI service in window 1
    tmux send-keys -t $SESSION_NAME:1 "cd ai-service && echo -e '${GREEN}Starting AI Service...${NC}' && python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload" C-m
    
    # Start frontend in window 2
    tmux send-keys -t $SESSION_NAME:2 "cd frontend && echo -e '${GREEN}Starting Frontend...${NC}' && npm run dev" C-m
    
    # Attach to the session
    echo -e "${GREEN}All services started in tmux session '$SESSION_NAME'.${NC}"
    echo -e "${YELLOW}Attaching to tmux session. Use Ctrl+B then number to switch windows:${NC}"
    echo -e "${YELLOW}  0: Backend${NC}"
    echo -e "${YELLOW}  1: AI Service${NC}"
    echo -e "${YELLOW}  2: Frontend${NC}"
    echo -e "${YELLOW}Use Ctrl+B then D to detach from session.${NC}"
    
    tmux attach-session -t $SESSION_NAME
fi 