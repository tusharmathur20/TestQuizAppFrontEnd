import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedIn=false;
  user:any=null;

  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
  this.user=this.login.getUser();
  this.login.loginStatusSubject.asObservable().subscribe(data=>{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
  })
  }
public logout(){
  this.login.logout();
  // this.isLoggedIn=false;
  // this.user=null;
  window.location.reload();

  // this.login.loginStatusSubject.next(false);
}
}
