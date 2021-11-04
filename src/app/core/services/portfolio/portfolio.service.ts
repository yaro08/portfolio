import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Portfolio} from '../api/portfolio/models/portfolio';
import {PortfolioEntityService} from '../api/portfolio/services/portfolio-entity.service';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FetchPipe} from '../../pipes/fetch.pipe';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // returns only the last value
  private idPortfolio: ReplaySubject<Portfolio> = new ReplaySubject<Portfolio>(1);

  private readonly PRICE_URL = 'https://min-api.cryptocompare.com/data/price';

  constructor(private portfolioApiService: PortfolioEntityService,
              private http: HttpClient) { }

  setCurrentPortfolio(portfolio: Portfolio): void {
    this.idPortfolio.next(portfolio);
  }

  getCurrentPortfolio() :Observable<Portfolio> {
    return this.idPortfolio;
  }

  getPorfolioLines(portfolioId: number, unitValuta: string = 'EUR') {
    const promisesArr: any[] = [];
    return this.portfolioApiService.portfoliolinesUsingGET3(portfolioId).pipe(
      switchMap(async result => {
        // @ts-ignore
        for (let item of result?._embedded?.portfolioLines) {
          const request = await this.http.get(this.PRICE_URL, {
            params: {
              // @ts-ignore
              fsym: (await this.http.get(item?._links?.currency?.href as string).toPromise())?.acronym,
              tsyms: unitValuta
            }
          }).toPromise();
          promisesArr.push(request);
        }

        return Promise.all(promisesArr).then((res) => {
          result?._embedded?.portfolioLines.map((item, k) => item.price = res[k]);
          return result;
        });
      }))
  }
}
