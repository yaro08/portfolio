/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { PortfolioConfiguration as __Configuration } from '../portfolio-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcesCurrency } from '../models/resources-currency';
import { ResourceCurrency } from '../models/resource-currency';
import { Currency } from '../models/currency';

/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
class CurrencyEntityService extends __BaseService {
  static readonly findAllCurrencyUsingGET1Path = '/api/currency';
  static readonly saveCurrencyUsingPOST1Path = '/api/currency';
  static readonly findOneCurrencyUsingGET1Path = '/api/currency/{id}';
  static readonly saveCurrencyUsingPUT1Path = '/api/currency/{id}';
  static readonly deleteCurrencyUsingDELETE1Path = '/api/currency/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAllCurrency
   * @param params The `CurrencyEntityService.FindAllCurrencyUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCurrencyUsingGET1Response(params: CurrencyEntityService.FindAllCurrencyUsingGET1Params): __Observable<__StrictHttpResponse<ResourcesCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/currency`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesCurrency>;
      })
    );
  }
  /**
   * findAllCurrency
   * @param params The `CurrencyEntityService.FindAllCurrencyUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCurrencyUsingGET1(params: CurrencyEntityService.FindAllCurrencyUsingGET1Params): __Observable<ResourcesCurrency> {
    return this.findAllCurrencyUsingGET1Response(params).pipe(
      __map(_r => _r.body as ResourcesCurrency)
    );
  }

  /**
   * saveCurrency
   * @param params The `CurrencyEntityService.SaveCurrencyUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveCurrencyUsingPOST1Response(params: CurrencyEntityService.SaveCurrencyUsingPOST1Params): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/currency`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCurrency>;
      })
    );
  }
  /**
   * saveCurrency
   * @param params The `CurrencyEntityService.SaveCurrencyUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveCurrencyUsingPOST1(params: CurrencyEntityService.SaveCurrencyUsingPOST1Params): __Observable<ResourceCurrency> {
    return this.saveCurrencyUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * findOneCurrency
   * @param id id
   * @return OK
   */
  findOneCurrencyUsingGET1Response(id: number): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/currency/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCurrency>;
      })
    );
  }
  /**
   * findOneCurrency
   * @param id id
   * @return OK
   */
  findOneCurrencyUsingGET1(id: number): __Observable<ResourceCurrency> {
    return this.findOneCurrencyUsingGET1Response(id).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * saveCurrency
   * @param params The `CurrencyEntityService.SaveCurrencyUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveCurrencyUsingPUT1Response(params: CurrencyEntityService.SaveCurrencyUsingPUT1Params): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/currency/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCurrency>;
      })
    );
  }
  /**
   * saveCurrency
   * @param params The `CurrencyEntityService.SaveCurrencyUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveCurrencyUsingPUT1(params: CurrencyEntityService.SaveCurrencyUsingPUT1Params): __Observable<ResourceCurrency> {
    return this.saveCurrencyUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * deleteCurrency
   * @param id id
   */
  deleteCurrencyUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/currency/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * deleteCurrency
   * @param id id
   */
  deleteCurrencyUsingDELETE1(id: number): __Observable<null> {
    return this.deleteCurrencyUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CurrencyEntityService {

  /**
   * Parameters for findAllCurrencyUsingGET1
   */
  export interface FindAllCurrencyUsingGET1Params {

    /**
     * sort
     */
    sort?: string;

    /**
     * size
     */
    size?: string;

    /**
     * page
     */
    page?: string;
  }

  /**
   * Parameters for saveCurrencyUsingPOST1
   */
  export interface SaveCurrencyUsingPOST1Params {
    /**
     * body
     */
    body: Currency;
  }

  /**
   * Parameters for saveCurrencyUsingPUT1
   */
  export interface SaveCurrencyUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Currency;
  }
}

export { CurrencyEntityService }
