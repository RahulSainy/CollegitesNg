import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authservice:AuthService,private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {

        if( this.authservice.isAuth()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
        }
    }
    
   


}