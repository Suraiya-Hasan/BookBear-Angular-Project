import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/shared/models/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  book!: Book;
  constructor(activatedRoute: ActivatedRoute, bookService: BookService, private cartService: CartService, private router: Router) {

    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        bookService.getBookById(params.id).subscribe(serverBook => this.book = serverBook);
      }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }

}
