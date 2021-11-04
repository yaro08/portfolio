/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioConfiguration, PortfolioConfigurationInterface } from './portfolio-configuration';

import { CurrencyEntityService } from './services/currency-entity.service';
import { PortfolioEntityService } from './services/portfolio-entity.service';
import { PortfolioLineEntityService } from './services/portfolio-line-entity.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';

/**
 * Provider for all Portfolio services, plus PortfolioConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    PortfolioConfiguration,
    CurrencyEntityService,
    PortfolioEntityService,
    PortfolioLineEntityService,
    ProfileControllerService,
    BasicErrorControllerService
  ],
})
export class PortfolioModule {
  static forRoot(customParams: PortfolioConfigurationInterface): ModuleWithProviders<PortfolioModule> {
    return {
      ngModule: PortfolioModule,
      providers: [
        {
          provide: PortfolioConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
