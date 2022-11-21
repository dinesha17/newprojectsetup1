import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { DashBoardModule } from './layouts/dash-board/dash-board.module';
import { HeaderComponent } from './mainpagecomponent/header/header.component';
import { FooterComponent } from './mainpagecomponent/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './mainpagecomponent/navbar/navbar.component';
import { DashBoardComponent } from './layouts/dash-board/dash-board.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DashBoardComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

    
  
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
