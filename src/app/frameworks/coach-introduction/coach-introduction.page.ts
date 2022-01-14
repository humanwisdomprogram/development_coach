import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-coach-introduction',
  templateUrl: './coach-introduction.page.html',
  styleUrls: ['./coach-introduction.page.scss'],
})
export class CoachIntroductionPage implements OnInit {
  isTermsAndConditionChkd =new FormControl(false);
  userId:number=0;
  constructor(private router: Router,
    private dataService:DataService,
    private apiService:ApiService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.
    subscribe(() => this.isTermsAndConditionChkd.setValue(window.history.state?.data?window.history.state.data.isChecked:false));
    this.emaillogin();
  }

  emaillogin(){
    this.apiService.emailLogin("spider@gmail.com", "123456")
    .subscribe(
      res=>
      {//console.log(res)
     
        this.userId = res.UserId
        console.log(res)
        let guest = localStorage.getItem('guest');
        if(guest === 'T') localStorage.setItem('guest', 'F')
        sessionStorage.setItem("loginResponse",JSON.stringify(res))
        localStorage.setItem("loginResponse",JSON.stringify(res))
        localStorage.setItem("token",JSON.stringify(res.access_token))
        localStorage.setItem("Subscriber", res.Subscriber)
        localStorage.setItem("userId",JSON.stringify(this.userId))
        localStorage.setItem("email", "hwpuser1@gmail.com")
        localStorage.setItem("pswd", "hwpuser")
        localStorage.setItem("name", res.Name)
        this.userId=JSON.parse(localStorage.getItem("userId"))
      },
      error=>{console.log(error)},
      ()=>{
      }

      
    )
  }



  clicknext() {
   
    if(this.isTermsAndConditionChkd.value){
      this.router.navigate(['frameworks/coach-personal-info'])
    }
  }

}
