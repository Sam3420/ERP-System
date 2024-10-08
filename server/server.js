
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const timetableRoutes = require('./routes/timetableRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); //Enable CORS for all routes
app.use(express.json());
app.use(express.static('public')); //Serve static files from the public directory

//Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

//Routes
app.use('/api', timetableRoutes); //Use the route with a prefix

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
