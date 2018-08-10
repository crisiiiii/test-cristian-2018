import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
