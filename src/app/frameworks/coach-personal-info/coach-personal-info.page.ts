import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Country, State, City }  from 'country-state-city';
import { ThrowStmt } from '@angular/compiler';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CoachInfo } from '../coach-model/coach-info';
@Component({
  selector: 'app-coach-personal-info',
  templateUrl: './coach-personal-info.page.html',
  styleUrls: ['./coach-personal-info.page.scss'],
})
export class CoachPersonalInfoPage implements OnInit {
  public personalInfo: FormGroup
  public profilepic: string;
  public gender: string;
  countries =[]
  currencies   :string;    
  regions   :string;   
  languages :string;     
  callingCountries:string;
  state=[];
  languageList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings={};
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private dataservice: DataService,
    private apiservice: ApiService) { }

  ngOnInit() { 
    this.SetCountriesData();
    this.languageList= this.dataservice.getLanguageList().
    map(x=>new Object({item_id:x.name,item_text:x.name}));
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    this.countries=Country.getAllCountries().map(o => new Object({name: o.name, code: o.isoCode,phonecode:o.phonecode}));
    this.personalInfo = this.formbuilder.group({
      Title: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Gender: ['male', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Primary_CTC: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Secondary_CTC: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Coach_Languages: ['', [Validators.required]],
      Code: ['', [Validators.required]],
      Phonecode:['',[Validators.required]]
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
  GetLanguages(){
    this.apiservice.getLanguageList().subscribe(res=>{
      console.log(res);
    })
  }
  clickuploadimage() {
    document.getElementById("file").click();
  }

  getGender(value) {
    this.gender = value;
  }
   SetCountriesData(){
   this.currencies       = require('country-data').currencies,
   this.regions          = require('country-data').regions,
   this.languages        = require('country-data').languages,
   this.callingCountries = require('country-data').callingCountries;
   }

   changeCity($event:any){
     let country=this.countries.filter(x=>x.name==$event.target.value)[0];
     this.personalInfo.patchValue({
      Code: country.code, 
      Phonecode:country.phonecode,
    });
    this.state=State.getStatesOfCountry(country.code);
   }
  saveForLater(){
    this.dataservice.coachInfo=this.dataservice.InitializeCoachInfo();
    this.dataservice.coachInfo=Object.assign(this.dataservice.coachInfo, this.personalInfo.value);
    this.dataservice.coachInfo.Id=+localStorage.getItem('userId');
    this.dataservice.coachInfo.Coach_Languages=this.personalInfo.get('Coach_Languages').value.map(x=>x.item_id);
   this.apiservice.register(this.dataservice.coachInfo).subscribe(res=>{
     console.log(res);
   });
 }
    
}
