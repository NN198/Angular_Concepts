import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  SelfcomponentTest } from './selfcomponent-test/selfcomponent-test';
import { HeaderComponent } from './header/header.component';
import { AgePipe } from './age.pipe';
import { PercentPipe } from './percent.pipe';
import { PipeCustomTutorialComponent } from './pipe-custom-tutorial.component';
import { ReversestrPipe } from './reversestr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SelfcomponentTest,
    HeaderComponent,
    PPFComponent,
    AgePipe,
    PercentPipe,
    PipeCustomTutorialComponent,
    ReversestrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
