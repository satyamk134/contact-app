import { Component, OnInit } from '@angular/core';
import {GenericService} from '../services/generic.service';
import {Router, UrlSerializer} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userDetail:any={}

  constructor(
    private generic:GenericService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userDetail = this.generic.getUser();
    console.log("get user details is"+JSON.stringify(this.userDetail));

  }

  addMore(){
    this.router.navigate(['/']);
  }

}
