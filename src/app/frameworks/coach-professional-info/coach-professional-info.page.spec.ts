import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachProfessionalInfoPage } from './coach-professional-info.page';

describe('CoachProfessionalInfoPage', () => {
  let component: CoachProfessionalInfoPage;
  let fixture: ComponentFixture<CoachProfessionalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfessionalInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachProfessionalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
