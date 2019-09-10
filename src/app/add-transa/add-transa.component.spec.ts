import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransaComponent } from './add-transa.component';

describe('AddTransaComponent', () => {
  let component: AddTransaComponent;
  let fixture: ComponentFixture<AddTransaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
