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
  // addJoke(joke: Joke): Observable<Joke> {
  //   return this.http.post<Joke>(this.urlback, joke, this.httpOptions);
  // }

  // addJoke(newJoke: string) {
  //   return this.http.post('/api/jokes', { joke: newJoke });
  // }

  addJoke(jokeData: { joke: string }) {
    return this.http.post(this.urlback, jokeData);
  }

  //Get all data from our DB
  getAllJokesDB() {
    return this.http.get(this.urlback);
  }

  //Get a data from our DB
  // deleteJoke(id: string) {
  //   return this.http
  //     .delete(`$this.http_product_url/${id}`)
  //     .map((response: Response) => response.json());
  // }
}
