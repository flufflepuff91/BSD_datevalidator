import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { routes } from './app.routes';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetSittingScheduleComponent} from './pet-sitting-schedule/pet-sitting-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    PetSittingScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
