import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPontoComponent } from './area-ponto.component';

describe('AreaPontoComponent', () => {
  let component: AreaPontoComponent;
  let fixture: ComponentFixture<AreaPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
