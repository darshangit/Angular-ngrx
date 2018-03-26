import { Injectable } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Effect, Actions } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CompanyEffectsService {
  constructor(
    private companyService: CompanyService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCompanies$ = this.actions$
    .ofType(companyActions.LOAD_COMPANIES)
    .switchMap(() =>
      this.companyService
        .loadCompanies()
        .map(
          companies => new companyActions.LoadCompaniesSuccessAction(companies)
        )
    );

    @Effect()
    deleteCompanies$ = this.actions$
      .ofType(companyActions.DELETE_COMPANIES)
      .switchMap(action =>
        this.companyService
          .deleteCompanies(action.payload)
          .map(
            companies => new companyActions.DeleteCompaniesSuccessAction(companies.id)
          )
      );
}
