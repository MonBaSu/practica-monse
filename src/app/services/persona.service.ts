import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'https://superhero-search.p.rapidapi.com/api/villains'

  constructor(private http:HttpClient)
  { 
    console.log('Serrvicio persona')
  }
  getPersonas(){
    let header=new HttpHeaders( {'X-RapidAPI-Key': 'd762993f93msh9cc496ee1c28be5p18562ajsn88dab94f33fb',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'})
    .set ('Type-content','aplication/json')

    return this.http.get(this.url,{
      headers:header
    });
  }
}
