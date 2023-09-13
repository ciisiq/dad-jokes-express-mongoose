import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {
  savedJokes: Joke[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getSavedJokes().subscribe((jokes: Joke[]) => {
      this.savedJokes = jokes;
    });
  }

  deleteJoke(index: number) {
    if (index >= 0 && index < this.savedJokes.length) {
      const jokeToDelete = this.savedJokes[index];
      console.log(jokeToDelete._id);
      this.apiService.deleteJoke(jokeToDelete._id).subscribe((res) => {
        console.log(res);
        this.savedJokes.splice(index, 1);
      }),
        (error: any) => {
          console.error(error);
        };
    }
  }
}
