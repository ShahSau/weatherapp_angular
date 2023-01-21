export interface AstroData {
    location: Location
    astronomy: Astronomy
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Astronomy {
    astro: Astro
  }
  
  export interface Astro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
  }
  