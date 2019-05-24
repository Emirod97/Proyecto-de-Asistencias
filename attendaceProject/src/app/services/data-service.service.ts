import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Attendance} from '../models/attendance';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  API_URI= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGroup(id: number){
    return this.http.get(`${this.API_URI}/user/${id}`);
  }

  getStudents(id: number){
    return this.http.get(`${this.API_URI}/group/${id}`);
  }

  saveAttendance(attendance: Attendance){
    return this.http.post(`${this.API_URI}/group/`, attendance);
  }
}
