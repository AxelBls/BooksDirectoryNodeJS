import { Component, OnInit } from '@angular/core';
import { BookServices } from '../services/book.services';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  loading = false;
  books: Book[] = [];
  panelOpenState = false;
  length = 0

  constructor(private bookS: BookServices) { }

  ngOnInit(): void {
    this.loading = true;
    this.bookS.getBooks().subscribe(lbook => {
      this.books=lbook;
      this.loading = false;
      this.length = lbook.length;
    })
  }

}
