import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
// import { Book, BookResponse } from './books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string = "https://www.googleapis.com/books/v1/volumes?q=";

  private bookList: any[] = [];
  private wishList: any[] = [];

  private booklistSubject$ = new BehaviorSubject(this.bookList);
  private wishlistSubject$ = new BehaviorSubject(this.wishList);

  wishes$ = this.wishlistSubject$.asObservable();
  books$ = this.booklistSubject$.asObservable();

  constructor(private http: HttpClient) { }

  getBooks(book: any) {
    return this.http.get([this.baseUrl, book].join(''))
    .pipe(
      map((bookRes: any) => {
        const info = bookRes.items;
        this.bookList = [...info];
        this.booklistSubject$.next(this.bookList);
        return info;
      }),
    )
  }

  toWishlist(book: any) {
    const addedBook = this.wishList.find(
      (ele) => ele.id === book.id
    );
    if (!addedBook) {
      this.wishList = [...this.wishList, book];
    }
    this.wishlistSubject$.next(this.wishList); 
  }

  fromWishlist(book: any) {
    const deletedList = this.wishList.filter(
      (ele) => ele.id !== book.id
    );
    this.wishList = deletedList;
    this.wishlistSubject$.next(this.wishList);
  }

}
