import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoinInfo} from '../../../modules/portfolio/modals/portfolio-line-modal/coin-search/coin-search.component';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private readonly URL_CHECK_API = 'https://min-api.cryptocompare.com/data/all/coinlist';
  private cachedData: any = null;

  constructor(private http: HttpClient) { }

  checkIfExistCoin(coinName: string): Promise<any> {
    return new Promise(resolve => {
      if (this.cachedData) {
        resolve(this.findCoinInfo(coinName));
      } else {
        this.http.get(this.URL_CHECK_API).subscribe(
          result => {
            this.cachedData = result;
            resolve(this.findCoinInfo(coinName));
          }
        )
      }
    });
  }

  private findCoinInfo(coinName: string): CoinInfo | undefined {
    const found = this.cachedData.Data[coinName.toUpperCase()];
    if (found) {
      return {
        symbol: found.Symbol,
        coinName: found.CoinName,
      }
    } else return;
  }
}
