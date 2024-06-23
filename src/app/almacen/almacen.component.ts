import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number = 0;

  calcularTotal() {
    if (this.cantidad > 20) {
      this.total = this.precioUnitario * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      this.total = this.precioUnitario * this.cantidad * 0.95;
    } else {
      this.total = this.precioUnitario * this.cantidad;
    }
  }
}
