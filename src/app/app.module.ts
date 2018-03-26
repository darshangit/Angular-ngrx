import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { companyReducer } from './reducers/company.reducer';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './services/company.service';
import { CompanyEffectsService } from './effects/company.effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, CompanyComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ companies: companyReducer }),
    EffectsModule.forRoot([CompanyEffectsService]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
