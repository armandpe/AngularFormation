import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocktailComponent } from './add-cocktail.component';

describe('AddCocktailComponent', () => {
  let component: AddCocktailComponent;
  let fixture: ComponentFixture<AddCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
