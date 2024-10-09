import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from "./screen/buscador/buscador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'precioFinder';
}
