import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular'
import { AppComponent } from './app.component';
import { ChaptersSidebarComponent } from './components/chapters-sidebar/chapters-sidebar.component';
import { CreateEpicComponent } from './components/create-epic/create-epic.component';
import { EpicComponent } from './components/epic/epic.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PubHomeComponent } from './components/publisher-components/pub-home/pub-home.component'
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { SubEpicComponent } from './components/sub-epic/sub-epic.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent},
  //{ path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'epic', component: EpicComponent},
  { path: '', component: HomeComponent},
  { path: 'epicChapters/:id', component: ChaptersSidebarComponent},
  { path: 'createEpic', component: CreateEpicComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'subepic/:id', component: SubEpicComponent},
  { path: 'subchapter/:id', component: SubChapterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
