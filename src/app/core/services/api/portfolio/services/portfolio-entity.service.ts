/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { PortfolioConfiguration as __Configuration } from '../portfolio-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcesPortfolio } from '../models/resources-portfolio';
import { ResourcePortfolio } from '../models/resource-portfolio';
import { Portfolio } from '../models/portfolio';
import { ResourcesPortfolioLine } from '../models/resources-portfolio-line';
import { ResourcePortfolioLine } from '../models/resource-portfolio-line';

/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
class PortfolioEntityService extends __BaseService {
  static readonly findAllPortfolioUsingGET1Path = '/api/portfolio';
  static readonly savePortfolioUsingPOST1Path = '/api/portfolio';
  static readonly findOnePortfolioUsingGET1Path = '/api/portfolio/{id}';
  static readonly savePortfolioUsingPUT1Path = '/api/portfolio/{id}';
  static readonly deletePortfolioUsingDELETE1Path = '/api/portfolio/{id}';
  static readonly portfoliolinesUsingGET3Path = '/api/portfolio/{id}/lines';
  static readonly portfoliolinesUsingPOST1Path = '/api/portfolio/{id}/lines';
  static readonly portfoliolinesUsingPUT1Path = '/api/portfolio/{id}/lines';
  static readonly portfoliolinesUsingDELETE3Path = '/api/portfolio/{id}/lines';
  static readonly portfoliolinesUsingPATCH1Path = '/api/portfolio/{id}/lines';
  static readonly portfoliolinesUsingGET2Path = '/api/portfolio/{id}/lines/{portfoliolineId}';
  static readonly portfoliolinesUsingDELETE2Path = '/api/portfolio/{id}/lines/{portfoliolineId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAllPortfolio
   * @param params The `PortfolioEntityService.FindAllPortfolioUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllPortfolioUsingGET1Response(params: PortfolioEntityService.FindAllPortfolioUsingGET1Params): __Observable<__StrictHttpResponse<ResourcesPortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesPortfolio>;
      })
    );
  }
  /**
   * findAllPortfolio
   * @param params The `PortfolioEntityService.FindAllPortfolioUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllPortfolioUsingGET1(params: PortfolioEntityService.FindAllPortfolioUsingGET1Params): __Observable<ResourcesPortfolio> {
    return this.findAllPortfolioUsingGET1Response(params).pipe(
      __map(_r => _r.body as ResourcesPortfolio)
    );
  }

