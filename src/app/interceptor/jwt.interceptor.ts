// import { Injectable,injector } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthentificationService } from '../services/authentification.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//     constructor(private injector:Injector) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler){
//         
//        // let authenticationService=this.injector.get(AuthentificationService)
//         const isLoggedIn = currentUser && currentUser.token;
//         
//         if (isLoggedIn && isApiUrl) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${currentUser.token}`
//                 }
//             });
//         }
//         return next.handle(request);
//     }
// } 