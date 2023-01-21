import { Component, OnInit } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { tap, forkJoin } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { WeatherData} from './models/weather.model'
import { AstroData } from './models/astro.model';
import { ForecastData } from './models/forecast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cityName:string = 'Tampere';
  weatherData?: WeatherData;
  astroData?: AstroData;
  forecast?: ForecastData;
  title = 'weatherApp';
  faTemperatureLow = faTemperatureLow;

  constructor(
    private weatherService: WeatherService
  ){}
  
  ngOnInit(): void {
    this.getWeatherDate(this.cityName)
    this.cityName =''
  }

  private getWeatherDate(cityName:string){
    const realtime = this.weatherService.getWeatherData(cityName)
    const astro = this.weatherService.getAstroData(cityName)
    const forecast = this.weatherService.getDataForecast(cityName)
    forkJoin([realtime,astro,forecast]).subscribe(result =>{
      this.weatherData = result[0];
      this.astroData = result[1];
      this.forecast = result[2];
    })
    // console.log('jgjgjgj',  this.forecast)
  }
  
  onSubmit(){
    this.getWeatherDate(this.cityName)
    this.cityName =''
  }
}
