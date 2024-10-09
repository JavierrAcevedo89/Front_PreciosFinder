import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'src\app\app.component.html',
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'precioFinder';
}
