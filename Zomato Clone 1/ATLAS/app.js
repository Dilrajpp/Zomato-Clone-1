const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();

const routes = require ('./Routes/index');
const paymentRoutes = require("./Controller/payment");

dotenv.config();

const port = process.env.PORT || 5500;
const hostname = 'localhost';
//const dbUrl = 'mongodb://127.0.0.1:27017/zomato_56';
const atlasDbUrl = 'mongodb+srv://user_70:nUjSlFGl5yc5AAJl@cluster0.6yr2szs.mongodb.net/Zomato_db_dilraj?retryWrites=true&w=majority'
//'mongodb+srv:dilraj_db70:fcB2D1Ao8nwydCPA@cluster0.7u6lwao.mongodb.net/dilraj_db70?retryWrites=true&w=majority'

//user_56
//7ggxEKPWJ0b5iRvX

//database username - dilraj_db70
                      //dilraj_db70
//pasword - eN5dpm*2NWB.8Bh
            //fcB2D1Ao8nwydCPA
//link - mongodb+srv://dilraj_db70:<password>@cluster0.7u6lwao.mongodb.net/?retryWrites=true&w=majority
//database- Zomato_dilraj


// database - Zomato_db_dilraj
//user name - user_70
//pasword - nUjSlFGl5yc5AAJl
//mongodb+srv://user_70:<password>@cluster0.6yr2szs.mongodb.net/?retryWrites=true&w=majority

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use ('/', routes);
app.use("/api/payment/", paymentRoutes);

mongoose.connect(atlasDbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then( res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });
})
.catch(err => console.log(err));




/*const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require("cors");
const path = require("./Routes/index");

require("./db/connection")

app.use(cors());
const corsOptions = {
    origin:'http://localhost:3000/',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", path);
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})*/