import { Schema, model } from "mongoose";


export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    favorite: boolean;
    stars: number;
    imageUrl: string;
    genres: string[];
    publishedYear: number;
    tags: string[];
}

export const BookSchema = new Schema<Book>(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        price: { type: Number, required: true },
        favorite: { type: Boolean, default: false },
        stars: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        genres: { type: [String], required: true },
        publishedYear: { type: Number, required: true },
        tags: { type: [String] },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
)

export const BookModel = model<Book>('book', BookSchema);