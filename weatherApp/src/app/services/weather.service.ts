import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environments';
import { WeatherData } from '../models/weather.model';
import { AstroData } from '../models/astro.model';
import { ForecastData } from '../models/forecast.model'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  //realtime data
  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params : new HttpParams()
      .set('q', cityName)
    })
  }

  //astrodata
  getAstroData(cityName:string):Observable<AstroData>{
    return this.http.get<AstroData>(environment.weatherApiAstroUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params : new HttpParams()
      .set('q', cityName)
    })
  }

  //data forcast
  getDataForecast(cityName:string):Observable<ForecastData>{
    return this.http.get<ForecastData>(environment.weatherApiForecastUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params : new HttpParams()
      .set('q', cityName)
    })
  }
}
