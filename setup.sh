#!/bin/bash

# ================================
# 🚀 Portfolio Setup Script
# ================================

echo "🚀 Setting up Portfolio Application..."
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
        exit 1
    fi
    
    # Check Python
    if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
        print_error "Python is not installed. Please install Python 3.11+ from https://python.org/"
        exit 1
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git from https://git-scm.com/"
        exit 1
    fi
    
    print_success "All requirements satisfied!"
}

# Setup backend
setup_backend() {
    print_status "Setting up backend..."
    
    cd backend
    
    # Create virtual environment
    if [ ! -d ".venv" ]; then
        print_status "Creating Python virtual environment..."
        python -m venv .venv || python3 -m venv .venv
    fi
    
    # Activate virtual environment
    print_status "Activating virtual environment..."
    source .venv/bin/activate || source .venv/Scripts/activate
    
    # Install dependencies
    print_status "Installing Python dependencies..."
    pip install -r requirements.txt
    
    # Setup environment file
    if [ ! -f ".env" ]; then
        print_status "Creating environment file..."
        cp .env.example .env
        print_warning "Please update .env file with your configuration!"
    fi
    
    cd ..
    print_success "Backend setup completed!"
}

# Setup frontend
setup_frontend() {
    print_status "Setting up frontend..."
    
    cd frontend
    
    # Install dependencies
    print_status "Installing Node.js dependencies..."
    npm install --legacy-peer-deps
    
    # Setup environment file
    if [ ! -f ".env" ]; then
        print_status "Creating environment file..."
        cp .env.example .env
        print_warning "Please update .env file with your configuration!"
    fi
    
    cd ..
    print_success "Frontend setup completed!"
}

# Main setup function
main() {
    print_status "Starting Portfolio Application setup..."
    
    check_requirements
    setup_backend
    setup_frontend
    
    print_success "Setup completed successfully! 🎉"
    echo ""
    print_status "Next steps:"
    echo "1. Update backend/.env with your MongoDB connection string"
    echo "2. Update frontend/.env with your API URL"
    echo "3. Start the backend: cd backend && source .venv/bin/activate && python -m uvicorn server:app --reload"
    echo "4. Start the frontend: cd frontend && npm start"
    echo ""
    print_success "Happy coding! 🚀"
}

# Run main function
main
