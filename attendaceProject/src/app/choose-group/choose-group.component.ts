import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataServiceService } from '../services/data-service.service';




@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css']
})
export class ChooseGroupComponent implements OnInit {

  groups: any = [];
  user: string;

  constructor(private router: Router, private service: DataServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // Se obtiene el id del maestro de la ruta
    const params = this.activateRoute.snapshot.params;

    //Consulta al servicio obteniendo los grupos del asignados al usuario
    this.service.getGroup(params.id).subscribe(
      res => {
        console.log(res)
        this.groups = res;
      },
      err => console.error(err)
    );

  }

  Logocetys = "./../../assets/img/logocetys.png";

  public group() {

    const id = (<HTMLInputElement>document.getElementById('id_group')).value;

    this.router.navigate(['/group/', id  ]).then((e) => {
      if (e) {
        console.log("Navigation to groups list is successful!");
      } else {
        console.log("Navigation to groups list has failed!");
      }
    });

  }


}
