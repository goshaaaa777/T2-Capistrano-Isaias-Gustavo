import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  notas: number[] = [0, 0, 0, 0];
  promedio: number = 0;

  calcularPromedio() {
    const notasOrdenadas = [...this.notas].sort((a, b) => a - b).slice(1);
    this.promedio = notasOrdenadas[0] * 0.2 + notasOrdenadas[1] * 0.3 + notasOrdenadas[2] * 0.5;
  }
}
