import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
    constructor(private http:HttpClient){ }
}

const configUrl = 'assets/config.json';

getConfig() {
    return this.http.get<Config>(this.configUrl);
}

function getConfig() {
    throw new Error('Function not implemented.');
}
