import { Component, OnInit } from '@angular/core';
import { BookServices } from '../services/book.services';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  books: Book[] = [];
  panelOpenState = false;

  constructor(private bookS: BookServices) { }

  ngOnInit(): void {
    this.loading = true;
    this.bookS.getBooks().subscribe(lbook => {
      this.books = lbook;
      this.loading = false;
    })
  }

}
