const app = require('./src/app');
const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect('URI/day-06')
    .then(()=>{
        console.log('Connected to DB');
    })
}

connectToDb();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});