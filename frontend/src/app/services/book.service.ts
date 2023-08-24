import { Injectable } from '@angular/core';
import { Book } from './../shared/models/Book';
import { sample_books } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll(): Book[] {
    return sample_books;
  }

  getAllBookBySearchTerm(searchTerm: string) {
    return this.getAll()
      .filter(
        book => book.title.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
  }
  getBookById(bookID: string): Book {
    return this.getAll().find(book => book.id == bookID) ?? new Book();
  }
}
