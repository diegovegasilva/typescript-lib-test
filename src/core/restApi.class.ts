
import { Observable } from 'rxjs';
import { restApiOptions } from '../models/rest.options.model';
import { RestMethods } from '../core/restMethods.class';


export class RestApi {

    private xrest: RestMethods;
    private mainUrl: string;

    constructor(private restApiOptions: restApiOptions) {
        this.xrest = new RestMethods(this.restApiOptions.activeLog || false, this.restApiOptions.xhrDebug || false);
        this.mainUrl = `${this.restApiOptions.apiRestUrl}`;
    }

    getUsers(): Observable<any> {
        return this.xrest.getRequest(`${this.mainUrl}/users`)
    }
}