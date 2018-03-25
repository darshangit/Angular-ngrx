import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { companyReducer } from './reducers/company.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({companies: companyReducer})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
