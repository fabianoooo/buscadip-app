import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diploma } from '../models/diploma.model';

@Injectable({
  providedIn: 'root'
})
export class DiplomaService {

  public url = 'http://localhost:5331/api/v1/';

  constructor(private http: HttpClient) { }

  public getDiplomaById(id: string) {
    return this.http.get<Diploma>(`${this.url}diplomas/` + id);
  }
}
