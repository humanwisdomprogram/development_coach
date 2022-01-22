import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from '../services/data.service';
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
  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  dropdownSettings: IDropdownSettings = {};
  languageList = [];
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar,  private dataservice: DataService, private formbuilder: FormBuilder) {
    
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
 
onAdd() {
  // (this.calenderPlugin as FormArray).push(this.formbuilder.group({
  //   DateRange: [''],
  //   StartTime: [''],
  //   EndTime: [''],
  //   SelectedDayes: ['']
  // }))
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
