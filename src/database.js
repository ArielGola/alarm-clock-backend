const mongoose = require('mongoose');

try {
    
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected!');

} catch (error) {

    console.log('Database connect wrong,', error.message);  
    
};