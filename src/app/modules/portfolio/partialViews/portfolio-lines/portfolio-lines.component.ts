import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {PortfolioLineEntityService} from '../../../../core/services/api/portfolio/services/portfolio-line-entity.service';
import {PortfolioEntityService} from '../../../../core/services/api/portfolio/services/portfolio-entity.service';
import {ResourcesPortfolioLine} from '../../../../core/services/api/portfolio/models/resources-portfolio-line';
import {PortfolioLine} from '../../../../core/services/api/portfolio/models/portfolio-line';
import {ModalDto} from '../../modals/portfolio-modal/portfolio-modal.component';
import {Portfolio} from '../../../../core/services/api/portfolio/models/portfolio';
import {PortfolioService} from '../../../../core/services/portfolio/portfolio.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-portfolio-lines',
  templateUrl: './portfolio-lines.component.html',
  styleUrls: ['./portfolio-lines.component.scss']
})

export class PortfolioLinesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() currentPortfolio: Portfolio | undefined;
  portfolioLinesList: PortfolioLine[] = [];

  plines: ResourcesPortfolioLine | undefined;

  isVisibleLinesModal: boolean | undefined;

  private subsPortfolio: Subscription | undefined;
  totalPortolioValue: number | undefined;
  loadingLines: boolean = false;

  constructor(private portfolioLinesService: PortfolioLineEntityService,
              private portfolioApiService: PortfolioEntityService,
              private portfolioService: PortfolioService) { }

  ngOnDestroy(): void {
        if (this.subsPortfolio) {this.subsPortfolio.unsubscribe();}
  }

  ngOnInit(): void {
    this.subsPortfolio = this.portfolioService.getCurrentPortfolio().subscribe(
      result => {
        this.portfolioLinesList = [];
        this.currentPortfolio = result;
        this.getPorfolioLines(this.currentPortfolio?.id as number);
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentPortfolio?.currentValue) {
      const portfolio = changes.currentPortfolio?.currentValue;
      this.getPorfolioLines(portfolio?.id);
    }
  }

  showLineModal() {
    this.isVisibleLinesModal = true;
  }

  closedLinesModal($event: ModalDto) {
    this.isVisibleLinesModal = false;
    if (!$event.cancel) {

      const params: PortfolioLine = {
        amount: $event.data.amount,
        currency: $event.data.currency._links.currency.href,
        portfolio: this.currentPortfolio?._links?.portfolio?.href
      };

      this.addPortfolioLine(params).subscribe(
        () => {
          this.getPorfolioLines(this.currentPortfolio?.id as number);
        }, error => console.error('error on save', error));
    }
  }

  addPortfolioLine(params: PortfolioLine){
    // @ts-ignore
    return this.portfolioLinesService.savePortfolioLineUsingPOST1({
      id: this.currentPortfolio?.id as number,
      body: {
        amount: params.amount,
        currency: params.currency, //"http://localhost:8080/api/currency/5",
        portfolio: params.portfolio //"http://localhost:8080/api/portfolio/4"}
      }
    });
  }

  getPorfolioLines(portfolioId: number) {
    this.loadingLines = true;
    this.portfolioService.getPorfolioLines(portfolioId).subscribe(
      async result => {
        this.plines =  result;
        this.totalPortolioValue = this.plines._embedded?.portfolioLines
        // @ts-ignore
          .reduce( (sum, x) => sum + ((x?.price?.EUR || 0) * x?.amount), 0 );
        this.portfolioLinesList = this.plines._embedded?.portfolioLines || [];
        this.loadingLines = false;
      }, error => {
        console.error(error);
        this.loadingLines = false;
      }
    )
  }
}
