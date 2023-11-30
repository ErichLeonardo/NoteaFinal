import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkMode: boolean = false;

  constructor(public loginS: LoginService) { }
  ngOnInit(): void {
  }
  public logout() {
    this.loginS.signOut();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    // Puedes cambiar la lógica según tus necesidades
    if (this.darkMode) {
      // Aplicar estilos o clases para el modo oscuro
      document.body.classList.add('dark-mode');
    } else {
      // Eliminar estilos o clases para volver al modo claro
      document.body.classList.remove('dark-mode');
    }
  }
}