import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grado } from './../grado';
import { GradoService } from './../grado.service';

@Component({
  selector: 'app-registrar-grado',
  templateUrl: './registrar-grado.component.html',
  styleUrls: ['./registrar-grado.component.css']
})
export class RegistrarGradoComponent implements OnInit {

  grado: Grado = new Grado;

  constructor(private gradoServicio:GradoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarGrado(){
    this.gradoServicio.registrarGrado(this.grado).subscribe(dato =>{
      this.redirectListaGrados();
    }, error => console.log(error));
  }

  redirectListaGrados(){
    this.router.navigate(['/grados']);
  }

  onSubmit(){
    this.guardarGrado();
  }
}
