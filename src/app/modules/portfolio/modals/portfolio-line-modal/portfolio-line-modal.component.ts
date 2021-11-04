import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CurrencyEntityService} from '../../../../core/services/api/portfolio/services/currency-entity.service';
import {ResourcesCurrency} from '../../../../core/services/api/portfolio/models/resources-currency';
import {ModalDto} from '../portfolio-modal/portfolio-modal.component';
import {CoinInfo} from './coin-search/coin-search.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-line-modal',
  templateUrl: './portfolio-line-modal.component.html',
  styleUrls: ['./portfolio-line-modal.component.scss']
})
export class PortfolioLineModalComponent implements OnInit {

  @Output() closed: EventEmitter<ModalDto> = new EventEmitter<ModalDto>();

  lineFG: FormGroup;
  listCurrencies: ResourcesCurrency | undefined;
  isVisibleNewCoinForm: boolean | undefined;

  constructor(private fb: FormBuilder,
              private currencyService: CurrencyEntityService) {
    this.lineFG = this.fb.group({
      currency: [null, Validators.required],
      amount: [{
        value: 0,
        disabled: true
      }, Validators.required]
    });
  }

  ngOnInit(): void {
    this.lineFG.controls.currency.valueChanges.subscribe(
      result => result
        ? this.lineFG.get('amount')?.enable()
        : this.lineFG.get('amount')?.disable()
    );
    this.getListCurrencies().then();
  }

  getListCurrencies(){
    return this.currencyService.findAllCurrencyUsingGET1({}).pipe(
      map((result: ResourcesCurrency) => {
          this.listCurrencies = result;
        }
      )
    ).toPromise();
  }

  handleCancel() {
    this.closed.emit({
      cancel: true,
      data: {}
    })
  }

  handleOk() {
    const form = this.submit();

    if (form.valid) {
      this.closed.emit({
        cancel: false,
        data: form.value
      });
    }
  }

  getFormControl(name: string): AbstractControl {
    return <AbstractControl>this.lineFG.get(name);
  }

  getValidateStatus(inputName: string) {
    return this.getFormControl(inputName)
      ?.dirty && this.getFormControl(inputName)
      ?.hasError('required') ? 'error' : 'validating';
  }

  submit() {
    Object.keys(this.lineFG.controls)
      .forEach( clave => this.lineFG.controls[clave].markAsDirty());

    return Object.assign(this.lineFG);
  }

  showNewCoinForm(show: boolean = true) {
    this.isVisibleNewCoinForm = show;
  }

  addNewCoin($event: CoinInfo) {
    this.currencyService.saveCurrencyUsingPOST1({
      body: {
        acronym: $event.symbol,
        name: $event.coinName
      }
    }).subscribe( () => {
      this.showNewCoinForm(false);
      this.getListCurrencies().then(
        () => {
          // Let's select the new coin as selected (when add new coin to the list)
          const newAdded = this.listCurrencies?._embedded?.currencies
            .find(item => item.acronym === $event.symbol);

          this.lineFG.get('currency')?.setValue(newAdded);
        }
      )
    })
  }
}
