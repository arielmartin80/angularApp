import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = "Ariel Martin";
  age: number = 40;

  users: string[] = ['Ariel' , 'Romina', 'Calel', 'Eva', 'Yamy']
  posts!: Post[];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    });

  }
  ngOnInit(): void {
    
  }

  addUser(newUser: any) {
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus()
    return false;
  }

  deleteUser(user: string) {
    for(let i = 0; i < this.users.length; i++) {
      if(user == this.users[i]) {
        this.users.splice(i,1);
      }
    }

  }

}
