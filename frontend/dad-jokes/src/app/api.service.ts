import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) {}

  //from api
  getRandomJokes(): Observable<Joke> {
    return this.http.get<Joke>(this.url, {
      headers: {
        accept: 'application/json',
      },
    });
  }

  //From DB
  getAllJokesDB() {}

  saveJoke() {}

  deleteJoke() {}
}
