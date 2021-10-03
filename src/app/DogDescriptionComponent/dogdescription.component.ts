import { Component, OnInit, Input } from "@angular/core";
import { Dog } from "../DogModel/dog";
import { DogDetailService } from "../DogDetailService/dogdetail.service";
import { FavoritesService } from "../FavoritesService/favorites.service";

@Component({
  selector: "app-dogdescription",
  templateUrl: "./dogdescription.component.html",
  styleUrls: ["./dogdescription.component.css"],
})
export class DogDescriptionComponent implements OnInit {
  @Input() dogId: string;
  @Input() showButton: boolean;
  dog: Dog = new Dog();

  constructor(
    private dogDetailService: DogDetailService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.dogDetailService
      .GetDog(this.dogId)
      .subscribe((data) => (this.dog = data));
  }

  addFav() {
    this.favoritesService.UpdateDog(this.dogId);
  }
}
