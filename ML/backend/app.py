from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import pandas as pd
from datetime import datetime
from mtcnn import MTCNN
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = './uploads/'
app.config['EXCEL_FILE'] = 'C:/Users/wonde/Python/backend/volunteer_data.xlsx'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

detector = MTCNN()

def detect_faces(img):
    image = img
    image = np.array(image)
    results = detector.detect_faces(image)
    return len(results)

def save_to_excel(date, location, num_faces):
    if os.path.exists(app.config['EXCEL_FILE']):
        df = pd.read_excel(app.config['EXCEL_FILE'])
    else:
        df = pd.DataFrame(columns=['Date', 'Location', 'Number of Faces'])
    df = df.append({'Date': date, 'Location': location, 'Number of Faces': num_faces}, ignore_index=True)
    df.to_excel(app.config['EXCEL_FILE'], index=False)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files or 'location' not in request.form:
        return jsonify({'error': 'No file or location provided'}), 400
    
    file = request.files['file']
    location = request.form.get('location')
    filename = file.filename
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    img = Image.open(file)
    

    num_faces = detect_faces(img)
    date = datetime.now().strftime('%Y-%m-%d')
    save_to_excel(date, location, num_faces)

    return jsonify({'numFaces': num_faces})

@app.route('/data', methods=['GET'])
def get_data():
    if os.path.exists(app.config['EXCEL_FILE']):
        df = pd.read_excel(app.config['EXCEL_FILE'])
        return jsonify(df.to_dict(orient='records'))
    return jsonify([])

@app.route('/download', methods=['GET'])
def download_file():
    return send_file(app.config['EXCEL_FILE'], as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
