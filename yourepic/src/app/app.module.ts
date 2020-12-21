import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-7824301.okta.com/oauth2/default',
  pkce: true,
  clientId: '0oa2s0wrcsc5h3BYT5d6',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid'],
  postLogoutRedirectUri: window.location.origin,
};
=======
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7fbaf191a303342d115dbdefd7bb85b9d3408198

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
=======
    BrowserModule,    
    HttpClientModule,
>>>>>>> 7fbaf191a303342d115dbdefd7bb85b9d3408198
    AppRoutingModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: config}],
  bootstrap: [AppComponent]
})
export class AppModule { }
