/**
 * Copyright 2018, Xyram Software Solutions. All rights reserved.
 */
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UtilityService } from '../shared/utility.service';
import { Response, Http } from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { environment } from '../../environments/environment';

@Injectable()
export class ExtractService {
  constructor(private http: HttpClient, private util: UtilityService) {}

  getListofAllGroups() {
    return this.http
      .get(environment.apiBaseUrl + '/fhir/Group?_format=json', {
        observe: 'response'
      })
      .pipe(
        tap(res => {
          return res;
        }),
        catchError(this.handleError('getListofAllGroup', []))
      );
  }

  getGroupById(id: any) {
    const headers = new HttpHeaders({
      Accept: 'application/fhir+ndjson',
      Prefer: 'respond-async'
    });
    return this.http
      .get(
        environment.apiBaseUrl +
          '/fhir/Group/' +
          id +
          '/$everything?_format=json',
        {
          headers: headers,
          observe: 'response'
        }
      )
      .pipe(
        tap(res => {
          return res;
        }),
        catchError(this.handleError('getGroupById', []))
      );
  }

  getBulkDataByContentLocation(location: any) {
    return this.http
      .get(location, {
        observe: 'response'
      })
      .pipe(
        tap(res => {
          return res;
        }),
        catchError(this.handleError('getGroupById', []))
      );
  }

  private handleError(operation, result) {
    return (error: any) => {
      if (operation === 'getListofAllGroup') {
        this.util.notify('Error in fetching Groups', 'error', error.status);
        return result;
      } else if (operation === 'getGroupById') {
        this.util.notify(
          'Error in fetching Group By Id',
          'error',
          error.status
        );
        return result;
      }
    };
  }
}
