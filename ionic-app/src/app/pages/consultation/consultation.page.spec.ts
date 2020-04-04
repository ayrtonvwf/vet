import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPage } from './consultation.page';

describe('Tab2Page', () => {
  let component: ConsultationPage;
  let fixture: ComponentFixture<ConsultationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});