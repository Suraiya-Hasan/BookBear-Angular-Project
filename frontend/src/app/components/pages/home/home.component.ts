import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/Book';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];


  constructor(private bookService: BookService, activatedRoute: ActivatedRoute) {
    let booksObservable: Observable<Book[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        booksObservable = bookService.getAllBookBySearchTerm(params.searchTerm)
      else if (params.tag)
        booksObservable = bookService.getAllBooksByTag(params.tag);
      else
        booksObservable = bookService.getAll();

      booksObservable.subscribe((serverBooks) => {
        this.books = serverBooks;
      })
    })
  }


  ngOnInit(): void {

  }

}
