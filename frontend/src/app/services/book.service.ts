import { Injectable } from '@angular/core';
import { Book } from './../shared/models/Book';
import { sample_books, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private router: Router) { }

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
  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllBooksByTag(tag: string): Book[] {
    // return tag === 'All' ?
    //   this.getAll() :
    //   this.getAll().filter(book => book.tags?.includes(tag))
    if (tag === 'All') {
      this.router.navigateByUrl('/');
      return this.getAll();
    }
    else {
      return this.getAll().filter(book => book.tags?.includes(tag));
    }
  }
}
