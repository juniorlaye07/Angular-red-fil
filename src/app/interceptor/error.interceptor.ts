// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { AuthentificationService } from '../services/authentification.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     error = 'Nom d\'utilisateur ou mot de passe incorre';
//     constructor(private authenticationService: AuthentificationService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError(err => {
//             if (err.status === 400) {
//                 // auto logout if 400 response returned from api
//                 this.authenticationService.logout();
//                 location.reload(true);
//             }
//             const error = err.error.message || err.statusText;
//             return throwError(error);
//         }))
//     }
// } 