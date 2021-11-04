/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Portfolio services
 */
@Injectable({
  providedIn: 'root',
})
export class PortfolioConfiguration {
  rootUrl: string = '//sheltered-cliffs-34052.herokuapp.com';
}

export interface PortfolioConfigurationInterface {
  rootUrl?: string;
}
