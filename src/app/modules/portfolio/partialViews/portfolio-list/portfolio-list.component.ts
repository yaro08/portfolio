import { Component, OnInit } from '@angular/core';
import {ResourcesPortfolio} from '../../../../core/services/api/portfolio/models/resources-portfolio';
import {PortfolioEntityService} from '../../../../core/services/api/portfolio/services/portfolio-entity.service';
import {Portfolio} from '../../../../core/services/api/portfolio/models/portfolio';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ModalDto} from '../../modals/portfolio-modal/portfolio-modal.component';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../../core/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolioList: ResourcesPortfolio | undefined;
  currentPortfolio: Portfolio | undefined;
  isVisiblePortfolioModal: boolean | undefined;
  selectedMenu: any;

  constructor(private portfolioApiService: PortfolioEntityService,
              private portfolioService: PortfolioService,
              public modalService: NzModalService,
              private router: Router) {
    this.selectedMenu = this.router.url.split('=').pop();
    if (this.router.url.indexOf('=') === -1) {
      this.selectedMenu = null;
    }
  }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  updateCurrentPortfolio() {
    if (this.selectedMenu) {
      const currentPortfolio = this.portfolioList?._embedded.portfolios.find(item => item.id == this.selectedMenu);
      this.portfolioService.setCurrentPortfolio(currentPortfolio as Portfolio);
    } else {
      const portfolioLength = this.portfolioList?._embedded?.portfolios?.length;

      if (portfolioLength && portfolioLength > 0) {
        this.selectedPortfolio(this.portfolioList?._embedded.portfolios[0] as Portfolio);
      }
    }
  }

  getPortfolioList(){
    this.portfolioApiService.findAllPortfolioUsingGET1({}).subscribe(
      (result: ResourcesPortfolio) => {
        this.portfolioList = result;
        this.updateCurrentPortfolio();
      }
    )
  }

  editPortfolio(item: Portfolio) {
    this.portfolioApiService.savePortfolioUsingPUT1({
      id: item.id as number,
      body: {
        name: 'Edited'
      }
    }).subscribe(() => this.getPortfolioList(),
      error => this.catchErrorModal(JSON.stringify(error))
    );
  }

  selectedPortfolio(item: Portfolio) {
    this.currentPortfolio = item;

    this.router.navigate([], {
      queryParams: {
        'selected': item.id
      },
      queryParamsHandling: 'merge',
    });
    // TODO: GET PORTFOLIO LINES FROM API
  }

  /**
   * Method for delete an portfolio
   * {item} reference to the portfolio
   * **/
  deletePortfolio(item: Portfolio) {
    this.portfolioApiService.deletePortfolioUsingDELETE1(item.id as number).subscribe(
      () => {
        this.getPortfolioList();
      }, error => {
        //TODO: should put a little bit more friendly message :)
        this.catchErrorModal(JSON.stringify(error));
      }
    );
  }

  showPortfolioModal(){
    if (!this.isVisiblePortfolioModal) {
      this.isVisiblePortfolioModal = true;
    }
  }

  addPortfolio(name: string) {
    return this.portfolioApiService.savePortfolioUsingPOST1({
      body: {name: name}
    });
  }

  closedPortfolioModal($event: ModalDto) {
    this.isVisiblePortfolioModal = false;
    if (!$event.cancel) {
      // @ts-ignore
      this.addPortfolio($event.data.name).subscribe(
          (result: any) => {
          this.getPortfolioList();
        }
      )
    }
  }

  catchErrorModal(error: any) {
    this.modalService.error({
      nzTitle: 'An error has occurred',
      nzContent: error
    });
  }

}
