import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from '../services/data.service';
import * as moment from 'moment';

declare var $: any;
@Component({
  selector: 'app-coach-calendar-plugin',
  templateUrl: './coach-calendar-plugin.page.html',
  styleUrls: ['./coach-calendar-plugin.page.scss'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`]
})

export class CoachCalendarPluginPage implements OnInit {
  public calenderPlugin: FormGroup;
  hoveredDate: NgbDate | null = null;
  startTime: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  endTime: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  dropdownSettings: IDropdownSettings = {};
  languageList = [];
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30
  fromDate: NgbDate;
  nearestDate = null;
  appointmentDates = '';
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar, private dataservice: DataService, private formbuilder: FormBuilder) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.languageList = this.dataservice.getDayes().
      map(x => new Object({ item_id: x.name, item_text: x.name }));
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }

  ngOnInit() {

    this.onGetDates();
    $('#time').datetimepicker({
      format: 'HH:mm'
    });
    this.calenderPlugin = this.formbuilder.group({
      DateRange: [''],
      StartTime: [''],
      EndTime: [''],
      SelectedDayes: ['']
    });
  }

  onGetDates() {
    const getData = this.dataservice.getData();
    if (getData.length > 0) {
      getData.map(res => {
        res['BookingDates'] = res.Date.split(' ')[0].split('/')[2] + '-' + res.Date.split(' ')[0].split('/')[1] + '-' + res.Date.split(' ')[0].split('/')[0] + ' ' + moment(res.StartTime.split(' ')[1] + res.StartTime.split(' ')[2], 'hh:mm A').format('HH:mm');
      });
    }

    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();

    const dateToCheckFor = moment(n).format('YYYY-MM-DD') + ' ' + moment(time, 'hh:mm A').format('HH:mm');

    getData.forEach(date => {
      let diff = moment(date['BookingDates']).diff(moment(dateToCheckFor), 'minutes');
      if (diff > 0) {
        if (this.nearestDate) {
          if (moment(date['BookingDates']).diff(moment(this.nearestDate?.BookingDates), 'minutes') < 0) {
            this.nearestDate = date;
          }
        } else {
          this.nearestDate = date;
        }
      }
    });

    this.appointmentDates = moment(this.nearestDate?.BookingDates).format('dddd, D MMMM YYYY, hh A')
    // + ' - ' +  moment(this.nearestDate?.EndTime.split(' ')[1]+this.nearestDate?.EndTime.split(' ')[2], 'hh:mm A').format('HH:mm A');
  }


  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}
