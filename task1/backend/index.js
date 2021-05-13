const express = require('express')
const db = require("./mysql");
const app = express()
const port = 5000
app.use(require('body-parser').json());
app.get('/api', (req, res) => {
    res.send('Hello api!')
})

app.get('/api/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getAll', async (req, res) => {
    const items = await db.getItems();
    res.send(items);
})

app.post('/add',async (req,res)=>{
    console.log(req.body);
    const item = {
        id: (Math.random()*1000000).toFixed(0),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
})

db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
