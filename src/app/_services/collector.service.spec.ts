import { TestBed } from "@angular/core/testing";

import { CollectorService } from "../_services/collector.service";

describe("CollectorService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CollectorService = TestBed.get(CollectorService);
    expect(service).toBeTruthy();
  });
});
