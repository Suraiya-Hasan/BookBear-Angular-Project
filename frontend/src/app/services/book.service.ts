import { Injectable } from '@angular/core';
import { Book } from './../shared/models/Book';
import { sample_books, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BOOKS_BY_ID_URL, BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private router: Router, private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBookBySearchTerm(searchTerm: string) {
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm)
  }
  getBookById(bookID: string): Observable<Book> {
    return this.http.get<Book>(BOOKS_BY_ID_URL + bookID);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }
  getAllBooksByTag(tag: string): Observable<Book[]> {
    // return tag === 'All' ?
    //   this.getAll() :
    //   this.getAll().filter(book => book.tags?.includes(tag))
    if (tag === 'All') {
      this.router.navigateByUrl('/');
      return this.getAll();
    }
    else {
      return this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);
    }
  }
}
