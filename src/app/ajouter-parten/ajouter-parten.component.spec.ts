import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPartenComponent } from './ajouter-parten.component';

describe('AjouterPartenComponent', () => {
  let component: AjouterPartenComponent;
  let fixture: ComponentFixture<AjouterPartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
