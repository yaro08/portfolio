import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoinService} from '../../../../../core/services/coin/coin.service';
import {Debounce} from '../../../../../shared/decorators/debounce.decorator';

@Component({
  selector: 'app-coin-search',
  templateUrl: './coin-search.component.html',
  styleUrls: ['./coin-search.component.scss']
})
export class CoinSearchComponent implements OnInit {

  @Output() newCoin: EventEmitter<CoinInfo> = new EventEmitter<CoinInfo>();

  set coinInfo(value: CoinInfo) {
    this._coinInfo = value;
  }
  get coinInfo(): CoinInfo {
    return this._coinInfo;
  }

  newCoinFG: FormGroup;

  private _coinInfo: any;

  constructor(private fb: FormBuilder,
              private coinService: CoinService) {
    this.newCoinFG = this.fb.group({
      name: ['', [Validators.required]]
      //[required, maxLength(12), minLength(6)], [this.userNameAsyncValidator]]
    });
    this.coinInfo = {
      loading: false,
      symbol: undefined,
      coinName: undefined
    };
  }

  ngOnInit(): void {

  }

  getFormControl(name: string): AbstractControl {
    return <AbstractControl>this.newCoinFG.get(name);
  }

  getValidateStatus(inputName: string) {
    return this.getFormControl(inputName)
      ?.dirty && this.getFormControl(inputName)
      ?.hasError('required') ? 'error' : 'validating';
  }

  @Debounce(500)
  async nameChanged($event: any) {
    if (!$event) {return;}
    this.coinInfo.loading = true;
    this.coinInfo = Object.assign( await this.coinService.checkIfExistCoin($event) || {});
    this.coinInfo.loading = false;
  }

  addToList(coinInfo: CoinInfo) {
    this.newCoinFG.reset();
    this.newCoinFG.controls.name.setValidators(Validators.required);
    this.newCoin.emit(coinInfo);
  }
}

export interface CoinInfo {
  coinName: string | undefined;
  symbol: string | undefined;
  imgUrl?: string;
  loading?: boolean;
}
