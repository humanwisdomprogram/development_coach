import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachAppointmentHistroy } from '../coach-model/coach-appointment-history';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-coach-history-patient-name',
  templateUrl: './coach-history-patient-name.page.html',
  styleUrls: ['./coach-history-patient-name.page.scss'],
})
export class CoachHistoryPatientNamePage implements OnInit {
  appointmentHistoryList:CoachAppointmentHistroy[]=[];
  UserIds:any[]=[];
  constructor(private dataService:DataService,

    private apiService:ApiService,
    private router:Router) { }


  ngOnInit() {
    this.getAppointmentHistory();
  }
 getAppointmentHistory(){
  this.dataService.appointmentHistory= [this.dataService.IntializeCoachAppointmentHistroy()];
  //  this.apiService.getAppointmentHistory().subscribe(res=>{
  //  this.datService.appointmentHistory=res;
   //  });
   this.appointmentHistoryList=JSON.parse(JSON.stringify(this.dataService.getData()));
   this.GetUniqueUserId();
 }
 GetUniqueUserId(){
   this.appointmentHistoryList.forEach(element => {
    if(this.UserIds.length==0 || !this.UserIds.some(x=>x==element.UserId)){
         this.UserIds.push(element.UserId);
    }
   });
  }

  GetUserName(userId){
    let history= this.appointmentHistoryList.filter(x=>x.UserId==userId);
    let count=history.length;
    return history[0].FName+' '+history[0].LName+"("+count+")";
  }

  GetRevenueCount(userId){
    return  this.appointmentHistoryList.filter(x=>x.PerSessionFee==userId);
  }
}
