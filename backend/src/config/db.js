const mongoose = require('mongoose');

/**
 * MongoDB Atlas Connection Configuration
 * 
 * Required Environment Variable:
 * MONGODB_URI - Your MongoDB Atlas connection string
 * 
 * Example Atlas URI format:
 * mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
 */

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error(
                'MONGODB_URI is not defined in environment variables. ' +
                'Please add your MongoDB Atlas connection string to your .env file.'
            );
        }

        // MongoDB Atlas connection options
        const options = {
            // These options optimize for MongoDB Atlas
            maxPoolSize: 10,           // Maximum number of connections in the pool
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000,    // Timeout for socket operations
        };

        const conn = await mongoose.connect(mongoUri, options);

        console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
        console.log(`📦 Database: ${conn.connection.name}`);

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('⚠️ MongoDB disconnected. Attempting to reconnect...');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('✅ MongoDB reconnected successfully');
        });

    } catch (error) {
        console.error(`❌ MongoDB Atlas Connection Error: ${error.message}`);
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('🔌 MongoDB Atlas disconnected');
    } catch (error) {
        console.error(`❌ Error disconnecting: ${error.message}`);
    }
};

module.exports = connectDB;
module.exports.disconnectDB = disconnectDB;
