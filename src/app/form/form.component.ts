import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private http: HttpClient){
    
  }

  createPost(body){
    return this.http.post('https://reqres.in/api/users',body)
  }

  

  form = new FormGroup({
    username:new FormControl(''),
    job:new FormControl(''),
    notes: new FormArray([
      new FormGroup({ notes: new FormControl()})
    ])
    // vanilla: new FormArray([
      //  new FormControl({'someid': 'myid'})
    // ]),
    // chocolate: new FormControl('')

  })

  get formData() { return <FormArray>this.form.get('notes'); }

  submitData(){
    this.createPost(this.form.value).subscribe(res =>{
      console.log(res);
    });
  }

}
