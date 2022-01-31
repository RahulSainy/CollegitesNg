import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/aut.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy{
@Output() closeSidenav = new EventEmitter<void>();
  isAuth!: boolean;
  authSubscription!: Subscription;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.authChange.subscribe(authStatus=>{
     this.isAuth = authStatus;
    })
  }
onClose(){
  this.closeSidenav.emit();

}
onLogout(){
  this.authservice.logout();
}
ngOnDestroy(): void {
  this.authSubscription.unsubscribe();
}
}
