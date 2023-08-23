import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/Book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];


  constructor(private bookService: BookService) {
    this.books = bookService.getAll();
  }


  ngOnInit(): void {

  }

}
