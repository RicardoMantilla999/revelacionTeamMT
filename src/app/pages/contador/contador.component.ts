import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  contador: number = 5; // Inicia en 10

  constructor() {
    this.iniciarCuentaRegresiva();
  }

  iniciarCuentaRegresiva() {
    const intervalo = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(intervalo); // Detiene el contador
      }
    }, 1000);
  }
}
