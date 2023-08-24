import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/Book';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];


  constructor(private bookService: BookService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.books = bookService.getAllBookBySearchTerm(params.searchTerm)
      else
        this.books = bookService.getAll();
    })
  }


  ngOnInit(): void {

  }

}
