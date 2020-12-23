import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular'
import { AppComponent } from './app.component';
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';
import { CategoryConfigComponent } from './components/category-config/category-config.component';
import { ChaptersSidebarComponent } from './components/chapters-sidebar/chapters-sidebar.component';
import { CreateEpicComponent } from './components/create-epic/create-epic.component';
import { EpicComponent } from './components/epic/epic.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PubHomeComponent } from './components/publisher-components/pub-home/pub-home.component'

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent},
  //{ path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'epic', component: EpicComponent},
  { path: '', component: HomeComponent},
  { path: 'epicChapters/:id', component: ChaptersSidebarComponent},
  { path: 'createEpic', component: CreateEpicComponent},
  { path: 'addChapter/:epicID', component: AddChapterComponent},
  { path: 'categories/:epicID', component: CategoryConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
