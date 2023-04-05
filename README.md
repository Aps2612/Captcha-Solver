<h1>Captcha Solver></h1>
This is a Node.js script that solves CAPTCHAs using OCR (optical character recognition).<br>

<h2>Installation</h2>
To use this script, you must have Node.js and NPM (Node Package Manager) installed on your system.<br>

Clone this repository to your local machine.<br>
Navigate to the project directory and run the following command to install the required dependencies: <b>npm install</b><br>

<h2>Usage</h2>
To use the captcha solver, you must provide a public URL to an image of a captcha that you want to solve.<br>
The script will download the image, preprocess it to improve OCR accuracy, run OCR using Tesseract, and return the recognized text.<br>

To run the script, open a terminal or command prompt, navigate to the project directory, and run the following command:<br>
<b>node index.js <captcha_image_url></b><br><br>

Replace <captcha_image_url> with the public URL of the captcha image that you want to solve.<br>

<b>node index.js https://i.ibb.co/jTKYQqP/Captcha-United.png</b>

<h2>Acknowledgements</h2>
This script was created using the following libraries:<br>

<b>Axios</b><br>
<b>Jimp</b><br>
<b>Tesseract.js</b><br>
