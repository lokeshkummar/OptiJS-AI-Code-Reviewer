const app = require('./src/app.js')

const port  = process.env.PORT;

app.listen(port, ()=>{
console.log(`server is running perfectly on port:${port}`);
})
