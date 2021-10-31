import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-professional-info',
  templateUrl: './coach-professional-info.page.html',
  styleUrls: ['./coach-professional-info.page.scss'],
})
export class CoachProfessionalInfoPage implements OnInit {
  public professionalInfo: FormGroup
  public certificate = [];

  constructor(private router: Router, private formbuilder: FormBuilder, private dataservice: DataService) {
  }

  ngOnInit() {
    this.professionalInfo = this.formbuilder.group({
      qualification: this.formbuilder.array([this.createqualification(0)]),
      Coach_WorkExp: this.formbuilder.array([this.createqualification(1)]),
      certificate: this.formbuilder.array([this.createqualification(2)]),
      link: this.formbuilder.array([this.createqualification(3)]),
      Coach_Specializations: ['']
    })
  }

  createqualification(value) {
    if (value === 0) {
      return this.formbuilder.group({
        name: [''],
      })
    } else if (value === 1) {
      return this.formbuilder.group({
        InstituteName: [''],
        City: [''],
        Country: [''],
        From_Year: [''],
        From_Month: [''],
        To_Year: [''],
        To_Month: [''],
        IsCurrent: ['']
      })
    } else if (value === 2) {
      return this.formbuilder.group({
        name: ['']
      })
    } else if (value === 3) {
      return this.formbuilder.group({
        name: ['']
      })
    }
  }

  addNext(value) {
    if (value === 0) {
      (this.professionalInfo.controls['qualification'] as FormArray).push(this.createqualification(value))
    } else if (value === 1) {
      (this.professionalInfo.controls['Coach_WorkExp'] as FormArray).push(this.createqualification(value))
    } else if (value === 2) {
      (this.professionalInfo.controls['certificate'] as FormArray).push(this.createqualification(value))
    } else if (value === 3) {
      (this.professionalInfo.controls['link'] as FormArray).push(this.createqualification(value))
    }
  }

  handleFileInput(files, text) {
    let file = files.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const res: string = e.target.result.split(',')[1];;
      this.certificate.push({ "CertificationName": file['name'], "Certificates": res });
      (<HTMLInputElement>document.getElementById(text)).value = file['name']
    };
  }

  clickuploadimage(id) {
    document.getElementById(id).click();
  }

  nextRoute() {
    let obj = this.professionalInfo.value;
    delete obj['certificate']
    obj['Coach_Certificates'] = this.certificate;
    obj['Coach_Websites'] = this.professionalInfo.value['link'].map((d) => d['name']);
    obj['Coach_Qualifications'] = this.professionalInfo.value['qualification'].map((d) => d['name']);
    delete obj['link']
    delete obj['qualification']
    this.dataservice.professionalInfo.next(obj)
    this.router.navigate(['frameworks/coach-payment-info'])
  }

  goBack() {
    this.router.navigate(['frameworks/coach-personal-info'])
  }

}
