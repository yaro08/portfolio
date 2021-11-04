/* tslint:disable */
import { PortfolioLine } from './portfolio-line';
import { Link } from './link';
export interface ResourcePortfolio {
  id?: number;
  lines?: Array<PortfolioLine>;
  links?: Array<Link>;
  name?: string;
}
