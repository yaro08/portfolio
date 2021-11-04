/* tslint:disable */
import { Currency } from './currency';
import { Link } from './link';
import {Page} from './resources-portfolio';
export interface ResourcesCurrency {
  _embedded?: {
    currencies: Currency[]
  };
  _links?: Link;
  page?: Page;
  content?: Array<Currency>;
  links?: Array<Link>;
}
