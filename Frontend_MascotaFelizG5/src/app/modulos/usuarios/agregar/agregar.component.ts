import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css','../../../../assets/bootstrap-5.2.2/css/bootstrap.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Regresar() {
    this.router.navigate(["usuarios/consultar"]);
  }
}
