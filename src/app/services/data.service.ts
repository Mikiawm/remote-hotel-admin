import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataService<T> {
    urlAdress: string;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(public endpoint: string, public httpClient: HttpClient, public authService: AuthService
    ) {
        this.urlAdress = environment.apiUrl + this.endpoint;
        const token = this.authService.getToken();
        console.log(token);
        if (token) {
            this.httpOptions.headers =  new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            });
        }
    }
    getAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.urlAdress, this.httpOptions);
    }
    getSingle(id: number): Observable<T> {
        return this.httpClient.get<T>(this.urlAdress, this.httpOptions);
    }
    add(item: T): Observable<T> {
        return this.httpClient.post<T>(this.urlAdress, item, this.httpOptions);
    }
    update(id: number, itemToUpdate: T): Observable<T> {
        return this.httpClient.put<T>(this.urlAdress, itemToUpdate, this.httpOptions);
    }
    delete(id: number): Observable<T> {
        return this.httpClient.put<T>(this.urlAdress, id, this.httpOptions);
    }
}
