import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdmComponent } from './area-adm.component';

describe('AreaAdmComponent', () => {
  let component: AreaAdmComponent;
  let fixture: ComponentFixture<AreaAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
