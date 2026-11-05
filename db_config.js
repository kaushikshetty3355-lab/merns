const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/merns')
        .then(() => console.log('connnected to db...'))
        .catch((err) => console.log(err))
}

module.exports = {connectDB}
