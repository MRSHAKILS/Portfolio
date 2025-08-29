@echo off
REM ================================
REM 🚀 Portfolio Setup Script (Windows)
REM ================================

echo 🚀 Setting up Portfolio Application...
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed. Please install Python 3.11+ from https://python.org/
    pause
    exit /b 1
)

echo [INFO] Setting up backend...
cd backend

REM Create virtual environment
if not exist ".venv" (
    echo [INFO] Creating Python virtual environment...
    python -m venv .venv
)

REM Activate virtual environment
echo [INFO] Activating virtual environment...
call .venv\Scripts\activate.bat

REM Install dependencies
echo [INFO] Installing Python dependencies...
pip install -r requirements.txt

REM Setup environment file
if not exist ".env" (
    echo [INFO] Creating environment file...
    copy .env.example .env
    echo [WARNING] Please update .env file with your configuration!
)

cd ..
echo [SUCCESS] Backend setup completed!

echo [INFO] Setting up frontend...
cd frontend

REM Install dependencies
echo [INFO] Installing Node.js dependencies...
npm install --legacy-peer-deps

REM Setup environment file
if not exist ".env" (
    echo [INFO] Creating environment file...
    copy .env.example .env
    echo [WARNING] Please update .env file with your configuration!
)

cd ..
echo [SUCCESS] Frontend setup completed!

echo.
echo [SUCCESS] Setup completed successfully! 🎉
echo.
echo [INFO] Next steps:
echo 1. Update backend\.env with your MongoDB connection string
echo 2. Update frontend\.env with your API URL
echo 3. Start the backend: cd backend && .venv\Scripts\activate && python -m uvicorn server:app --reload
echo 4. Start the frontend: cd frontend && npm start
echo.
echo [SUCCESS] Happy coding! 🚀
pause
