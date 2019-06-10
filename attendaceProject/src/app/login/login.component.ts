import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router, private service: DataServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  usernames: any = [];

  Logocetys = "./../../assets/img/logocetys.png";
  checkbutton = "./../../assets/img/check_radio_sheet.png";

  public Login(e){

    e.preventDefault();

    var user = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
    console.log(user, pass);

    this.service.getUsers().subscribe(
      res => {
        console.log(res);
        this.usernames = res;
        for (let i = 0; i < this.usernames.length; i++) {

          console.log('vuelta');
    
          if (user == this.usernames[i].username && pass == this.usernames[i].password) {
    
    
    
            this.router.navigate(['/user/',this.usernames[i].username]).then( (e) => {
              if (e) {
                console.log("Navigation to groups is successful!");
              } else {
                console.log("Navigation to groups has failed!");
              }});
    
              break;
          }
    
        }
      },
      err => console.error(err)
    );

// tslint:disable-next-line: prefer-for-of


  }


}
