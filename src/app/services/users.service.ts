import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly accountEndpoint = '/user';


  constructor() {

  }
}
