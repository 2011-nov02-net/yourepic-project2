import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import Epic from 'src/app/interfaces/epic';
import EpicService from 'src/app/services/epic.service';

@Component({
  selector: 'app-read-epic-list',
  templateUrl: './read-epic-list.component.html',
  styleUrls: ['./read-epic-list.component.css']
})
export class ReadEpicListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable!: MdbTableDirective;
  previous: any = [];

  epics!: Epic[]
  headElements = ['Title', 'Author', 'Categories', 'Date Created']
  selectedEpic!: Epic
  selected = false;

  constructor(private epicService: EpicService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.epicService.getAllEpics().subscribe(epics => {
        this.epics = epics

        this.mdbTable.setDataSource(this.epics);
        this.epics = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onSelect(epic: Epic): void {
    this.selectedEpic = epic
    this.selected = true;
  }

}
