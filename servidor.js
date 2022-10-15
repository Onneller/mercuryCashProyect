const express = require('express');
const methodOverride = require('method-override')
const path = require('path');
const app = express()
const port = 3000
const mainRouter = require("./src/router/mainRouter.js");
app.use(express.static(path.join(__dirname, './src/public')));


// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use("/", mainRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('index.html')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})