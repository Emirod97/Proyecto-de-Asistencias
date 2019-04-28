import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    usernames: string[]=["e008836", "e008153"];
    passwords: string[]=["e008836", "e008153"]


  constructor(private router: Router) { }

  ngOnInit() {
  }

  Logocetys = "./../../assets/img/logocetys.png";
  checkbutton = "./../../assets/img/check_radio_sheet.png";

  public Login(e){

    e.preventDefault();

    var user = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
    console.log(user, pass);

// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.usernames.length; i++) {

      console.log('vuelta');

      if (user == this.usernames[i] && pass == this.passwords[i]) {



        this.router.navigate(['/user/id']).then( (e) => {
          if (e) {
            console.log("Navigation to groups is successful!");
          } else {
            console.log("Navigation to groups has failed!");
          }});

          break;
      }

    }

  }


}
