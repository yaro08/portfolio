/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { PortfolioConfiguration as __Configuration } from '../portfolio-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcesPortfolioLine } from '../models/resources-portfolio-line';
import { ResourcePortfolioLine } from '../models/resource-portfolio-line';
import { PortfolioLine } from '../models/portfolio-line';
import { ResourceCurrency } from '../models/resource-currency';
import { ResourcePortfolio } from '../models/resource-portfolio';

/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
class PortfolioLineEntityService extends __BaseService {
  static readonly findAllPortfolioLineUsingGET1Path = '/api/portfolioline';
  static readonly savePortfolioLineUsingPOST1Path = '/api/portfolioline';
  static readonly findOnePortfolioLineUsingGET1Path = '/api/portfolioline/{id}';
  static readonly savePortfolioLineUsingPUT1Path = '/api/portfolioline/{id}';
  static readonly deletePortfolioLineUsingDELETE1Path = '/api/portfolioline/{id}';
  static readonly portfolioLinecurrencyUsingGET1Path = '/api/portfolioline/{id}/currency';
  static readonly portfolioLinecurrencyUsingPOST1Path = '/api/portfolioline/{id}/currency';
  static readonly portfolioLinecurrencyUsingPUT1Path = '/api/portfolioline/{id}/currency';
  static readonly portfolioLinecurrencyUsingDELETE1Path = '/api/portfolioline/{id}/currency';
  static readonly portfolioLinecurrencyUsingPATCH1Path = '/api/portfolioline/{id}/currency';
  static readonly portfolioLineportfolioUsingGET1Path = '/api/portfolioline/{id}/portfolio';
  static readonly portfolioLineportfolioUsingPOST1Path = '/api/portfolioline/{id}/portfolio';
  static readonly portfolioLineportfolioUsingPUT1Path = '/api/portfolioline/{id}/portfolio';
  static readonly portfolioLineportfolioUsingDELETE1Path = '/api/portfolioline/{id}/portfolio';
  static readonly portfolioLineportfolioUsingPATCH1Path = '/api/portfolioline/{id}/portfolio';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAllPortfolioLine
   * @param params The `PortfolioLineEntityService.FindAllPortfolioLineUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllPortfolioLineUsingGET1Response(params: PortfolioLineEntityService.FindAllPortfolioLineUsingGET1Params): __Observable<__StrictHttpResponse<ResourcesPortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolioline`,
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
   * findAllPortfolioLine
   * @param params The `PortfolioLineEntityService.FindAllPortfolioLineUsingGET1Params` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllPortfolioLineUsingGET1(params: PortfolioLineEntityService.FindAllPortfolioLineUsingGET1Params): __Observable<ResourcesPortfolioLine> {
    return this.findAllPortfolioLineUsingGET1Response(params).pipe(
      __map(_r => _r.body as ResourcesPortfolioLine)
    );
  }

