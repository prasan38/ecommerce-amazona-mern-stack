
var express = require("express");
var mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
var userRouter = require("./routers/userRouter");
var dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.get('/', (req, res) => {
    res.send("Server is Ready");
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

let port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Served at port  ${port}`);
});