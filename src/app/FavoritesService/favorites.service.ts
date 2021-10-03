import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  favDogs: string[];

  constructor() {
    const favDogs = localStorage.getItem("favoriteDogs");
    if (!favDogs) {
      localStorage.setItem("favoriteDogs", JSON.stringify([]));
    }
    this.favDogs = JSON.parse(localStorage.getItem("favoriteDogs")) || {};
  }

  GetDogs(): Observable<string[]> {
    return of(this.favDogs);
  }

  UpdateDog(id: string) {
    const favs = this.favDogs;
    if (!favs.includes(id)) {
      favs.push(id);
      localStorage.setItem("favoriteDogs", JSON.stringify(favs));
    }
  }

  ClearFavorites() {
    localStorage.removeItem("favoriteDogs");
    while (this.favDogs.length > 0) {
      this.favDogs.pop();
    }
    localStorage.setItem("favoriteDogs", JSON.stringify([]));
  }
}
