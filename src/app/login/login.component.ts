import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatCardModule,BrowserModule,MatFormFieldModule,MatInputModule,MatButtonModule,FormsModule,RouterLink,BrowserAnimationsModule],
  standalone: true,


})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'Isais' && this.password === '12345') {
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['menu']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
