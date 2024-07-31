const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const { v4: uuidv4 } = require('uuid'); // To generate unique identifiers

const app = express();
const port = 4000; // Port 4000 or any available port

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

// Serve static files from the public directory
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Resume Upload Page
app.post('/upload', upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  if (path.extname(req.file.originalname) !== '.pdf') {
    return res.status(400).send('Please upload a PDF file.');
  }

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);

    if (!data.text) {
      return res.status(500).send('Failed to extract text from PDF.');
    }

    const text = data.text;
    const uniqueId = uuidv4();
    const textFilePath = path.join(__dirname, `../uploads/${uniqueId}.txt`);

    // Store the extracted text
    fs.writeFileSync(textFilePath, text);

    // Clean up the uploaded PDF
    fs.unlinkSync(req.file.path);

    // Send the unique ID to the client
    res.json({ message: 'Resume uploaded and processing started.', id: uniqueId });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing the PDF.');
  }
});

// Text Extraction and Matching Page
app.get('/text-extraction/:id', (req, res) => {
  const { id } = req.params;
  const filePath = path.join(__dirname, `../uploads/${id}.txt`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading extracted text:', err);
      return res.status(500).send('Error reading extracted text.');
    }
    res.send(`
      <html>
        <head><title>Extracted Text</title></head>
        <body>
          <h1>Extracted Text from Resume</h1>
          <pre>${data}</pre>
          <a href="/">Return to Home</a>
        </body>
      </html>
    `);
  });
});

// Interview Questions Page
app.get('/interview-questions', (req, res) => {
  // Mock response for interview questions
  const questions = [
    'Tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Describe a challenging project you worked on.'
  ];
  res.json(questions);
});

// User Dashboard
app.get('/dashboard', (req, res) => {
  // Mock response for user dashboard
  const uploads = [
    { id: 1, name: 'Resume1.pdf', status: 'Completed' },
    { id: 2, name: 'Resume2.pdf', status: 'Processing' }
  ];
  res.json(uploads);
});

// Support Page
app.get('/support', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/support.html'));
});

// About Page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
