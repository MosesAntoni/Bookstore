import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth1Service } from "./auth1.service";

@Injectable()
export class AuthGuard implements CanActivate{

constructor(private auth1:Auth1Service,private router:Router)
{
    
}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth1.authInfo$
            .map(authInfo => authInfo.isLoggedIn())
            .take(1)
            .do(allowed => {
                if (!allowed) {
                    this.router.navigate(['login']);
                }

            });
    }
    
}