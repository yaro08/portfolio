import {Component, OnInit} from '@angular/core';
import {CachedRoute} from './core/models/cached-route';
import {RequestCacheService} from './core/services/request-cache/request-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cryptocurrency';

  constructor(private requestCacheService: RequestCacheService) {}

  ngOnInit(): void {
    //also add to cache get api portfolio line currencies
    const cachedRoutes: Array<CachedRoute> = [
      { regex: /cryptocompare/ },
      { regex: /\/portfolioline\/\d+\/currency/ },
    ];
    this.requestCacheService.setCachedRouteConfig(cachedRoutes);
  }
}
