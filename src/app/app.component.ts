import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //dataBinding
  title = 'holaMundo'
  nombre = 'Juan David Sánchez'

  //PropertyBinding
  textoPlaceHolder = 'Escribe algo porfi'
  rutaImagen = "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
  texto = 'Aprendiendo angular, eventBinding'

  //eventBinding
  cambiarTexto(): void {
    this.texto = 'Aprendiendo Angular, eventBinding, texto que cambia con botón'
  }

  //Two way binding
  input = ""

  //Directivas
  listaEstudiantes: any[] = [
    {nombre: 'Juan David', estado: 'Graduado'},
    {nombre: 'Estebanano', estado: 'Graduado'},
    {nombre: 'Gemelo', estado: 'Pailas'},
    {nombre: 'Punko', estado: 'Pailas'},
    {nombre: 'Loco', estado: 'Pailas'},
    {nombre: 'otro', estado: 'Pailas'},
    {nombre: 'Nicolás Gómez', estado: 'Libre'}
  ]

  mostrar = true

  toggle():void {
    this.mostrar = !this.mostrar
  }
}
