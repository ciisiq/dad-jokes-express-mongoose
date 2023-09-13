import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  joke?: Joke;

  constructor(private apiService: ApiService) {}

  getJoke(): void {
    this.apiService.getRandomJokes().subscribe((joke) => (this.joke = joke));
  }

  handleSave() {
    if (this.joke) {
      this.apiService.addJoke({ joke: this.joke.joke }).subscribe((res) => {
        console.log('Saved this joje:', res);
      });
    }
  }

  handleNew() {
    this.getJoke();
  }

  ngOnInit(): void {
    this.getJoke();
  }
}
