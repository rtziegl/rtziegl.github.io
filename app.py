import os
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configurations for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

@app.route('/send_mail', methods=['POST'])
def send_mail():
    try:
        data = request.get_json()
        email = data['email']
        subject = data['subject']
        message = data['message']
        
        msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[email])
        msg.body = message
        mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        # Log the error for debugging
        print(f"Failed to send email: {e}")
        return jsonify({"message": "Failed to send email"}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
