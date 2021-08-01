import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DieCastInputFormComponent } from "./diecast-input-form.component";

describe("InputFormComponent", () => {
  let component: DieCastInputFormComponent;
  let fixture: ComponentFixture<DieCastInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DieCastInputFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieCastInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
