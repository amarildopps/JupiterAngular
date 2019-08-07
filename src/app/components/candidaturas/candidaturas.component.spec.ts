import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturasComponent } from './candidaturas.component';

describe('CandidaturasComponent', () => {
  let component: CandidaturasComponent;
  let fixture: ComponentFixture<CandidaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
