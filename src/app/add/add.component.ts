import { Component, OnInit } from '@angular/core';
import {GenericService} from '../services/generic.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name:string;
  mob:string;
  age:string;
  salary:string;
  allUsers = [];

  constructor( private generic :GenericService,
    private router:Router
    ) { }

  ngOnInit() {

    
    this.allUsers=[];
    this.allUsers = JSON.parse(JSON.stringify(this.generic.getAllUsers()));
    

  }

  saveDetailsHandler(){

      let tempObj ={"name":"","mob":"","age":"","salary":""};
      tempObj.name = this.name;
      tempObj.mob = this.mob;
      tempObj.age = this.age;
      tempObj.salary = this.salary;
      this.allUsers.push(tempObj);
      console.log("all user is now "+JSON.stringify(this.allUsers));
      this.generic.saveAllUsers(tempObj); 
      this.name ="";
      this.age = "";
      this.salary = "";
      this.mob = "";
    
  }

  viewDetailsHandler(index){
    this.generic.setUser(index);
    this.router.navigate(['/view'])
    
  }

}
