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
const dbUrl = 'mongodb://127.0.0.1:27017/zomato_56';
const atlasDbUrl = 'mongodb+srv://user_156:IwEy5bYj1VW1fjXB@cluster0.fmutpzq.mongodb.net/komato_db56?retryWrites=true&w=majority'

//user_56
//7ggxEKPWJ0b5iRvX

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
})
*/