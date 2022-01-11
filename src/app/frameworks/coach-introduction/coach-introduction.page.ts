import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-coach-introduction',
  templateUrl: './coach-introduction.page.html',
  styleUrls: ['./coach-introduction.page.scss'],
})
export class CoachIntroductionPage implements OnInit {
  isTermsAndConditionChkd =new FormControl(false);
  constructor(private router: Router,
    private dataService:DataService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.
    subscribe(() => this.isTermsAndConditionChkd.setValue(window.history.state?.data?window.history.state.data.isChecked:false));
  }

  clicknext() {
   
    if(this.isTermsAndConditionChkd.value){
      this.router.navigate(['frameworks/coach-personal-info'])
    }
  }

}
