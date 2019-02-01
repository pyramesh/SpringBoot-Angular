import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemployeeComponent } from './createmployee.component';

describe('CreatemployeeComponent', () => {
  let component: CreatemployeeComponent;
  let fixture: ComponentFixture<CreatemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
