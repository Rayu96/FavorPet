import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  isLogin = false;

  ngOnInit(): void {
    this.auth.currentUserId.subscribe((res) => {
      this.isLogin = res;
      console.log(this.isLogin);
    });
  }

  goLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  signOut() {
    this.auth.logout();
    this.router.navigateByUrl('/');
    this.auth.currentUserId.emit(false);
  }
}
