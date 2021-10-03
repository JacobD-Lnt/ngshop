import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Dog } from "../DogModel/dog";
import DOGS from "../dogdata.json";

@Injectable({
  providedIn: "root",
})
export class DogDetailService {
  private dogData: Dog[] = DOGS;

  constructor() {}

  GetAllDogs(): Observable<Dog[]> {
    return of(this.dogData);
  }

  GetDog(id: string): Observable<Dog> {
    return of(this.dogData.filter((dog) => dog.id === id)[0]);
  }
}
