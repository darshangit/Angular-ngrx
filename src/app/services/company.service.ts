import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from '../modals/company';

@Injectable()
export class CompanyService {

  constructor() { }

  loadCompanies(): Observable<Company[]> {
    return null;
  }

  deleteCompanies(id: number): Observable<Company[]> {
    return null;
  }

}
