import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs";
import { NONE_TYPE } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class SessionIdInterceptor implements HttpInterceptor {
  constructor(public auth: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("interceptor: " + req.url);
    req = req.clone({
      withCredentials: true,
    });
    return next.handle(req);


    
    // let sessionid = req.headers.get("Set-Cookie");
    // let reqWithSessionId = req.clone({
    //   headers: req.headers.set(
    //     "Set-Cookie",
    //     "JSESSIONID=" + this.auth.getJSessionId("Set-Cookie")
    //   ),
    // });
    // console.log(sessionid);
    // console.log(reqWithSessionId);
    // return next.handle(reqWithSessionId);
  }
}
