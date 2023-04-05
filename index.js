const axios = require('axios')
const Jimp = require('jimp');
const Tesseract = require('tesseract.js');

async function solveCaptcha(imageUrl) {
  try {
    // Download captcha image from URL
    const response = await axios.get(imageUrl, { responseType: 'buffer' });
    const buffer = response.body;

    // Convert buffer to Jimp image object
    const image = await Jimp.read(buffer);

    // Apply pre-processing to improve OCR accuracy
    image.greyscale().contrast(1);

    // Run OCR on pre-processed image using Tesseract
    const result = await Tesseract.recognize(image.bitmap, {
      lang: 'eng',
      tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    });

    // Extract recognized text from OCR result
    const text = result.data.text.replace(/[^a-zA-Z0-9]/g, '');

    return text;
  } catch (error) {
    throw new Error('Unable to solve captcha: ' + error.message);
  }
}

(async function() {
    try {
      const imageUrl1 = 'https://i.ibb.co/jTKYQqP/Captcha-United.png';
      const captcha1 = await solveCaptcha(imageUrl1);
      console.log(`Captcha 1 solved: ${captcha1}`);
  
      const imageUrl2 = 'https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg';
      const captcha2 = await solveCaptcha(imageUrl2);
      console.log(`Captcha 2 solved: ${captcha2}`);
    } catch (error) {
      console.error(error);
    }
  })();
