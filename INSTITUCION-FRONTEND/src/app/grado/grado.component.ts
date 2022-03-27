import { Component, OnInit } from '@angular/core';
import { Grado } from '../grado';
import { GradoService } from './../grado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {
  grados: Grado[] | undefined;

  constructor(private gradoServicio: GradoService, private router:Router) { }

  ngOnInit(): void{
    this.obtenerListaGrados();
  }

  actualizarGrado(id:number | undefined){
    this.router.navigate(['actualizar-grado', id]);
  }

  eliminarGrado(id: number | undefined){
    this.gradoServicio.eliminarGrado(id).subscribe(dato =>{
      this.obtenerListaGrados();
    });
  }

  private obtenerListaGrados(){
    this.gradoServicio.obtenerListaDeGrados().subscribe(dato =>{
      this.grados = dato;
    });
  }
}
