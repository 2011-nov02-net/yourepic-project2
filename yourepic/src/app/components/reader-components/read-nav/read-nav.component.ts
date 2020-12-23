import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-read-nav',
  templateUrl: './read-nav.component.html',
  styleUrls: ['./read-nav.component.css']
})
export class ReadNavComponent implements OnInit {

  search = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  showResults(){
    console.log(this.search.value)
  }
}
