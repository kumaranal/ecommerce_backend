import  express  from 'express';
import userRoutes from "../src/routes/user.routes.js"
import collRoutes from "../src/routes/collection.routes.js"
import ProductRoutes from '../src/routes/product.routes.js';
import Order from '../src/routes/order.routes.js';
import cors from "cors"
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
var app = express();

app.use(express.json())
app.use(cors())
app.use(fileupload({
    useTempFiles:true
}))
app.get('/', function (req, res) {
res.send("Welocme to GeeksforGeeks!");
});

app.use('/api',userRoutes);
app.use('/api',collRoutes);
app.use('/api',ProductRoutes);
app.use('/api',Order)

   app.use(function(err,req,res,next){
    console.log(err.message);
    if(!err.statusCode)err.statusCode=500;
    res.status(err.statusCode).send(err.message);
});


export default app;
