import { Router } from "express";
import { sample_books, sample_tags } from "../data";
import asynceHandler from 'express-async-handler';
import { BookModel } from "../models/book.model";

const router = Router();

router.get("/seed", asynceHandler(
    async (req, res) => {
        const booksCount = await BookModel.countDocuments();
        if (booksCount > 0) {
            res.send("Seed is already done.");
            return;
        }

        await BookModel.create(sample_books);
        res.send("Seed is Done");
    }
))


router.get("/", (req, res) => {
    res.send(sample_books);
})
router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const books = sample_books
        .filter(
            book => book.title.toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    res.send(books)
})

router.get("/tags", (req, res) => {
    res.send(sample_tags);
})
router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const books = sample_books.filter(book => book.tags?.includes(tagName));
    res.send(books);
})

router.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const books = sample_books.find(book => book.id == bookId);
    res.send(books);
})

export default router;