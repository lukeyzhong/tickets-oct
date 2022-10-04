import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // wishlist: any = [];
  wishlist$!: Observable<any>;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.wishlist$ = this.booksService.wishes$;
  }

  deletebook(book: any) {
    this.booksService.fromWishlist(book);
  }

}
