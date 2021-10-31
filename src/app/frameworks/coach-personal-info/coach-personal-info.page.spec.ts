import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachPersonalInfoPage } from './coach-personal-info.page';

describe('CoachPersonalInfoPage', () => {
  let component: CoachPersonalInfoPage;
  let fixture: ComponentFixture<CoachPersonalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPersonalInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachPersonalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