  /**
   * savePortfolio
   * @param params The `PortfolioEntityService.SavePortfolioUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioUsingPOST1Response(params: PortfolioEntityService.SavePortfolioUsingPOST1Params): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/portfolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePortfolio>;
      })
    );
  }
  /**
   * savePortfolio
   * @param params The `PortfolioEntityService.SavePortfolioUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioUsingPOST1(params: PortfolioEntityService.SavePortfolioUsingPOST1Params): __Observable<ResourcePortfolio> {
    return this.savePortfolioUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * findOnePortfolio
   * @param id id
   * @return OK
   */
  findOnePortfolioUsingGET1Response(id: number): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePortfolio>;
      })
    );
  }
  /**
   * findOnePortfolio
   * @param id id
   * @return OK
   */
  findOnePortfolioUsingGET1(id: number): __Observable<ResourcePortfolio> {
    return this.findOnePortfolioUsingGET1Response(id).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * savePortfolio
   * @param params The `PortfolioEntityService.SavePortfolioUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioUsingPUT1Response(params: PortfolioEntityService.SavePortfolioUsingPUT1Params): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePortfolio>;
      })
    );
  }
  /**
   * savePortfolio
   * @param params The `PortfolioEntityService.SavePortfolioUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioUsingPUT1(params: PortfolioEntityService.SavePortfolioUsingPUT1Params): __Observable<ResourcePortfolio> {
    return this.savePortfolioUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * deletePortfolio
   * @param id id
   */
  deletePortfolioUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(id))}`,
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
   * deletePortfolio
   * @param id id
   */
  deletePortfolioUsingDELETE1(id: number): __Observable<null> {
    return this.deletePortfolioUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * portfoliolines
   * @param id id
   * @return OK
   */
  portfoliolinesUsingGET3Response(id: number): __Observable<__StrictHttpResponse<ResourcesPortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(id))}/lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesPortfolioLine>;
      })
    );
  }
  /**
   * portfoliolines
   * @param id id
   * @return OK
   */
  portfoliolinesUsingGET3(id: number): __Observable<ResourcesPortfolioLine> {
    return this.portfoliolinesUsingGET3Response(id).pipe(
      __map(_r => _r.body as ResourcesPortfolioLine)
    );
  }

  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPOST1Response(params: PortfolioEntityService.PortfoliolinesUsingPOST1Params): __Observable<__StrictHttpResponse<ResourcesPortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}/lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesPortfolioLine>;
      })
    );
  }
  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPOST1(params: PortfolioEntityService.PortfoliolinesUsingPOST1Params): __Observable<ResourcesPortfolioLine> {
    return this.portfoliolinesUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourcesPortfolioLine)
    );
  }

  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPUT1Response(params: PortfolioEntityService.PortfoliolinesUsingPUT1Params): __Observable<__StrictHttpResponse<ResourcesPortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}/lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesPortfolioLine>;
      })
    );
  }
  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPUT1(params: PortfolioEntityService.PortfoliolinesUsingPUT1Params): __Observable<ResourcesPortfolioLine> {
    return this.portfoliolinesUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourcesPortfolioLine)
    );
  }

  /**
   * portfoliolines
   * @param id id
   */
  portfoliolinesUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(id))}/lines`,
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
   * portfoliolines
   * @param id id
   */
  portfoliolinesUsingDELETE3(id: number): __Observable<null> {
    return this.portfoliolinesUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPATCH1Response(params: PortfolioEntityService.PortfoliolinesUsingPATCH1Params): __Observable<__StrictHttpResponse<ResourcesPortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}/lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesPortfolioLine>;
      })
    );
  }
  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfoliolinesUsingPATCH1(params: PortfolioEntityService.PortfoliolinesUsingPATCH1Params): __Observable<ResourcesPortfolioLine> {
    return this.portfoliolinesUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as ResourcesPortfolioLine)
    );
  }

  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingGET2Params` containing the following parameters:
   *
   * - `portfoliolineId`: portfoliolineId
   *
   * - `id`: id
   *
   * @return OK
   */
  portfoliolinesUsingGET2Response(params: PortfolioEntityService.PortfoliolinesUsingGET2Params): __Observable<__StrictHttpResponse<ResourcePortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}/lines/${encodeURIComponent(String(params.portfoliolineId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePortfolioLine>;
      })
    );
  }
  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingGET2Params` containing the following parameters:
   *
   * - `portfoliolineId`: portfoliolineId
   *
   * - `id`: id
   *
   * @return OK
   */
  portfoliolinesUsingGET2(params: PortfolioEntityService.PortfoliolinesUsingGET2Params): __Observable<ResourcePortfolioLine> {
    return this.portfoliolinesUsingGET2Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolioLine)
    );
  }

  /**
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingDELETE2Params` containing the following parameters:
   *
   * - `portfoliolineId`: portfoliolineId
   *
   * - `id`: id
   */
  portfoliolinesUsingDELETE2Response(params: PortfolioEntityService.PortfoliolinesUsingDELETE2Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolio/${encodeURIComponent(String(params.id))}/lines/${encodeURIComponent(String(params.portfoliolineId))}`,
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
   * portfoliolines
   * @param params The `PortfolioEntityService.PortfoliolinesUsingDELETE2Params` containing the following parameters:
   *
   * - `portfoliolineId`: portfoliolineId
   *
   * - `id`: id
   */
  portfoliolinesUsingDELETE2(params: PortfolioEntityService.PortfoliolinesUsingDELETE2Params): __Observable<null> {
    return this.portfoliolinesUsingDELETE2Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PortfolioEntityService {

  /**
   * Parameters for findAllPortfolioUsingGET1
   */
  export interface FindAllPortfolioUsingGET1Params {

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
   * Parameters for savePortfolioUsingPOST1
   */
  export interface SavePortfolioUsingPOST1Params {

    /**
     * id
     */
    id?: number;

    /**
     * body
     */
    body: Portfolio;
  }

  /**
   * Parameters for savePortfolioUsingPUT1
   */
  export interface SavePortfolioUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Portfolio;
  }

  /**
   * Parameters for portfoliolinesUsingPOST1
   */
  export interface PortfoliolinesUsingPOST1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Array<string>;
  }

  /**
   * Parameters for portfoliolinesUsingPUT1
   */
  export interface PortfoliolinesUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Array<string>;
  }

  /**
   * Parameters for portfoliolinesUsingPATCH1
   */
  export interface PortfoliolinesUsingPATCH1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Array<string>;
  }

  /**
   * Parameters for portfoliolinesUsingGET2
   */
  export interface PortfoliolinesUsingGET2Params {

    /**
     * portfoliolineId
     */
    portfoliolineId: string;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for portfoliolinesUsingDELETE2
   */
  export interface PortfoliolinesUsingDELETE2Params {

    /**
     * portfoliolineId
     */
    portfoliolineId: string;

    /**
     * id
     */
    id: number;
  }
}

export { PortfolioEntityService }
