import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachIntroductionPage } from './coach-introduction.page';

describe('CoachIntroductionPage', () => {
  let component: CoachIntroductionPage;
  let fixture: ComponentFixture<CoachIntroductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachIntroductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachIntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
