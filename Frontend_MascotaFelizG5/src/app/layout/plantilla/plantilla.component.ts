import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css','../../../shared/css/bootstrap.min.css',
  '../../../shared/css/font-awesome.min.css','../../../shared/css/nivo-lightbox.css',
  '../../../shared/css/nivo_themes/default/default.css','../../../shared/css/templatemo-style.css']
})

export class PlantillaComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  ingresar = () => {
    this.router.navigateByUrl('/usuarios/login');
  };

}
