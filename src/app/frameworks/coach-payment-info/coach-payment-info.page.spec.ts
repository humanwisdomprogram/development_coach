import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachPaymentInfoPage } from './coach-payment-info.page';

describe('CoachPaymentInfoPage', () => {
  let component: CoachPaymentInfoPage;
  let fixture: ComponentFixture<CoachPaymentInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPaymentInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachPaymentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
