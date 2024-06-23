import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-estacionamiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estacionamiento.component.html',
  styleUrl: './estacionamiento.component.css'
})
export class EstacionamientoComponent {
  horas: number = 0;
  minutos: number = 0;
  total: number = 0;

  calcularTotal() {
    const tiempoEnHoras = this.horas + (this.minutos / 60);
    this.total = Math.ceil(tiempoEnHoras) * 1.5;
  }
}
