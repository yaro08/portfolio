/* tslint:disable */
import { Currency } from './currency';
import { Link } from './link';
import { Portfolio } from './portfolio';
export interface ResourcePortfolioLine {
  amount?: number;
  currency?: Currency;
  id?: number;
  links?: Array<Link>;
  portfolio?: Portfolio;
}
