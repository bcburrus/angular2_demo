import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProject} from './project';

@Injectable()
export class ProjectService {
    private _serviceUrl = 'http://localhost:8080/';

    constructor(private _http: Http) { }

    getProjects(): Observable<IProject[]> {
        return this._http.get(this._serviceUrl + 'projects')
            .map((response: Response) => <IProject[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw('Error');
    }
}