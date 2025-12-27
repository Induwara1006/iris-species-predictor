# Iris Flower Species Prediction Project
# Step 1: Import libraries
from sklearn.datasets import load_iris
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

# Step 2: Load the dataset
iris = load_iris()
X = pd.DataFrame(iris.data, columns=iris.feature_names)
y = pd.Series(iris.target, name='species')

print('First 5 rows of features:')
print(X.head())
print('\nFirst 5 labels:')
print(y.head())

# Step 3: Visualize the data (optional, but helpful)
sns.pairplot(pd.concat([X, y.rename('species')], axis=1), hue='species')
plt.show()

# Step 4: Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 5: Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 6: Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'\nAccuracy: {accuracy:.2f}')

cm = confusion_matrix(y_test, y_pred)
print('Confusion Matrix:\n', cm)

# Step 7: Visualize the confusion matrix
sns.heatmap(cm, annot=True, fmt='d')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()

# Step 8: Feature importance (optional)
importances = model.feature_importances_
sns.barplot(x=importances, y=X.columns)
plt.title('Feature Importances')
plt.show()

# Step 9: Make predictions for new, unseen flower measurements
# User input for predictions
print('\n' + '='*50)
print('Enter flower measurements to predict the species')
print('='*50)

while True:
    try:
        sepal_length = float(input('Enter sepal length (cm): '))
        sepal_width = float(input('Enter sepal width (cm): '))
        petal_length = float(input('Enter petal length (cm): '))
        petal_width = float(input('Enter petal width (cm): '))
        
        # Create DataFrame with user input
        new_sample = pd.DataFrame([[sepal_length, sepal_width, petal_length, petal_width]], 
                                   columns=X.columns)
        
        # Make prediction
        prediction = model.predict(new_sample)
        species_names = iris.target_names
        
        print(f'\nPredicted species: {species_names[prediction[0]]}')
        print('='*50)
        
        # Ask if user wants to predict another
        another = input('\nPredict another flower? (yes/no): ').lower()
        if another not in ['yes', 'y']:
            print('Thank you for using the Iris Species Predictor!')
            break
    except ValueError:
        print('Invalid input. Please enter numeric values.')
    except KeyboardInterrupt:
        print('\nProgram terminated by user.')
        break