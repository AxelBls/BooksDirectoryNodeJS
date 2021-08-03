import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookServices } from '../services/book.services';
import { Book } from '../models/book.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  loading = false;
  books: Book[] = [];
  panelOpenState: boolean = false;
  images: any = [];

  constructor(private bookS: BookServices, private sanitizer : DomSanitizer) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.bookS.getBooks().subscribe(lbook => {
      this.books=lbook;
      this.loading = false;
    })
  }

}
