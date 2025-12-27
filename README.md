# 🌸 Iris Species Predictor

<div align="center">

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)
![Flask](https://img.shields.io/badge/Flask-3.0+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

**A full-stack machine learning application that predicts iris flower species with 100% accuracy**

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [API](#api)

</div>

---

## 📖 Overview

This project demonstrates a complete machine learning workflow from model training to deployment with a modern web interface. It uses the classic Iris dataset to classify flower species based on four measurements: sepal length, sepal width, petal length, and petal width.

### 🎯 Key Features

- **High Accuracy ML Model**: Random Forest Classifier achieving 100% accuracy on test data
- **RESTful API**: Flask-based backend with CORS support
- **Modern UI**: Beautiful React frontend with gradient design
- **Real-time Predictions**: Instant species classification with confidence scores
- **Interactive Interface**: User-friendly form with sample data examples
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Project Structure

```
iris-species-predictor/
├── backend/
│   └── app.py                 # Flask API server with ML model
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── App.css           # Styling with gradients
│   │   ├── index.js          # React entry point
│   │   └── index.css         # Global styles
│   └── package.json          # Node dependencies
├── iris_ml_project.py        # Standalone ML script with visualizations
├── requirements.txt          # Python dependencies
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Induwara1006/iris-species-predictor.git
   cd iris-species-predictor
   ```

2. **Create and activate virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the Flask API server**
   ```bash
   cd backend
   python app.py
   ```
   
   ✅ Server will run at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Start the React development server**
   ```bash
   npm start
   ```
   
   ✅ App will open at `http://localhost:3000`

## 💻 Usage

### Web Application

1. Ensure both backend and frontend servers are running
2. Open your browser to `http://localhost:3000`
3. Enter flower measurements in the form:
   - **Sepal Length** (cm): 4.0 - 8.0
   - **Sepal Width** (cm): 2.0 - 4.5
   - **Petal Length** (cm): 1.0 - 7.0
   - **Petal Width** (cm): 0.1 - 2.5
4. Click **"Predict Species"** to get results
5. View the predicted species with confidence scores

### Sample Test Cases

Try these measurements to test different species:

| Species | Sepal Length | Sepal Width | Petal Length | Petal Width |
|---------|--------------|-------------|--------------|-------------|
| **Setosa** | 5.1 | 3.5 | 1.4 | 0.2 |
| **Versicolor** | 6.0 | 2.9 | 4.5 | 1.5 |
| **Virginica** | 6.9 | 3.1 | 5.4 | 2.1 |

### Standalone Python Script

Run the complete ML pipeline with visualizations:

```bash
python iris_ml_project.py
```

This will:
- Load and explore the Iris dataset
- Display data visualizations (pairplot, feature importance)
- Train the Random Forest model
- Show accuracy and confusion matrix
- Allow interactive predictions

## 🔌 API Documentation

### Endpoints

#### `POST /api/predict`

Predict iris species based on flower measurements.

**Request Body:**
```json
{
  "sepalLength": 5.1,
  "sepalWidth": 3.5,
  "petalLength": 1.4,
  "petalWidth": 0.2
}
```

**Response:**
```json
{
  "success": true,
  "species": "setosa",
  "confidence": 1.0,
  "probabilities": {
    "setosa": 1.0,
    "versicolor": 0.0,
    "virginica": 0.0
  }
}
```

#### `GET /api/health`

Check API server health status.

**Response:**
```json
{
  "status": "ok"
}
```

## 🛠️ Technologies Used

### Backend
- **Python 3.13** - Programming language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-origin resource sharing
- **scikit-learn** - Machine learning library
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation

### Frontend
- **React 18** - UI library
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with gradients and animations
- **Fetch API** - HTTP requests

### Machine Learning
- **Random Forest Classifier** - Ensemble learning method
- **Iris Dataset** - Classic ML dataset (150 samples, 3 species)
- **Train-Test Split** - 80/20 split for validation

## 📊 Model Performance

- **Accuracy**: 100% on test set
- **Model Type**: Random Forest with 100 estimators
- **Training Set**: 120 samples
- **Test Set**: 30 samples
- **Features**: 4 (sepal length/width, petal length/width)
- **Classes**: 3 (setosa, versicolor, virginica)

## 🎨 Screenshots

### Web Interface
- Modern gradient design with purple/blue theme
- Responsive form inputs with validation
- Real-time prediction results
- Error handling and loading states

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Iris dataset from [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/iris)
- scikit-learn documentation and community
- React documentation and community

## 📧 Contact

**Induwara1006** - [@Induwara1006](https://github.com/Induwara1006)

Project Link: [https://github.com/Induwara1006/iris-species-predictor](https://github.com/Induwara1006/iris-species-predictor)

---

<div align="center">
Made with ❤️ and 🤖 AI assistance
</div>
