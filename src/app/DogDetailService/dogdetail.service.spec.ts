import { TestBed } from "@angular/core/testing";

import { DogDetailService } from "./dogdetail.service";
import { Dog } from "../DogModel/dog";

describe("DogDetailService", () => {
  let service: DogDetailService;
  let dog: Dog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogDetailService);
    dog = new Dog();
    dog.id = "4ziNJuYbfDius";
    dog.name = "relaxed bull dog GIF";
    dog.thumbnail = "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif";
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return dog by id", () => {
    const dogId = "4ziNJuYbfDius";
    service.GetDog(dogId).subscribe((dogData) => {
      expect(dogData.id).toEqual(dog.id);
      expect(dogData.name).toEqual(dog.name);
      expect(dogData.thumbnail).toEqual(dog.thumbnail);
    });
  });

  it("should return all dogs", () => {
    service.GetAllDogs().subscribe((dogs) => {
      expect(dogs.length).toEqual(100);
    });
  });
});
