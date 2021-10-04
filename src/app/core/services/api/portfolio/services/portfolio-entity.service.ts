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

import { Portfolio } from '../models/portfolio';


/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
export class PortfolioEntityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllPortfolioUsingGet1
   */
  static readonly FindAllPortfolioUsingGet1Path = '/api/portfolio';

  /**
   * findAllPortfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPortfolioUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPortfolioUsingGet1$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.FindAllPortfolioUsingGet1Path, 'get');
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
   * findAllPortfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAllPortfolioUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPortfolioUsingGet1(params?: {

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

    return this.findAllPortfolioUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation savePortfolioUsingPost1
   */
  static readonly SavePortfolioUsingPost1Path = '/api/portfolio';

  /**
   * savePortfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePortfolioUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Portfolio;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.SavePortfolioUsingPost1Path, 'post');
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
   * savePortfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePortfolioUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Portfolio;
  }): Observable<void> {

    return this.savePortfolioUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findOnePortfolioUsingGet1
   */
  static readonly FindOnePortfolioUsingGet1Path = '/api/portfolio/{id}';

  /**
   * findOnePortfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOnePortfolioUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOnePortfolioUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.FindOnePortfolioUsingGet1Path, 'get');
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
   * findOnePortfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findOnePortfolioUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOnePortfolioUsingGet1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.findOnePortfolioUsingGet1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation savePortfolioUsingPut1
   */
  static readonly SavePortfolioUsingPut1Path = '/api/portfolio/{id}';

  /**
   * savePortfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePortfolioUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Portfolio;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.SavePortfolioUsingPut1Path, 'put');
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
   * savePortfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePortfolioUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  savePortfolioUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Portfolio;
  }): Observable<void> {

    return this.savePortfolioUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePortfolioUsingDelete1
   */
  static readonly DeletePortfolioUsingDelete1Path = '/api/portfolio/{id}';

  /**
   * deletePortfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePortfolioUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePortfolioUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.DeletePortfolioUsingDelete1Path, 'delete');
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
   * deletePortfolio.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePortfolioUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePortfolioUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.deletePortfolioUsingDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingGet3
   */
  static readonly PortfoliolinesUsingGet3Path = '/api/portfolio/{id}/lines';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingGet3$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingGet3Path, 'get');
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingGet3(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfoliolinesUsingGet3$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingPut1
   */
  static readonly PortfoliolinesUsingPut1Path = '/api/portfolio/{id}/lines';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingPut1Path, 'put');
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<void> {

    return this.portfoliolinesUsingPut1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingPost1
   */
  static readonly PortfoliolinesUsingPost1Path = '/api/portfolio/{id}/lines';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPost1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingPost1Path, 'post');
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPost1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<void> {

    return this.portfoliolinesUsingPost1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingDelete3
   */
  static readonly PortfoliolinesUsingDelete3Path = '/api/portfolio/{id}/lines';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingDelete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingDelete3$Response(params: {

    /**
     * id
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingDelete3Path, 'delete');
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingDelete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingDelete3(params: {

    /**
     * id
     */
    id: any;
  }): Observable<void> {

    return this.portfoliolinesUsingDelete3$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingPatch1
   */
  static readonly PortfoliolinesUsingPatch1Path = '/api/portfolio/{id}/lines';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingPatch1()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPatch1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingPatch1Path, 'patch');
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingPatch1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingPatch1(params: {

    /**
     * id
     */
    id: any;

    /**
     * body
     */
    body: Array<string>;
  }): Observable<void> {

    return this.portfoliolinesUsingPatch1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingGet2
   */
  static readonly PortfoliolinesUsingGet2Path = '/api/portfolio/{id}/lines/{portfoliolineId}';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingGet2$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * portfoliolineId
     */
    portfoliolineId: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingGet2Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('portfoliolineId', params.portfoliolineId, {});
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingGet2(params: {

    /**
     * id
     */
    id: any;

    /**
     * portfoliolineId
     */
    portfoliolineId: any;
  }): Observable<void> {

    return this.portfoliolinesUsingGet2$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation portfoliolinesUsingDelete2
   */
  static readonly PortfoliolinesUsingDelete2Path = '/api/portfolio/{id}/lines/{portfoliolineId}';

  /**
   * portfoliolines.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `portfoliolinesUsingDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingDelete2$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * portfoliolineId
     */
    portfoliolineId: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PortfolioEntityService.PortfoliolinesUsingDelete2Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('portfoliolineId', params.portfoliolineId, {});
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
   * portfoliolines.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `portfoliolinesUsingDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  portfoliolinesUsingDelete2(params: {

    /**
     * id
     */
    id: any;

    /**
     * portfoliolineId
     */
    portfoliolineId: any;
  }): Observable<void> {

    return this.portfoliolinesUsingDelete2$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