  /**
   * savePortfolioLine
   * @param params The `PortfolioLineEntityService.SavePortfolioLineUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioLineUsingPOST1Response(params: PortfolioLineEntityService.SavePortfolioLineUsingPOST1Params): __Observable<__StrictHttpResponse<ResourcePortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/portfolioline`,
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
   * savePortfolioLine
   * @param params The `PortfolioLineEntityService.SavePortfolioLineUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioLineUsingPOST1(params: PortfolioLineEntityService.SavePortfolioLineUsingPOST1Params): __Observable<ResourcePortfolioLine> {
    return this.savePortfolioLineUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolioLine)
    );
  }

  /**
   * findOnePortfolioLine
   * @param id id
   * @return OK
   */
  findOnePortfolioLineUsingGET1Response(id: number): __Observable<__StrictHttpResponse<ResourcePortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}`,
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
   * findOnePortfolioLine
   * @param id id
   * @return OK
   */
  findOnePortfolioLineUsingGET1(id: number): __Observable<ResourcePortfolioLine> {
    return this.findOnePortfolioLineUsingGET1Response(id).pipe(
      __map(_r => _r.body as ResourcePortfolioLine)
    );
  }

  /**
   * savePortfolioLine
   * @param params The `PortfolioLineEntityService.SavePortfolioLineUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioLineUsingPUT1Response(params: PortfolioLineEntityService.SavePortfolioLineUsingPUT1Params): __Observable<__StrictHttpResponse<ResourcePortfolioLine>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}`,
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
   * savePortfolioLine
   * @param params The `PortfolioLineEntityService.SavePortfolioLineUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  savePortfolioLineUsingPUT1(params: PortfolioLineEntityService.SavePortfolioLineUsingPUT1Params): __Observable<ResourcePortfolioLine> {
    return this.savePortfolioLineUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolioLine)
    );
  }

  /**
   * deletePortfolioLine
   * @param id id
   */
  deletePortfolioLineUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}`,
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
   * deletePortfolioLine
   * @param id id
   */
  deletePortfolioLineUsingDELETE1(id: number): __Observable<null> {
    return this.deletePortfolioLineUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * portfolioLinecurrency
   * @param id id
   * @return OK
   */
  portfolioLinecurrencyUsingGET1Response(id: number): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}/currency`,
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
   * portfolioLinecurrency
   * @param id id
   * @return OK
   */
  portfolioLinecurrencyUsingGET1(id: number): __Observable<ResourceCurrency> {
    return this.portfolioLinecurrencyUsingGET1Response(id).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPOST1Response(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPOST1Params): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/currency`,
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
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPOST1(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPOST1Params): __Observable<ResourceCurrency> {
    return this.portfolioLinecurrencyUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPUT1Response(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPUT1Params): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/currency`,
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
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPUT1(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPUT1Params): __Observable<ResourceCurrency> {
    return this.portfolioLinecurrencyUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * portfolioLinecurrency
   * @param id id
   */
  portfolioLinecurrencyUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}/currency`,
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
   * portfolioLinecurrency
   * @param id id
   */
  portfolioLinecurrencyUsingDELETE1(id: number): __Observable<null> {
    return this.portfolioLinecurrencyUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPATCH1Response(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPATCH1Params): __Observable<__StrictHttpResponse<ResourceCurrency>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/currency`,
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
   * portfolioLinecurrency
   * @param params The `PortfolioLineEntityService.PortfolioLinecurrencyUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLinecurrencyUsingPATCH1(params: PortfolioLineEntityService.PortfolioLinecurrencyUsingPATCH1Params): __Observable<ResourceCurrency> {
    return this.portfolioLinecurrencyUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as ResourceCurrency)
    );
  }

  /**
   * portfolioLineportfolio
   * @param id id
   * @return OK
   */
  portfolioLineportfolioUsingGET1Response(id: number): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}/portfolio`,
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
   * portfolioLineportfolio
   * @param id id
   * @return OK
   */
  portfolioLineportfolioUsingGET1(id: number): __Observable<ResourcePortfolio> {
    return this.portfolioLineportfolioUsingGET1Response(id).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPOST1Response(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPOST1Params): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/portfolio`,
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
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPOST1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPOST1(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPOST1Params): __Observable<ResourcePortfolio> {
    return this.portfolioLineportfolioUsingPOST1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPUT1Response(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPUT1Params): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/portfolio`,
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
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPUT1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPUT1(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPUT1Params): __Observable<ResourcePortfolio> {
    return this.portfolioLineportfolioUsingPUT1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }

  /**
   * portfolioLineportfolio
   * @param id id
   */
  portfolioLineportfolioUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(id))}/portfolio`,
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
   * portfolioLineportfolio
   * @param id id
   */
  portfolioLineportfolioUsingDELETE1(id: number): __Observable<null> {
    return this.portfolioLineportfolioUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPATCH1Response(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPATCH1Params): __Observable<__StrictHttpResponse<ResourcePortfolio>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/portfolioline/${encodeURIComponent(String(params.id))}/portfolio`,
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
   * portfolioLineportfolio
   * @param params The `PortfolioLineEntityService.PortfolioLineportfolioUsingPATCH1Params` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  portfolioLineportfolioUsingPATCH1(params: PortfolioLineEntityService.PortfolioLineportfolioUsingPATCH1Params): __Observable<ResourcePortfolio> {
    return this.portfolioLineportfolioUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as ResourcePortfolio)
    );
  }
}

module PortfolioLineEntityService {

  /**
   * Parameters for findAllPortfolioLineUsingGET1
   */
  export interface FindAllPortfolioLineUsingGET1Params {

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
   * Parameters for savePortfolioLineUsingPOST1
   */
  export interface SavePortfolioLineUsingPOST1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: PortfolioLine;
  }

  /**
   * Parameters for savePortfolioLineUsingPUT1
   */
  export interface SavePortfolioLineUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: PortfolioLine;
  }

  /**
   * Parameters for portfolioLinecurrencyUsingPOST1
   */
  export interface PortfolioLinecurrencyUsingPOST1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }

  /**
   * Parameters for portfolioLinecurrencyUsingPUT1
   */
  export interface PortfolioLinecurrencyUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }

  /**
   * Parameters for portfolioLinecurrencyUsingPATCH1
   */
  export interface PortfolioLinecurrencyUsingPATCH1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }

  /**
   * Parameters for portfolioLineportfolioUsingPOST1
   */
  export interface PortfolioLineportfolioUsingPOST1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }

  /**
   * Parameters for portfolioLineportfolioUsingPUT1
   */
  export interface PortfolioLineportfolioUsingPUT1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }

  /**
   * Parameters for portfolioLineportfolioUsingPATCH1
   */
  export interface PortfolioLineportfolioUsingPATCH1Params {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: string;
  }
}

export { PortfolioLineEntityService }
