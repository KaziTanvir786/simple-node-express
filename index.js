const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// const handler = (req, res) => {
//     res.send('Hello from node');
// }

// app.get('/',handler);

const users = [
    {
        id: 1, name: "Kazi Tanvir", email: "kazitanvir786@gmail"
    },
    {
        id: 2, name: "Sadia Islam", email: "sadia.islam18@gmail"
    },
    {
        id: 3, name: "Nadia Binte Rahman", email: "nadiabinterahman@gmail"
    },
    {
        id: 4, name: "Minhazul Arfin", email: "minhazul.arefin786@gmail"
    },
    {
        id: 5, name: "Kodom Ali", email: "kodomali555@gmail"
    },
]

app.get('/users/', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users);
})

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruit/mangoes/fazli', (req, res) => {
    res.send('Yummy yumy fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})