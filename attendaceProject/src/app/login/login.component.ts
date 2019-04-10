import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Logocetys = "./../../assets/img/logocetys.png";

  public login(url){

    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log("Navigation to groups is successful!");
      } else {
        console.log("Navigation to groups has failed!");
      }});
  }


}
