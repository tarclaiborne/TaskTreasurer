const mongoose = require('mongoose');

// Debugging: Print the MondoDB connection URI
console.log("Attempting to connect to MongoDB with URI:", process.env.MONGO_URI);

const connectDB = async () => { 
    try { 
        const conn = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) { 
        console.error(`❌ Error: ${error.message}`); 
        process.exit(1); // Exit process with failure 
    } 
}; 

module.exports = connectDB