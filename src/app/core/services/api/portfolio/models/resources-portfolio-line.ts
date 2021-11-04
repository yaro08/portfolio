/* tslint:disable */
import { PortfolioLine } from './portfolio-line';
import { Link } from './link';
export interface ResourcesPortfolioLine {
  _embedded?: {
    portfolioLines: PortfolioLine[]
  };
  _links?:  {
    self: {href: string}
  }
  content?: Array<PortfolioLine>;
  links?: Array<Link>;
}
