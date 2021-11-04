/* tslint:disable */
import { PortfolioLine } from './portfolio-line';
export interface Portfolio {
  id?: number;
  lines?: Array<PortfolioLine>;
  name?: string;
  _links?: {
    lines?: {href: string}
    portfolio?: {href: string}
    self?: {href: string}
  };
}
