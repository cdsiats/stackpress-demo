import { action } from "stackpress/server";

export default action(function HomePage(req, res) {
    const name = req.data<string>('name');
    res.setResults({ name });
})