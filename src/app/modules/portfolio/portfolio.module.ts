import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import { PortfolioComponent } from './portfolio.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule} from 'ng-zorro-antd/card';
import { PortfolioModalComponent } from './modals/portfolio-modal/portfolio-modal.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzListModule} from 'ng-zorro-antd/list';
import { PortfolioLinesComponent } from './partialViews/portfolio-lines/portfolio-lines.component';
import { PortfolioLineModalComponent } from './modals/portfolio-line-modal/portfolio-line-modal.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {CoreModule} from '../../core/core.module';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import { CoinSearchComponent } from './modals/portfolio-line-modal/coin-search/coin-search.component';
import { PortfolioListComponent } from './partialViews/portfolio-list/portfolio-list.component';
import {FetchPipe} from '../../core/pipes/fetch.pipe';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzEmptyModule} from 'ng-zorro-antd/empty';


@NgModule({
  providers: [FetchPipe],
  declarations: [
    PortfolioComponent,
    PortfolioModalComponent,
    PortfolioLinesComponent,
    PortfolioLineModalComponent,
    CoinSearchComponent,
    PortfolioListComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzWaveModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzCardModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzListModule,
    NzSelectModule,
    NzInputNumberModule,
    CoreModule,
    NzDividerModule,
    NzStatisticModule,
    NzEmptyModule
  ]
})
export class PortfolioModule { }
