import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserServices } from '../services/user.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  user: any
  constructor(private userS: UserServices) { 
  }

  ngOnInit(): void {
    this.loading = true;
    this.userS.getOneUser(3).subscribe(lusers => {
      console.log(lusers);
      this.user = lusers;
      this.loading = false;
    })
  }
}
