const express = require('express');
const app = express();

const port = 5009;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/math', (req, res) => {
    const paramA = parseFloat(req.query.paramA);
    const paramB = parseFloat(req.query.paramB);
    res.send(` A = ${paramA}<br> B = ${paramB}<br> Формула: A^2/B - sin(B)<br> Результат: ${f(paramA, paramB)}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
app.use(express.static('public'));
function f(a, b){
return Math.sqrt(a)/b-Math.sin(a);
}