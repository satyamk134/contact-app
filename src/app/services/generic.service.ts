import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  allUsersCopy=[];
  index:number;
  eachUser:any={};
  constructor() { }

  saveAllUsers(data:any){
    this.allUsersCopy.push(data);
    console.log("now all users are"+JSON.stringify(this.allUsersCopy));
  }

  getAllUsers(){
    return this.allUsersCopy;
  }

  setUser(givenIndex){
      this.index = parseInt(givenIndex);
  }
  getUser(){
    this.eachUser = this.allUsersCopy[this.index]
    return this.eachUser;
  }
}
