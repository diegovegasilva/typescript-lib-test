
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { errorFormatter } from '../utils/errorFormatter';
import { restRequestOptions } from '../models/rest.options.model';
import { restRequestError } from '../models/rest.options.model';


export class RestMethods {

    constructor(private log: boolean, private xhrDebug: boolean) { }
    private restRequest(options: restRequestOptions): Observable<AjaxResponse | restRequestError | object> {
        return ajax({
            url: options.url,
            method: options.method,
            body: options.body,
            headers: options.headers
        }).pipe(
            map(res => {
                let response = this.xhrDebug ? res : res.response;
                if (this.log) {
                    console.log(response);
                }
                return response;
            }),
            catchError(error => {
                let errorData: restRequestError = errorFormatter(error);
                if (this.log) {
                    let errorLog: any = this.xhrDebug ? error : errorData;
                    console.error(errorLog);
                }
                return of(errorData);
            })
        )
    }

    getRequest(url: string, headers?: object): Observable<AjaxResponse | restRequestError | object> {
        return this.restRequest({ method: 'GET', url: url, headers: headers });
    }

    postRequest(url: string, body?: any, headers?: object): Observable<AjaxResponse | restRequestError | object> {
        return this.restRequest({ method: 'POST', url: url, body: body, headers: headers });
    }

    putRequest(url: string, body?: any, headers?: object): Observable<AjaxResponse | restRequestError | object> {
        return this.restRequest({ method: 'PUT', url: url, body: body, headers: headers });
    }
}