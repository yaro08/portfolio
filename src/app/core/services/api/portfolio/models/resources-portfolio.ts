/* tslint:disable */
import { Portfolio } from './portfolio';
import { Link } from './link';
export interface ResourcesPortfolio {
  page: Page;
  _embedded: {
    portfolios: Portfolio[]
  };
  content?: Array<Portfolio>;
  links?: Array<Link>;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
