import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:any;
  address:any;
  year:any;
  course:any;
  section:any;
  students:any=[];
  constructor(
    public _apiService: ApiService
  ) {
    this.getStudents();
  }

  addStudent(){
    let data ={
      name: this.name,
      address:this.address,
      year: this.year,
      course: this.course,
      section: this.section,
    }
    this._apiService.addStudent(data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.name='';
      this.address='';
      this.year = '';
      this.course = '';
      this.section = '';
      alert('Student Added!');
      this.getStudents();
    },(error:any)=>{
      alert('Error');
      console.log("ERROR ===", error)
    })
  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) => {
      console.log("SUCCESS ===", res);
      this.students=res;
    },(error:any)=>{
      console.log("ERROR ===", error)
    })
    }

  deleteStudent(id){
    this._apiService.deleteStudent(id).subscribe((res:any) => {
        console.log("SUCCESS");
        alert("Data has been removed!");
        this.getStudents();
      },(err:any)=> {
        console.log("ERROR")
      })
    }
  }

