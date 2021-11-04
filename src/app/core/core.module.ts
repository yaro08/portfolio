import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchPipe } from './pipes/fetch.pipe';
import {CacheInterceptor} from './interceptors/cache/cache.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [
    FetchPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FetchPipe
  ],
  providers: [
    FetchPipe,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ]
})
export class CoreModule { }
