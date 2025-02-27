import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent {
  nombre: string = '';
  parentesco: string = '';

  constructor(private router: Router) {}

  continuar() {
    const nombreValido = this.nombre.trim();
    const parentescoValido = this.parentesco.trim();

    if (nombreValido && parentescoValido) {
      this.router.navigate(['/votacion'], { queryParams: { nombre: nombreValido, parentesco: parentescoValido } });
    }
  }
}
