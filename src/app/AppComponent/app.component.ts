import { Component } from "@angular/core";
import { Dog } from "../DogModel/dog";
import { DogDescriptionComponent } from "../DogDescriptionComponent/dogdescription.component";
import { DogDetailService } from "../DogDetailService/dogdetail.service";
import { FavoritesService } from "../FavoritesService/favorites.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  dogs: Dog[] = [];
  favDogs: string[] = [];
  title = "The Bulldog Shop";
  viewFavs = false;

  constructor(
    private dogDetailService: DogDetailService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.dogDetailService.GetAllDogs().subscribe((data) => (this.dogs = data));

    this.favoritesService.GetDogs().subscribe((data) => (this.favDogs = data));
  }

  showFavs() {
    this.viewFavs = true;
  }

  showAll() {
    this.viewFavs = false;
  }

  clearFavs() {
    this.favoritesService.ClearFavorites();
  }
}
