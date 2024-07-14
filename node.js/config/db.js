const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task-management')
        console.log('Database Connected.');
    } catch (error) {
        console.log("DB Connection Error ", error);
    }
};
module.exports = connectDb;