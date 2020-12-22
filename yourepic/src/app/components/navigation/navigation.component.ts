import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  auth = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  user: string = "string";
  constructor(private breakpointObserver: BreakpointObserver) { }

  updateAuth(event: boolean) {
    this.auth = event;
    event ? this.user = "logged in" : this.user = "not logged in"
  }
}
