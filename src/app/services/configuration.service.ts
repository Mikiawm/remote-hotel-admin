import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private server = 'http://localhost:5000/';
  private apiUrl = 'api/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private AUTH_HEADER_KEY = 'Authorization';
  private  AUTH_PREFIX = 'Bearer';
  public serverApiUrl() { return this.server + this.apiUrl; }
  constructor() { }
}
