// SERVICE TO HOLD API CALLS TO USER TABLE IN DATABASE

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../_models/user";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { LoginFormComponent } from "../login-form/login-form.component";
// import { request } from 'http';

// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" }),
// };

@Injectable({
  providedIn: "root",
})
export class UserService {
  // CREATES AN OBSERVABLE SUBJECT FOR HOME PAGE MENU STATE AND SETS DEFAULT TO FALSE
  private showMenuSource = new BehaviorSubject<boolean>(false);
  currentMenuState = this.showMenuSource.asObservable();

  returnedData: any;

  constructor(private http: HttpClient) {}

  // METHOD TO SET HOME PAGE MENU VISIBILITY
  seeMenu(message: boolean) {
    this.showMenuSource.next(message);
  }

  // private showMenu = true;
  private userUrl = "http://localhost:8080/reg";
  private loginUrl = "http://localhost:8080/login";
  private logoutUrl = "http://localhost:8080/logout";
  
  getAllUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  getUserByUserName(userName: String): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${userName}`);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.userUrl,
      user,
      { responseType: "text" as "json" } // NOT NEEDED WHEN POSTMAPPING RETURNS "" (EMPTY STRING)
      );
    }
    
    submitLoginInput(user: User): Observable<User> {
      let responseMessage = { responseType: "text" as "json" };
      return this.http.post<User>(
        this.loginUrl,
        user,
        responseMessage
        //    {
        //   responseType: "text" as "json",
        // }
      );
    }
  
    // getJSessionId() {
    //   var jsId = document.cookie;
  
    //   return jsId;
    // }

    logoutUser() {
      console.log("Log Out Clicked");
      // console.log();
      window.location.replace('/');
      return this.http.get<User>(
        this.logoutUrl,
        
      
      );
      
    }


}
