import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./AppComponent/app.component";
import { DogDescriptionComponent } from "./DogDescriptionComponent/dogdescription.component";

@NgModule({
  declarations: [AppComponent, DogDescriptionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
