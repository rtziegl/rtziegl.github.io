import os
from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

# Configurations for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'me@ryleyziegler.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_mail', methods=['POST'])
def send_mail():
    if request.method == 'POST':
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']
        
        msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[email])
        msg.body = message
        mail.send(msg)
        return redirect(url_for('index'))

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
