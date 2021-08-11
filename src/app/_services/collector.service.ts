// SERVICE TO HOLD API CALLS TO DIECAST TABLE IN DATABASE

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DieCast } from "../_models/collection";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { FormBuilder } from "@angular/forms";


@Injectable({
  providedIn: "root",
})
export class CollectorService {
  // private indexUrl = "http://localhost:8080/diecast/index";
  private indexUrl = "https://collector-api-1-0.herokuapp.com/diecast/index";
  // private collectorListUrl = "http://localhost:8080/diecast/list";
  private collectorListUrl = "https://collector-api-1-0.herokuapp.com//diecast/list";
  private dieCastUrl = `${this.collectorListUrl}`;
  
  
  
  constructor(
    private http: HttpClient,
    
    ) {}
  

  private _refreshOnSubmit = new Subject<void>();

  get refrestOnSubmit() {
    return this._refreshOnSubmit;
  }

  getAllFromServer(): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(this.dieCastUrl);
  }

  getAllByUserFromServer(userId): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(`${this.dieCastUrl}/${userId}`);
  }

  getItem(id: number): Observable<DieCast> {
    return this.http.get<DieCast>(`${this.dieCastUrl}/${id}`);
  }

  addItem(dieCast: DieCast): Observable<DieCast> {
    return this.http.post<DieCast>(this.dieCastUrl, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  updateItem(id: number, dieCast: DieCast): Observable<void> {
    return this.http.patch<void>(`${this.dieCastUrl}/${id}`, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  deleteItem(id: number) {
    return this.http.delete<DieCast>(`${this.dieCastUrl}/${id}`);
  }
}
