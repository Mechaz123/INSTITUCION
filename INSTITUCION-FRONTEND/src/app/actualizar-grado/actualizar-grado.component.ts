import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradoService } from './../grado.service';

@Component({
  selector: 'app-actualizar-grado',
  templateUrl: './actualizar-grado.component.html',
  styleUrls: ['./actualizar-grado.component.css']
})
export class ActualizarGradoComponent implements OnInit {
  grado: any;
  @Input() id: number | undefined;
  constructor(private gradoServicio: GradoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.obtenerGradoPorId();
  }

  actualizarGrado(){
    this.gradoServicio.actualizarGrado(this.id, this.grado).subscribe(dato =>{
      this.redirectListaGrado();
    });
  }

  redirectListaGrado(){
    this.router.navigate(['/grados']);
  }

  private obtenerGradoPorId() {
    this.gradoServicio.obtenerGradoPorId(this.id).subscribe(dato => {
      this.grado = dato;
    });
  }
}
