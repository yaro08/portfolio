import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RequestCacheService} from '../../services/request-cache/request-cache.service';
import {CachedRoute} from '../../models/cached-route';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: RequestCacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Let's check if url with params is already cached
    const cachedResponse = this.cache.get(request.urlWithParams);
    return cachedResponse != null ? of(cachedResponse) : this.sendRequest(request, next);
  }

  sendRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      // tslint:disable-next-line:triple-equals
      if (req.method == 'GET' && event instanceof HttpResponse) {
        const cachedRouteConfig = this.cache.getCachedRouteConfig();
        if (cachedRouteConfig != null) {
          // Check if url is added to list to be cached, without params
          const cachedRoute = cachedRouteConfig.find((r: CachedRoute) => r.regex.test(req.url));
          if (cachedRoute != null) {
            // Let's cached with params
            this.cache.set(req.urlWithParams, event, cachedRoute.ttl as number);
          }
        }
      }
    }));
  }
}
