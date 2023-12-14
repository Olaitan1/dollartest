const mongoose = require('mongoose');
const dotenv = require ('dotenv')

dotenv.config()


  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('Database connection successful'))
    .catch((err) =>
    {
        console.log(err)
    })


