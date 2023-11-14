import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My Angular App'; // Agregar la propiedad 'title' con un valor predeterminado

  constructor() { }

  onSubmit() {
    console.log('El formulario fue enviado');
  }
}
