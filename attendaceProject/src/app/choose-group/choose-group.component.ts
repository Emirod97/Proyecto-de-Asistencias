import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataServiceService } from '../services/data-service.service';
import { Group } from '../models/group';




@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css']
})
export class ChooseGroupComponent implements OnInit {

  groups: any = [];
  nombre: any;
  user: string;
  list: Array<Group> = [];
  constructor(private router: Router, private service: DataServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // Se obtiene el id del maestro de la ruta
    const params = this.activateRoute.snapshot.params;

    //Consulta al servicio obteniendo los grupos del asignados al usuario
    this.service.getGroup(params.id).subscribe(
      res => {
        console.log(res)
        this.groups = res;

        

        for (let index = 0; index < this.groups.length; index++) {
          let listObj = {} as Group;
          
          listObj = this.groups[index];

          this.list.push(listObj);
        }

        this.nombre=this.groups[0].nombre;
      },
      err => console.error(err)
    );

  }

  Logocetys = "./../../assets/img/logocetys.png";

  public group() {

    let id = (<HTMLInputElement>document.getElementById('id_group')).value;

    for (let index = 0; index < this.list.length; index++) {

      if(id == this.list[index].desc_materia+' # '+this.list[index].tipo){
        id =''+this.list[index].grupo;

        this.router.navigate(['/group/', id  ]).then((e) => {
          if (e) {
            console.log("Navigation to groups list is successful!");
          } else {
            console.log("Navigation to groups list has failed!");
          }
        });
      }

    }

    

  }


}
