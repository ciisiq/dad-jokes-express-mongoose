import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {
  data: any = [];

  constructor(private apiService: ApiService) {}

  getJokeList(): void {
    this.apiService.getAllJokesDB().subscribe((res) => {
      this.data = res;
    });
  }

  ngOnInit(): void {
    this.getJokeList();
  }
}
