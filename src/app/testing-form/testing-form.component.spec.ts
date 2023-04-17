import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingFormComponent } from './testing-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TestingFormComponent', () => {
  let component: TestingFormComponent;
  let fixture: ComponentFixture<TestingFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingFormComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text as contact page', async () => {
    expect(component.text).toEqual('contact page');
  });

  it('should set submitted to true', async () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call the onsubmit method', async () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should call the onsubmit method', async () => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should call the onsubmit method', async () => {
    component.contactForm.controls['email'].setValue('akash@gmail.com');
    component.contactForm.controls['name'].setValue('aada');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  });
});
