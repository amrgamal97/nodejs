const express = require("express");
const app = express();

app.use(express.json())
const coursesRoutes = require('./routes/courses-router');

app.use('/api/courses', coursesRoutes)

app.listen(3000, () => {
    console.log('listening on 3000')
})