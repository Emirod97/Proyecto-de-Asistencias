import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';



@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.css']
})
export class AttendanceRegisterComponent implements OnInit {

  Alumnos: any = [];
  contador = 1;
  face1 = "happy";

  control:{
    nombre:string,
    apellidoP:string,
    apellidoM:string,
    face1: String,
    face2: String,
    face3: String,
    face4: String
  }[];

  constructor(private activateRoute: ActivatedRoute, private service: DataServiceService) { }

  ngOnInit() {

    // Se obtiene el id del maestro de la ruta
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    //Consulta al servicio obteniendo los grupos del asignados al usuario
    this.service.getStudents(params.id).subscribe(
      res => {
        console.log(res)
        this.Alumnos = res;
        console.log(this.Alumnos)
      },
      err => console.error(err)
    ); 

  }



  changeFace1() {
    if (this.contador == 0) {
      this.face1 = "happy";
      this.contador = 1;
    } else {
      if (this.contador == 1) {
        this.face1 = "regular";
        this.contador = 2;
      } else {
        if (this.contador == 2) {
          this.face1 = "sad";
          this.contador = 0;
        }
      }
    }
  }
  usericon = "./../../assets/img/user.png";
  happy = "./../../assets/img/happy.png";
  question = "./../../assets/img/question.png";
  count = 0;
}
