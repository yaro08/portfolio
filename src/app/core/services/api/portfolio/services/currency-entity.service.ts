/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Currency } from '../models/currency';


/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
export class CurrencyEntityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllCurrencyUsingGet1
   */
  static readonly FindAllCurrencyUsingGet1Path = '/api/currency';

  /**
   * findAllCurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCurrencyUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCurrencyUsingGet1$Response(params?: {

    /**
     * page
     */
    page?: any;

    /**
     * size
     */
    size?: any;

    /**
     * sort
     */
    sort?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CurrencyEntityService.FindAllCurrencyUsingGet1Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * findAllCurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAllCurrencyUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCurrencyUsingGet1(params?: {

    /**
     * page
     */
    page?: any;

    /**
     * size
     */
    size?: any;

    /**
     * sort
     */
    sort?: any;
  }): Observable<void> {

    return this.findAllCurrencyUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation saveCurrencyUsingPost1
   */
  static readonly SaveCurrencyUsingPost1Path = '/api/currency';

  /**
   * saveCurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCurrencyUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveCurrencyUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Currency;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CurrencyEntityService.SaveCurrencyUsingPost1Path, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body('body', params.body, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * saveCurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveCurrencyUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveCurrencyUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Currency;
  }): Observable<void> {

    return this.saveCurrencyUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findOneCurrencyUsingGet1
   */
  static readonly FindOneCurrencyUsingGet1Path = '/api/currency/{id}';

  /**
   * findOneCurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOneCurrencyUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOneCurrencyUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CurrencyEntityService.FindOneCurrencyUsingGet1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * findOneCurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findOneCurrencyUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOneCurrencyUsingGet1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.findOneCurrencyUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation saveCurrencyUsingPut1
   */
  static readonly SaveCurrencyUsingPut1Path = '/api/currency/{id}';

  /**
   * saveCurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCurrencyUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveCurrencyUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Currency;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CurrencyEntityService.SaveCurrencyUsingPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body('body', params.body, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * saveCurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveCurrencyUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveCurrencyUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Currency;
  }): Observable<void> {

    return this.saveCurrencyUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteCurrencyUsingDelete1
   */
  static readonly DeleteCurrencyUsingDelete1Path = '/api/currency/{id}';

  /**
   * deleteCurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCurrencyUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CurrencyEntityService.DeleteCurrencyUsingDelete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * deleteCurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCurrencyUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.deleteCurrencyUsingDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
