export interface CachedRoute {
  /** Will be cached all regex routes */
  regex: RegExp;
  /** Seconds to expire */
  ttl?: number;
}
