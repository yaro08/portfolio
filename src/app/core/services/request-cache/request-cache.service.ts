import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {CachedRoute} from '../../models/cached-route';

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService {

  // cachede peticiones
  private cache = new Map<string, [Date, HttpResponse<any>]>();
  // @ts-ignore
  private cachedRoutesConfig: Array<CachedRoute>;

  /**
   * Añadimos configuracion de rutas a cachear (rutas que se van a cachear y si hay caducidad y hasta cuando)
   * @param cachedRoutesConfig Array de configuracion de rutas cacheadas
   */
  setCachedRouteConfig(cachedRoutesConfig: Array<CachedRoute>): void {
    this.cachedRoutesConfig = cachedRoutesConfig;
  }

  /**
   * Recuperar la configuracion de rutas a cachear
   */
  getCachedRouteConfig(): Array<CachedRoute> {
    return this.cachedRoutesConfig;
  }

  /**
   * Recuperar elemento cacheado (solo se repuera si no a caducado)
   * @param key Nombre parametro
   */
  get(key: string): HttpResponse<any> {
    const tuple = this.cache.get(key);
    if (!tuple) {
      // @ts-ignore
      return null;
    }

    const expires = tuple[0];
    const httpResponse = tuple[1];

    // Don't observe expired keys
    const now = new Date();
    if (expires && expires.getTime() < now.getTime()) {
      this.cache.delete(key);
      // @ts-ignore
      return null;
    }

    return httpResponse;
  }


  set(key: string, value: HttpResponse<any>, ttl: number): void {
    if (ttl) {
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + ttl);
      this.cache.set(key, [expires, value]);
    } else {
      // @ts-ignore
      this.cache.set(key, [null, value]);
    }
  }
}
