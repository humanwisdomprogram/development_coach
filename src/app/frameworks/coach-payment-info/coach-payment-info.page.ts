import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-payment-info',
  templateUrl: './coach-payment-info.page.html',
  styleUrls: ['./coach-payment-info.page.scss'],
})
export class CoachPaymentInfoPage implements OnInit {
  public paymentinfo: FormGroup;
  public natinalIdFront: string;
  public natinalIdback: string;

  constructor(
    private router: Router,
     private formbuilder: FormBuilder,
      private dataservice: DataService, private apiservice: ApiService) {
    this.paymentinfo = this.formbuilder.group({
      Consult_StrtTime: ['', [Validators.required]],
      Consult_EndTime: ['', [Validators.required]],
      PerSessionFee: ['', [Validators.required]],
      PerSessionFee_Cur: ['', [Validators.required]],
      PayPallD: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['frameworks/coach-professional-info'])
  }

  handleFileInput(files, value) {
    let file = files.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const res: string = e.target.result.split(',')[1];;
      if(value === 0) {
        this.natinalIdFront = res;
      }else {
        this.natinalIdback = res
      }
    };
  }

  clickuploadimage(id) {
    document.getElementById(id).click();
  }

  submitForm() {
    let profile;
    let professional;
    this.dataservice.personalInfo.subscribe((res) => {
      profile = res;
    })
    this.dataservice.professionalInfo.subscribe((res) => {
      professional = res;
    })
    let obj = this.paymentinfo.value;
    obj['NationalID_Front'] = this.natinalIdFront;
    obj['NationalID_Back'] = this.natinalIdback;
    this.apiservice.register({...obj, ...profile, ...professional}).subscribe((res) => {
      console.log(res)
    })
  }

}
