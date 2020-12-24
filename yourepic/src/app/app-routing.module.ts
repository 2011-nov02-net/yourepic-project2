import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular'
import { ChaptersSidebarComponent } from './components/chapters-sidebar/chapters-sidebar.component';
import { CreateEpicComponent } from './components/create-epic/create-epic.component';
import { EpicComponent } from './components/epic/epic.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PubHomeComponent } from './components/publisher-components/pub-home/pub-home.component'
import { ReadEpicListComponent } from './components/reader-components/read-epic-list/read-epic-list.component';
import { ReadEpicComponent } from './components/reader-components/read-epic/read-epic.component';
import { ReaderComponent } from './components/reader-components/reader/reader.component';
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { SubEpicComponent } from './components/sub-epic/sub-epic.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent},
  { path: 'myhome', component: ReaderComponent },
  { path: 'login', component: LoginComponent},
  { path: 'epic', component: EpicComponent},
  { path: 'epicChapters/:id', component: ChaptersSidebarComponent},
  { path: 'createEpic', component: CreateEpicComponent},
  { path: 'dashboard', component: PubHomeComponent },
  { path: 'browse', component: ReadEpicListComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'read/:id', component: ReadEpicComponent },
  { path: 'subepic/:id', component: SubEpicComponent},
  { path: 'subchapter/:id', component: SubChapterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
