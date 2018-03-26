import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../models/app-state';
import * as companyActions from './../actions/company.actions';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {

  companies: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.companies = this.store.select(state => state.companies);
  }

  ngOnInit() {
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompaniesAction(companyId));
  }

}
