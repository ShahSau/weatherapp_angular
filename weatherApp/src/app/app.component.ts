import { Component, OnInit } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private weatherService: WeatherService
  ){}
  ngOnInit(): void {
    // this.weatherService.getWeatherData('Helsinki').subscribe({
    //   next:(response)=>{
    //     console.log(response);
        
    //   }
    // })
    this.weatherService.getWeatherData('helsinki').pipe(
      tap((res: any)=>console.log(res)
      )
    ).subscribe()
  }
  title = 'weatherApp';
  faTemperatureLow = faTemperatureLow;
}
