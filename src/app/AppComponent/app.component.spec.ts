import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DogDescriptionComponent } from "../DogDescriptionComponent/dogdescription.component";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let html;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, DogDescriptionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to The Bulldog Shop!"
    );
  });

  it("should render all dogs", () => {
    const allDogs = fixture.debugElement.queryAll(
      By.directive(DogDescriptionComponent)
    );
    expect(allDogs.length).toEqual(100);
  });

  it("favorites button should be clickable", () => {
    spyOn(component, "showFavs");
    const favsButton = html.querySelector("#showFavs");
    favsButton.click();
    expect(component.showFavs).toHaveBeenCalled();
  });
});
