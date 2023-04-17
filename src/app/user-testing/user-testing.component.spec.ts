import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestingComponent } from './user-testing.component';

describe('UserTestingComponent', () => {
  let component: UserTestingComponent;
  let fixture: ComponentFixture<UserTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one user', () => {
     expect(component.usersdata.length).toEqual(1);
    });
    
    
    
    
    it('should have one user', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain("user1")
    });
});
