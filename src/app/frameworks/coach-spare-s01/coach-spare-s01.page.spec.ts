import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachSpareS01Page } from './coach-spare-s01.page';

describe('CoachSpareS01Page', () => {
  let component: CoachSpareS01Page;
  let fixture: ComponentFixture<CoachSpareS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachSpareS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachSpareS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
