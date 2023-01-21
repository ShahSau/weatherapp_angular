import { Component, OnInit } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { WeatherData} from './models/weather.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private weatherService: WeatherService
  ){}
  cityName:string = 'Tampere';
  weatherData?: WeatherData ;
  ngOnInit(): void {
    this.getWeatherDate(this.cityName)
    this.cityName =''
    // this.weatherService.getWeatherData('helsinki').pipe(
    //   tap((res: any)=>console.log(res)
    //   )
    // ).subscribe()
  }
  title = 'weatherApp';
  faTemperatureLow = faTemperatureLow;

  private getWeatherDate(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        console.log("ddgdgh", response)
        this.weatherData = response
        
      }
    })
  }
  
  onSubmit(){
    this.getWeatherDate(this.cityName)
    this.cityName =''
  }
}
