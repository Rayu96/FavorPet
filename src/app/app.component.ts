import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  isLogin = false;

  ngOnInit(): void {
    this.auth.getUserId().subscribe((res) => {
      this.isLogin = res == null ? false : true;
    });
  }

  title = 'petLink';
}
