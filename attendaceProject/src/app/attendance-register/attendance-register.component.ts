import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.css']
})
export class AttendanceRegisterComponent implements OnInit {

  Alumnos: any;

  constructor() {

    this.Alumnos = {
      nombre: [
        'Jesus',
        'Andrea',
        'Jorge',
        'Luis',
        'Claudia',
        'Ismael',
        'Raul',
        'Francisco',
        'Lourdes',
        'Daniela'
    ]
    };

  }

  ngOnInit() {
  }
  usericon="./../../assets/img/user.png";
  happy="./../../assets/img/happy.png";
}
