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

import { PortfolioLine } from '../models/portfolio-line';


/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
export class PortfolioLineEntityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllPortfolioLineUsingGet1
   */
  static readonly FindAllPortfolioLineUsingGet1Path = '/api/portfolioline';

  /**
   * findAllPortfolioLine.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPortfolioLineUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPortfolioLineUsingGet1$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.FindAllPortfolioLineUsingGet1Path, 'get');
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
   * findAllPortfolioLine.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAllPortfolioLineUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPortfolioLineUsingGet1(params?: {

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

    return this.findAllPortfolioLineUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation savePortfolioLineUsingPost1
   */
  static readonly SavePortfolioLineUsingPost1Path = '/api/portfolioline';

  /**
   * savePortfolioLine.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePortfolioLineUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioLineUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: PortfolioLine;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.SavePortfolioLineUsingPost1Path, 'post');
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
   * savePortfolioLine.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePortfolioLineUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioLineUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: PortfolioLine;
  }): Observable<void> {

    return this.savePortfolioLineUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findOnePortfolioLineUsingGet1
   */
  static readonly FindOnePortfolioLineUsingGet1Path = '/api/portfolioline/{id}';

  /**
   * findOnePortfolioLine.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOnePortfolioLineUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOnePortfolioLineUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.FindOnePortfolioLineUsingGet1Path, 'get');
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
   * findOnePortfolioLine.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findOnePortfolioLineUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOnePortfolioLineUsingGet1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.findOnePortfolioLineUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation savePortfolioLineUsingPut1
   */
  static readonly SavePortfolioLineUsingPut1Path = '/api/portfolioline/{id}';

  /**
   * savePortfolioLine.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePortfolioLineUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioLineUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: PortfolioLine;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.SavePortfolioLineUsingPut1Path, 'put');
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
   * savePortfolioLine.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePortfolioLineUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioLineUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: PortfolioLine;
  }): Observable<void> {

    return this.savePortfolioLineUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePortfolioLineUsingDelete1
   */
  static readonly DeletePortfolioLineUsingDelete1Path = '/api/portfolioline/{id}';

  /**
   * deletePortfolioLine.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePortfolioLineUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePortfolioLineUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.DeletePortfolioLineUsingDelete1Path, 'delete');
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
   * deletePortfolioLine.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePortfolioLineUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePortfolioLineUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.deletePortfolioLineUsingDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLinecurrencyUsingGet1
   */
  static readonly PortfolioLinecurrencyUsingGet1Path = '/api/portfolioline/{id}/currency';

  /**
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLinecurrencyUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLinecurrencyUsingGet1Path, 'get');
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
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLinecurrencyUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingGet1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfolioLinecurrencyUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLinecurrencyUsingPut1
   */
  static readonly PortfolioLinecurrencyUsingPut1Path = '/api/portfolioline/{id}/currency';

  /**
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLinecurrencyUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLinecurrencyUsingPut1Path, 'put');
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
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLinecurrencyUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLinecurrencyUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLinecurrencyUsingPost1
   */
  static readonly PortfolioLinecurrencyUsingPost1Path = '/api/portfolioline/{id}/currency';

  /**
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLinecurrencyUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLinecurrencyUsingPost1Path, 'post');
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
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLinecurrencyUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLinecurrencyUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLinecurrencyUsingDelete1
   */
  static readonly PortfolioLinecurrencyUsingDelete1Path = '/api/portfolioline/{id}/currency';

  /**
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLinecurrencyUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLinecurrencyUsingDelete1Path, 'delete');
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
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLinecurrencyUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfolioLinecurrencyUsingDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLinecurrencyUsingPatch1
   */
  static readonly PortfolioLinecurrencyUsingPatch1Path = '/api/portfolioline/{id}/currency';

  /**
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLinecurrencyUsingPatch1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPatch1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLinecurrencyUsingPatch1Path, 'patch');
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
   * portfolioLinecurrency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLinecurrencyUsingPatch1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLinecurrencyUsingPatch1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLinecurrencyUsingPatch1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLineportfolioUsingGet1
   */
  static readonly PortfolioLineportfolioUsingGet1Path = '/api/portfolioline/{id}/portfolio';

  /**
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLineportfolioUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLineportfolioUsingGet1Path, 'get');
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
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLineportfolioUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingGet1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfolioLineportfolioUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLineportfolioUsingPut1
   */
  static readonly PortfolioLineportfolioUsingPut1Path = '/api/portfolioline/{id}/portfolio';

  /**
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLineportfolioUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLineportfolioUsingPut1Path, 'put');
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
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLineportfolioUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLineportfolioUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLineportfolioUsingPost1
   */
  static readonly PortfolioLineportfolioUsingPost1Path = '/api/portfolioline/{id}/portfolio';

  /**
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLineportfolioUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLineportfolioUsingPost1Path, 'post');
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
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLineportfolioUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLineportfolioUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLineportfolioUsingDelete1
   */
  static readonly PortfolioLineportfolioUsingDelete1Path = '/api/portfolioline/{id}/portfolio';

  /**
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLineportfolioUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLineportfolioUsingDelete1Path, 'delete');
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
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLineportfolioUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfolioLineportfolioUsingDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfolioLineportfolioUsingPatch1
   */
  static readonly PortfolioLineportfolioUsingPatch1Path = '/api/portfolioline/{id}/portfolio';

  /**
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfolioLineportfolioUsingPatch1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPatch1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioLineEntityService.PortfolioLineportfolioUsingPatch1Path, 'patch');
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
   * portfolioLineportfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfolioLineportfolioUsingPatch1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfolioLineportfolioUsingPatch1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: string;
  }): Observable<void> {

    return this.portfolioLineportfolioUsingPatch1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
