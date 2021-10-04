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



/**
 * Profile Controller
 */
@Injectable({
  providedIn: 'root',
})
export class ProfileControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listAllFormsOfMetadataUsingGet
   */
  static readonly ListAllFormsOfMetadataUsingGetPath = '/api/profile';

  /**
   * listAllFormsOfMetadata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAllFormsOfMetadataUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadataUsingGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileControllerService.ListAllFormsOfMetadataUsingGetPath, 'get');
    if (params) {
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
   * listAllFormsOfMetadata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAllFormsOfMetadataUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadataUsingGet(params?: {
  }): Observable<void> {

    return this.listAllFormsOfMetadataUsingGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation profileOptionsUsingOptions
   */
  static readonly ProfileOptionsUsingOptionsPath = '/api/profile';

  /**
   * profileOptions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileOptionsUsingOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileOptionsUsingOptions$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileControllerService.ProfileOptionsUsingOptionsPath, 'options');
    if (params) {
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
   * profileOptions.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileOptionsUsingOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileOptionsUsingOptions(params?: {
  }): Observable<void> {

    return this.profileOptionsUsingOptions$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
