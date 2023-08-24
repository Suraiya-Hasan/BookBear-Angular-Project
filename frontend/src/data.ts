import { Book } from "./app/shared/models/Book";
import { Tag } from "./app/shared/models/Tag";


export const sample_books: Book[] = [
    {
        id: '1',
        title: 'Harry Potter and Philosopher\'s Stone',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/hp1.jpg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 1997,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '2',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/hp2.jpeg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 1998,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '3',
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 3.0,
        imageUrl: 'assets/hp3.jpg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 1999,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '4',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 5.0,
        imageUrl: 'assets/hp4.jpeg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 1999,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '5',
        title: 'Harry Potter and the Order of Phoenix',
        author: 'J K Rowling',
        price: 250,
        favorite: false,
        stars: 5.0,
        imageUrl: 'assets/hp5.jpeg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 2003,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '6',
        title: 'Harry Potter and the Half Blood Prince',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 5.0,
        imageUrl: 'assets/hp7.jpeg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 2005,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
    {
        id: '7',
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J K Rowling',
        price: 250,
        favorite: true,
        stars: 5.0,
        imageUrl: 'assets/hp6.jpg',
        genres: ['Fantasy', 'Adventure', 'Narrative'],
        publishedYear: 2007,
        tags: ['Children\'s Book', 'Adventure', 'Fantasy']
    },
]

export const sample_tags: Tag[] = [
    { name: 'All', count: 7 },
    { name: 'Fantasy', count: 5 },
    { name: 'Adventure', count: 5 },
    { name: 'Comedy', count: 0 },
    { name: 'Dark', count: 2 },
    { name: 'YA', count: 0 }
]