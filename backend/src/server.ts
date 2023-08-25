import express from "express";
import cors from "cors";
import { sample_books, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/books", (req, res) => {
    res.send(sample_books);
})
app.get("/api/books/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const books = sample_books
        .filter(
            book => book.title.toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    res.send(books)
})

app.get("/api/books/tags", (req, res) => {
    res.send(sample_tags);
})
app.get("/api/books/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const books = sample_books.filter(book => book.tags?.includes(tagName));
    res.send(books);
})

app.get("/api/books/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const books = sample_books.find(book => book.id == bookId);
    res.send(books);
})

const port = 5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})