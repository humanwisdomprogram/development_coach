import { Component, OnInit } from '@angular/core';
import { CoachAppointmentHistroy } from '../coach-model/coach-appointment-history';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-coach-history-date',
  templateUrl: './coach-history-date.page.html',
  styleUrls: ['./coach-history-date.page.scss'],
})
export class CoachHistoryDatePage implements OnInit {
   appointmentHistoryList:CoachAppointmentHistroy[]=[];
   data:any;
   Dates:Date[]=[];
  constructor(private datService:DataService,
   private apiService:ApiService) { }

  ngOnInit() {
    this.getAppointmentHistory();
  }
 getAppointmentHistory(){
  this.datService.appointmentHistory= [this.datService.IntializeCoachAppointmentHistroy()];
  //  this.apiService.getAppointmentHistory().subscribe(res=>{
  //  this.datService.appointmentHistory=res;
   //  });
   this.appointmentHistoryList=JSON.parse(JSON.stringify(this.datService.getData()));
   this.GroupAppointmentByDate();
 }




GroupAppointmentByDate(){
  this.appointmentHistoryList.forEach(element => {
    if(this.Dates.length==0 || 
      this.Dates.some(x=>x.getDay()!=new Date(element.Date).getDay() &&
    x.getMonth()!=new Date(element.Date).getMonth()
     && x.getFullYear() != new Date(element.Date).getFullYear() )){
       this.Dates.push(new Date(element.Date))
    }
  });
}
}
