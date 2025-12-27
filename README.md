# Iris Species Predictor - Full Stack Application

## Overview
This is a full-stack machine learning application that predicts iris flower species based on measurements.

## Project Structure
```
.
├── backend/
│   └── app.py          # Flask API server
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js      # React main component
│   │   ├── App.css     # Styles
│   │   ├── index.js    # React entry point
│   │   └── index.css
│   └── package.json
└── iris_ml_project.py  # Original ML script
```

## Setup Instructions

### Backend Setup
1. Install Python dependencies (already done):
   ```bash
   pip install flask flask-cors scikit-learn
   ```

2. Start the Flask API server:
   ```bash
   cd backend
   python app.py
   ```
   The API will run at http://localhost:5000

### Frontend Setup
1. Install Node.js dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```
   The app will open at http://localhost:3000

## How to Use
1. Start the backend server first (Flask API)
2. Start the frontend server (React app)
3. Open http://localhost:3000 in your browser
4. Enter flower measurements:
   - Sepal Length (cm)
   - Sepal Width (cm)
   - Petal Length (cm)
   - Petal Width (cm)
5. Click "Predict Species" to get the result

## Sample Data
- **Setosa:** 5.1, 3.5, 1.4, 0.2
- **Versicolor:** 6.0, 2.9, 4.5, 1.5
- **Virginica:** 6.9, 3.1, 5.4, 2.1

## Technologies Used
- **Backend:** Python, Flask, scikit-learn
- **Frontend:** React, JavaScript, CSS
- **ML Model:** Random Forest Classifier
