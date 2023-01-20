import { Component } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  faTemperatureLow = faTemperatureLow;
}
