const express = require('express')
const path = require('path')
const cors = require('cors');
const sequelize = require('./config/connection')
const routes = require('./routes')
const app = express()


const PORT = 5500;


app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routes)

// app.use(express.static(path.join(__dirname, )))

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}/`))
})