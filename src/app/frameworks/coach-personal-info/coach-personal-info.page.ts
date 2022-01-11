import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-personal-info',
  templateUrl: './coach-personal-info.page.html',
  styleUrls: ['./coach-personal-info.page.scss'],
})
export class CoachPersonalInfoPage implements OnInit {
  public personalInfo: FormGroup
  public profilepic: string;
  public gender: string;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private dataservice: DataService) { }

  ngOnInit() {
    this.personalInfo = this.formbuilder.group({
      Title: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Primary_CTC: ['', [Validators.required]],
      Secondary_CTC: ['', [Validators.required]],
      Coach_Languages: ['', [Validators.required]]
    })
  }

  nextRoute() {
    let obj = this.personalInfo.value;
    obj['Gender'] = this.gender;
    obj['ProfilePic'] = this.profilepic.split(',')[1];
    obj['Coach_Languages'] = [this.personalInfo.value['Coach_Languages']];
    this.dataservice.personalInfo.next(obj);
    this.router.navigate(['frameworks/coach-professional-info'])
  }

  goBack() {
    this.router.navigate(['frameworks'],{state: {data: {isChecked: true}}})
  }

  handleFileInput(files) {
    let file = files.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const res: string = e.target.result;
      this.profilepic = res;
    };
  }

  clickuploadimage() {
    document.getElementById("file").click();
  }

  getGender(value) {
    this.gender = value;
  }

}
