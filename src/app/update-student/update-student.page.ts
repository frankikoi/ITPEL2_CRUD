import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id:any;
  name:any;
  address:any;
  year:any;
  course:any;
  section:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }
  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      let student = res[0];
      this.name = student.name;
      this.address = student.address;
      this.year = student.year;
      this.course = student.course;
      this.section = student.section;
    }, (err:any)=> {
      console.log("ERROR",err)
    })
  }
  updateStudent(){
    let data ={
      name:this.name,
      year:this.year,
      address:this.address,
      course: this.course,
      section: this.section,
    }
    this._apiService.updateStudent(this.id,data).subscribe((res:any)=>{
      alert("Update Successfuly");
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/home')
    }, (err:any)=> {
      console.log("ERROR",err)
    })
  }

}
