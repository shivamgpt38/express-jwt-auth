const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectDb = async (db) => {
    try {
        await mongoose.connect(db, { useMongoClient: true });
        console.log('connected!!!');
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;