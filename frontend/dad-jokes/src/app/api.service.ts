import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://icanhazdadjoke.com/';
  urlback = 'http://127.0.0.1:3000/jokes';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //Get data from online API
  getRandomJokes(): Observable<Joke> {
    return this.http.get<Joke>(this.url, {
      headers: {
        accept: 'application/json',
      },
    });
  }

  // Save a joke into our DB
  addJoke(jokeData: { joke: string }) {
    return this.http.post(this.urlback, jokeData);
  }

  //Get all data from our DB
  getSavedJokes() {
    return this.http.get<Joke[]>(this.urlback);
  }

  deleteJoke(jokeId: string): Observable<any> {
    const url = `http://127.0.0.1:3000/jokes/${jokeId}`;
    return this.http.delete(url);
  }
}
