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
}
