/* tslint:disable */
import { Currency } from './currency';
import { Portfolio } from './portfolio';
export interface PortfolioLine {
  price?:  {
    EUR?: number;
  };
  amount?: number;
  currency?: Currency;
  id?: number;
  _links?: any;
  portfolio?: Portfolio | string;
}
