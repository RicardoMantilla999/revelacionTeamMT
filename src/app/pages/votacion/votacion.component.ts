import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VotacionService } from '../../servicios/votacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-votacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './votacion.component.html',
  styleUrl: './votacion.component.scss'
})
export class VotacionComponent {
  nombre: string = '';
  parentesco: string = '';
  cargando: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: VotacionService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.parentesco = params['parentesco'];
    });
  }

  enviarVoto(eleccion: string) {
    this.cargando = true;
    this.api.enviarVoto(this.nombre, this.parentesco, eleccion).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(['/contador']);
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al enviar voto:', err);
      }
    });
  }
}
