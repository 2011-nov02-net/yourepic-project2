import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EntryComponent } from './components/entry/entry.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EpicComponent } from './components/epic/epic.component';
import { PubHomeComponent } from './components/publisher-components/pub-home/pub-home.component';
import { ChaptersSidebarComponent } from './components/chapters-sidebar/chapters-sidebar.component';
import { CreateEpicComponent } from './components/create-epic/create-epic.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReaderComponent } from './components/reader-components/reader/reader.component';
import { PubNavComponent } from './components/publisher-components/pub-nav/pub-nav.component';
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';
import { ReadNavComponent } from './components/reader-components/read-nav/read-nav.component';
<<<<<<< HEAD
import { CategoryConfigComponent } from './components/category-config/category-config.component';
import { FormsModule } from '@angular/forms';
=======
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
>>>>>>> ee1b36896b5df96adbdaa055b7010f24ebc36861

const config = {
  issuer: 'https://dev-7824301.okta.com/oauth2/default',
  pkce: true,
  clientId: '0oa2s0wrcsc5h3BYT5d6',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid'],
  postLogoutRedirectUri: window.location.origin,
};

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    LoginComponent,
    EntryComponent,
    EpicComponent,
    PubHomeComponent,
    ChaptersSidebarComponent,
    CreateEpicComponent,
    AssignRoleComponent,
    NavigationComponent,
    ReaderComponent,
    PubNavComponent,
    ReadNavComponent,
<<<<<<< HEAD
    AddChapterComponent,
    CategoryConfigComponent
=======
    SubscriptionsComponent
>>>>>>> ee1b36896b5df96adbdaa055b7010f24ebc36861
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule, 
    HttpClientModule,
    AppRoutingModule,     
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: config}],
  bootstrap: [AppComponent]
})
export class AppModule { }
