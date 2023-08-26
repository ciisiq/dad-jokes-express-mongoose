import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  joke?: Joke;

  constructor(private apiService: ApiService) {}

  getJoke(): void {
    this.apiService.getRandomJokes().subscribe((joke) => (this.joke = joke));
  }

  ngOnInit(): void {
    this.getJoke();
  }
}
