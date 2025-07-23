import { server } from 'stackpress/http';

const app = server();

app.get('/', (req, res) => {
    const name = req.data.path('name', 'Guest');
    res.setBody('text/plain', `Hello, ${name}!`);
});

app.create().listen(3000, () => {
    console.log('Server is running on port 3000');
});