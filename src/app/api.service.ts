import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
  addStudent(data){
    return this.http.post('http://localhost/ionic-php/backend/create.php', data);
  }
  getStudents(){
    return this.http.get('http://localhost/ionic-php/backend/getStudents.php');
  }
  deleteStudent(id){
    return this.http.delete('http://localhost/ionic-php/backend/delete.php?id='+id);
  }
  getStudent(id){
    return this.http.get('http://localhost/ionic-php/backend/getSingleStudent.php?id='+id);
  }
  updateStudent(id,data){
    return this.http.put('http://localhost/ionic-php/backend/updateStudent.php?id='+id,data)
  }
}
