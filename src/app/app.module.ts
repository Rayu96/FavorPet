import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorComponent } from './shared/pages/error/error.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingPageComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
