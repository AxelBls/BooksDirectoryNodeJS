import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';
import { User } from '../models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[] = [];
  oneUser : any;  

  constructor(private userS: UserServices) {
    
  }

  ngOnInit(): void {
    this.loading = true;
    this.userS.getUsers().subscribe(lusers => {
      console.log(lusers);
      this.oneUser = lusers;
      this.loading = false;
    })
  }

}
