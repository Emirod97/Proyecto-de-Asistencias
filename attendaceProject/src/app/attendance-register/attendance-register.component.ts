import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { Attendance } from '../models/attendance';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Lista } from '../models/lista';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Location } from '@angular/common';



@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.css']
})
export class AttendanceRegisterComponent implements OnInit {
  
  constructor(private activateRoute: ActivatedRoute, private service: DataServiceService, private modalService: BsModalService, private router: Router, private location: Location) { }

  Alumnos: any = [];

  nombre: string;

  list: Array<Lista> = [];

  modalRef: BsModalRef;

  usericon = "./../../assets/img/user.png";
  question = "./../../assets/img/question.png";

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }


  ngOnInit() {
    // Se obtiene el id del maestro de la ruta
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    //Consulta al servicio obteniendo los grupos del asignados al usuario
    this.service.getStudents(params.id).subscribe(
      res => {

        this.Alumnos = res;



        for (let index = 0; index < this.Alumnos.length; index++) {

          let listObj = {} as Lista;

          listObj.id_alumno = this.Alumnos[index].id_alumno;
          listObj.nombre = this.Alumnos[index].nombre;
          listObj.apellidoP = this.Alumnos[index].apellido_paterno;
          listObj.apellidoM = this.Alumnos[index].apellido_materno;
          listObj.asistencia = "2";
          listObj.indicador_uno = "happy";
          listObj.indicador_dos = "happy";
          listObj.indicador_tres = "happy";
          listObj.indicador_cuatro = 'happy';
          listObj.comentario='';

          console.log(listObj);

          this.list.push(listObj);
          console.log(this.list);

        }



      },
      err => console.error(err)
    );



  }

  cambiar1(id: any) {


    for (let index = 0; index < this.list.length; index++) {
      if (id == this.list[index].id_alumno) {

        if (this.list[index].indicador_uno == "happy") {
          this.list[index].indicador_uno = "regular";
        } else if (this.list[index].indicador_uno == "regular") {
          this.list[index].indicador_uno = "sad";
        } else {
          this.list[index].indicador_uno = "happy";
        }
      }
    }

  }

  cambiar2(id: any) {
    for (let index = 0; index < this.list.length; index++) {
      if (id == this.list[index].id_alumno) {

        if (this.list[index].indicador_dos == "happy") {
          this.list[index].indicador_dos = "regular";
        } else if (this.list[index].indicador_dos == "regular") {
          this.list[index].indicador_dos = "sad";
        } else {
          this.list[index].indicador_dos = "happy";
        }
      }
    }
  }
  cambiar3(id: any) {
    for (let index = 0; index < this.list.length; index++) {
      if (id == this.list[index].id_alumno) {

        if (this.list[index].indicador_tres == "happy") {
          this.list[index].indicador_tres = "regular";
        } else if (this.list[index].indicador_tres == "regular") {
          this.list[index].indicador_tres = "sad";
        } else {
          this.list[index].indicador_tres = "happy";
        }
      }
    }
  }
  cambiar4(id: any) {
    for (let index = 0; index < this.list.length; index++) {
      if (id == this.list[index].id_alumno) {

        if (this.list[index].indicador_cuatro == "happy") {
          this.list[index].indicador_cuatro = "regular";
        } else if (this.list[index].indicador_cuatro == "regular") {
          this.list[index].indicador_cuatro = "sad";
        } else {
          this.list[index].indicador_cuatro = "happy";
        }
      }
    }
  }

  tomarLista() {
    const params = this.activateRoute.snapshot.params;
    for (let index = 0; index < this.list.length; index++) {
      const e = this.list[index];

      let asisObj = {} as Attendance;

      asisObj.asistencia = +(<HTMLInputElement>document.getElementById('' + e.id_alumno)).value;
      asisObj.id_alumno = e.id_alumno;
      asisObj.grupo = params.id;
      asisObj.indicador_uno = this.getIndicador(e.indicador_uno);
      asisObj.indicador_dos = this.getIndicador(e.indicador_dos);
      asisObj.indicador_tres = this.getIndicador(e.indicador_tres);
      asisObj.indicador_cuatro = this.getIndicador(e.indicador_cuatro);
      asisObj.comentario = e.comentario;

      console.log(asisObj);

      this.service.saveAttendance(asisObj).subscribe(
        res => console.log(res),
        err => console.error(err)
      );

    }

    this.location.back();

    //this.router.navigate(['/user/login']);

  }
  regresar(){
    this.location.back();
  }

  getIndicador(value: any): string {
    let result: string;

    if (value == "happy") {
      result = "Bueno"
    } else if (value == "regular") {
      result = "Medio";
    } else {
      result = "Malo";
    }

    return result;
  }

}







