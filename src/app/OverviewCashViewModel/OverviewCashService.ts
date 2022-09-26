import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Environment } from '../Environment/environment.component';

@Injectable()
export class OverviewCashService {
    data: any;

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get(Environment.PATH_TO_USER_DATE);
    }
}
