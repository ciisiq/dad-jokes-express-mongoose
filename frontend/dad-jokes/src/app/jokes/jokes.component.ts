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
    console.log('SAVED');
  }

  handleNew() {
    console.log('New Joke comming..');
    this.getJoke();
  }

  ngOnInit(): void {
    this.getJoke();
  }
}
