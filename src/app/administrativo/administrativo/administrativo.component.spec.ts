import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativoComponent } from './administrativo.component';

describe('DashboardComponent', () => {
  let component: AdministrativoComponent;
  let fixture: ComponentFixture<AdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativoComponent]
    });
    fixture = TestBed.createComponent(AdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});