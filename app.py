from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load and train the model
iris = load_iris()
X = iris.data
y = iris.target
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

species_names = iris.target_names

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        sepal_length = float(data['sepalLength'])
        sepal_width = float(data['sepalWidth'])
        petal_length = float(data['petalLength'])
        petal_width = float(data['petalWidth'])
        
        # Make prediction
        features = np.array([[sepal_length, sepal_width, petal_length, petal_width]])
        prediction = model.predict(features)
        species = species_names[prediction[0]]
        
        return jsonify({
            'success': True,
            'species': species
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print('Starting Flask API server...')
    print('API available at http://localhost:5000')
    app.run(debug=True, port=5000)
