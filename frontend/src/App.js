import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    sepalLength: '',
    sepalWidth: '',
    petalLength: '',
    petalWidth: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPrediction(data);
      } else {
        setError(data.error || 'Prediction failed');
      }
    } catch (err) {
      setError('Failed to connect to the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      sepalLength: '',
      sepalWidth: '',
      petalLength: '',
      petalWidth: ''
    });
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🌸 Iris Flower Species Predictor</h1>
        <p className="subtitle">Enter flower measurements to predict the species</p>

        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="form-group">
            <label htmlFor="sepalLength">Sepal Length (cm)</label>
            <input
              type="number"
              id="sepalLength"
              name="sepalLength"
              value={formData.sepalLength}
              onChange={handleChange}
              step="0.1"
              required
              placeholder="e.g., 5.1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sepalWidth">Sepal Width (cm)</label>
            <input
              type="number"
              id="sepalWidth"
              name="sepalWidth"
              value={formData.sepalWidth}
              onChange={handleChange}
              step="0.1"
              required
              placeholder="e.g., 3.5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="petalLength">Petal Length (cm)</label>
            <input
              type="number"
              id="petalLength"
              name="petalLength"
              value={formData.petalLength}
              onChange={handleChange}
              step="0.1"
              required
              placeholder="e.g., 1.4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="petalWidth">Petal Width (cm)</label>
            <input
              type="number"
              id="petalWidth"
              name="petalWidth"
              value={formData.petalWidth}
              onChange={handleChange}
              step="0.1"
              required
              placeholder="e.g., 0.2"
            />
          </div>

          <div className="button-group">
            <button type="submit" disabled={loading} className="btn-predict">
              {loading ? 'Predicting...' : 'Predict Species'}
            </button>
            <button type="button" onClick={handleReset} className="btn-reset">
              Reset
            </button>
          </div>
        </form>

        {prediction && (
          <div className="result success">
            <h2>🎯 Prediction Result</h2>
            <p className="species-name">{prediction.species}</p>
            <p className="confidence">Confidence: {(prediction.confidence * 100).toFixed(1)}%</p>
            
            <div className="probabilities">
              <h3>Probability Distribution:</h3>
              {Object.entries(prediction.probabilities).map(([species, prob]) => (
                <div key={species} className="probability-item">
                  <div className="probability-label">
                    <span className="species-label">{species}</span>
                    <span className="prob-value">{(prob * 100).toFixed(1)}%</span>
                  </div>
                  <div className="probability-bar">
                    <div 
                      className="probability-fill" 
                      style={{width: `${prob * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="result error">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        )}

        <div className="info-box">
          <h3>Sample Values:</h3>
          <ul>
            <li><strong>Setosa:</strong> 5.1, 3.5, 1.4, 0.2</li>
            <li><strong>Versicolor:</strong> 6.0, 2.9, 4.5, 1.5</li>
            <li><strong>Virginica:</strong> 6.9, 3.1, 5.4, 2.1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
