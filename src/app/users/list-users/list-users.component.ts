import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  username: number;
  email: string;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];

  listUsers: User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    });
  }

}
