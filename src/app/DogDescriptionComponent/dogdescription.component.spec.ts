import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DogDescriptionComponent } from "./dogdescription.component";
import { Dog } from "../DogModel/dog";
import { By } from "@angular/platform-browser";

describe("DogDescriptionComponent", () => {
  let component: DogDescriptionComponent;
  let fixture: ComponentFixture<DogDescriptionComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDescriptionComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    component.dog = new Dog();
    component.dogId = "0";
    component.showButton = true;
    fixture.autoDetectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
