import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataDirectivesComponent } from './shared-data-directives.component';

describe('SharedDataDirectivesComponent', () => {
  let component: SharedDataDirectivesComponent;
  let fixture: ComponentFixture<SharedDataDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDataDirectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDataDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
