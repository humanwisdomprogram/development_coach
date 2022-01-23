import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-congratulations',
  templateUrl: './coach-congratulations.page.html',
  styleUrls: ['./coach-congratulations.page.scss'],
})
export class CoachCongratulationsPage implements OnInit {

  constructor(    private router: Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['frameworks/coach-history-date'])

  }
}
