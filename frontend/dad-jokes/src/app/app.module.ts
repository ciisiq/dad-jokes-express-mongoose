import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    NavbarComponent,
    JokeListComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
