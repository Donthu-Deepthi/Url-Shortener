const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const methodOverride = require('method-override');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Allow frontend (Vercel) to call backend
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API: Get all short URLs
app.get('/shortUrls', async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.json(shortUrls);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch URLs' });
  }
});

// API: Create a short URL
app.post('/shortUrls', async (req, res) => {
  try {
    await ShortUrl.create({ full: req.body.fullurl });
    res.json({ success: true, message: 'Short URL created' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create short URL' });
  }
});

// Redirect from short URL to full URL
app.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (!shortUrl) return res.sendStatus(404);

    shortUrl.clicks++;
    await shortUrl.save();
    res.redirect(shortUrl.full);
  } catch (err) {
    res.status(500).json({ error: 'Error processing redirect' });
  }
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
