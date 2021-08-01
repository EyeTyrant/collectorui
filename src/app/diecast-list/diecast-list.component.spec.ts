import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DieCastListComponent } from "./diecast-list.component";

describe("MatDisplayComponent", () => {
  let component: DieCastListComponent;
  let fixture: ComponentFixture<DieCastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DieCastListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
