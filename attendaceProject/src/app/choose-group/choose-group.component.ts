import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css']
})
export class ChooseGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
Logocetys = "./../../assets/img/logocetys.png";
user="José"

public group(url){

  this.router.navigate([url]).then( (e) => {
    if (e) {
      console.log("Navigation to groups list is successful!");
    } else {
      console.log("Navigation to groups list has failed!");
    }});
}


}
