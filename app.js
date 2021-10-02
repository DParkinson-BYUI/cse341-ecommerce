const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:5000
const errorController = require('./controllers/error');
const app = express();

// Route setup. You can implement more in the future!
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use('/admin', adminRoutes)
  .use(shopRoutes)
  .use(errorController.get404)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));  
