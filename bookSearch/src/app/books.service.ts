import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

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

  getBooks(book: string) {
    return this.http.get([this.baseUrl, book].join(''))
    .pipe(
      map((data: any) => {
        this.bookList = [...data.items];
        this.booklistSubject$.next(this.bookList);
        return data.items;
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
