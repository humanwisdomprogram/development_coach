import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-introduction',
  templateUrl: './coach-introduction.page.html',
  styleUrls: ['./coach-introduction.page.scss'],
})
export class CoachIntroductionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clicknext() {
    this.router.navigate(['frameworks/coach-personal-info'])
  }

}
