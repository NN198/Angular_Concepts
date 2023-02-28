import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomTutorialComponent } from './pipe-custom-tutorial.component';

describe('PipeCustomTutorialComponent', () => {
  let component: PipeCustomTutorialComponent;
  let fixture: ComponentFixture<PipeCustomTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCustomTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
