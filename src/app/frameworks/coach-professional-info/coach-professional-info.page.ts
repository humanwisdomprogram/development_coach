import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country, State, City }  from 'country-state-city';
import { initialize } from '@ionic/core';
import { CoachInfo } from '../coach-model/coach-info';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coach-professional-info',
  templateUrl: './coach-professional-info.page.html',
  styleUrls: ['./coach-professional-info.page.scss'],
})
export class CoachProfessionalInfoPage implements OnInit {
  public professionalInfo: FormGroup
  public certificate = [];
  public isCurrent = false;
  public inCorrectType = false;
  public countries = [];
  public city=[];
  callingCountries:string;
  constructor(private router: Router, 
    private formbuilder: FormBuilder,
     private dataservice: DataService,
     private apiService:ApiService) {
  }

  ngOnInit() {
    
    this.SetCountriesData();
    this.countries=Country.getAllCountries().map(o => new Object({name: o.name, code: o.isoCode,phonecode:o.phonecode}));
    this.professionalInfo = this.formbuilder.group({
      qualification: this.formbuilder.array([]),
      Coach_WorkExp: this.formbuilder.array([]),
      certificate: this.formbuilder.array([]),
      link: this.formbuilder.array([]),
      Coach_Specializations: ['', [Validators.required]]
    });
    this.InitializeCoachInfo();
  }

  SetCountriesData(){
    this.callingCountries = require('country-data').callingCountries;
    }

  createqualification(value) {
    if (value === 0) {
      return this.formbuilder.group({
        name: [''],
      })
    } else if (value === 1) {
      return this.formbuilder.group({
        InstituteName: [''],
        City: ['', [Validators.required]],
        Country: ['', [Validators.required]],
        From_Year: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]],
        From_Month: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        To_Year: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]],
        To_Month: ['',  [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
        IsCurrent: [false]
      })
    } else if (value === 2) {
      return this.formbuilder.group({
        name: ['']
      })
    } else if (value === 3) {
      const reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
      return this.formbuilder.group({
        name: ['', [Validators.required, Validators.pattern(reg)]]
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

    console.log('QUalificationValues', this.professionalInfo?.controls['Coach_WorkExp'] )
  }

  RemoveQUalification(i) {
    (this.professionalInfo.controls['qualification'] as FormArray).removeAt(i);
  }

  RemoveExp(i) {
    (this.professionalInfo.controls['Coach_WorkExp'] as FormArray).removeAt(i);
  }

  RemoveLinks(i) {
    (this.professionalInfo.controls['link'] as FormArray).removeAt(i);
  }

  RemoveCertificate(i) {
    (this.professionalInfo.controls['certificate'] as FormArray).removeAt(i);
  }

  isCurrentWorking(e, i) {
    if(e.target.checked){
      this.isCurrent = true;
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').clearValidators();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').clearValidators();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').updateValueAndValidity();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').updateValueAndValidity();

    } else {
      this.isCurrent = false;
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').setValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.maxLength(2)]);
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').setValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]);
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Month').updateValueAndValidity();
      (<FormArray>this.professionalInfo.get('Coach_WorkExp'))?.controls[i].get('To_Year').updateValueAndValidity();

    }
  }

  changeCity($event:any, i:number){
    let country=this.countries.filter(x=>x.name==$event.target.value)[0];
   this.city.push(City.getCitiesOfCountry(country.code));
  }
  changeCountry($event:any, i:number){
    let country=this.countries.filter(x=>x.name==$event)[0];
  return City.getCitiesOfCountry(country?.code ? country?.code : '');
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
    this.dataservice.coachInfo = Object.assign(this.dataservice.coachInfo, this.professionalInfo.value);
    // this.dataservice.coachInfo.Coach_Languages = this.personalInfo.get('Coach_Languages').value.map(x => x.item_id);
     localStorage.setItem('coachInfo', JSON.stringify(this.dataservice.coachInfo));
     this.router.navigate(['frameworks/coach-payment-info'])
    // this.dataservice.coachInfo=Object.assign(this.dataservice.coachInfo,this.professionalInfo.value);
    // this.router.navigate(['frameworks/coach-payment-info'])
  }

  goBack() {
    this.router.navigate(['frameworks/coach-personal-info'])
  }
  InitializeCoachInfo(){
    if(localStorage.getItem('coachInfo')==null){
      this.GetCoachDetails();
    }else{
      this.dataservice.coachInfo = JSON.parse(localStorage.getItem('coachInfo'));
      this.setProfessionalInfoFormControl(this.dataservice.coachInfo);
    }
    }
  
    GetCoachDetails() {
      this.apiService.getCoachDetails(this.dataservice.userId).subscribe(res => {
        this.dataservice.coachInfo = res;
        if (res != null) {
          this.setProfessionalInfoFormControl(res);
        }
      });
    }

    buildOrderItemsForm(item): FormGroup {
      this.city.push(City.getCitiesOfCountry(item.Country));
      return this.formbuilder.group({
        InstituteName: item.InstituteName,
        Country: item.Country,
        City: item.City,
        From_Year: item.From_Year,
        From_Month: item.From_Month,
        To_Year: item.To_Year,
        To_Month: item.To_Month,
        IsCurrent: item.IsCurrent,
      })
    }

    certificatesUpdate(item, i): FormGroup {
      return this.formbuilder.group({ "CertificationName": item.CertificationName, "Certificates": item.Certificates })
    }

    qualificationUpdate(item): FormGroup {
      return this.formbuilder.group({ "name": item })
    }
    linkUpdate(item): FormGroup {
      return this.formbuilder.group({ "name": item })
    }


  setProfessionalInfoFormControl(res:CoachInfo){
    
   const orderItemsArray = this.professionalInfo.get('Coach_WorkExp') as FormArray;
   const certificate = this.professionalInfo.get('certificate') as FormArray;
   const qualification = this.professionalInfo.get('qualification') as FormArray;
   const link = this.professionalInfo.get('link') as FormArray;
   if(res.Coach_Qualifications.length > 0) {
    res.Coach_Qualifications.forEach(item => {
      qualification.push(this.qualificationUpdate(item))
    });
   } else {

    qualification.push(this.formbuilder.group({
      name: ''
    }));
    
   }
   if(res.Coach_Websites.length > 0) {
    res.Coach_Websites.forEach(item => {
      link.push(this.linkUpdate(item))
    });
   } else {

    link.push(this.formbuilder.group({
      name: ''
    }));
    
   }
   if(res.Coach_WorkExp.length > 0){
    res.Coach_WorkExp.forEach(item => {
      orderItemsArray.push(this.buildOrderItemsForm(item))
    });
  } else {
    orderItemsArray.push(
      this.formbuilder.group({
        InstituteName: '',
        Country: '',
        City: '',      
        From_Year: '',
        From_Month: '',
        To_Year: '',
        To_Month: '',
        IsCurrent: false   
      })
    )
  }
  if(res.Coach_Certificates.length > 0 ) {
    res.Coach_Certificates.forEach((item, i) => {
      certificate.push(this.certificatesUpdate(item, i));     
    });
  } else {
    certificate.push(this.formbuilder.group({
      name: ''
    }));
  }
    this.professionalInfo.patchValue(
      {
        Coach_Specializations: res.Coach_Specializations.toString()
    });

  }

  saveForLater(){
    
  }
}
