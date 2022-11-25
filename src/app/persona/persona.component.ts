import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  displayedColumns = ['id', 'nombres', 'apellidos', 'email'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPersonas(){
    this._personaService.getAllPeople().subscribe((res: any) =>{
      this.dataSource = new MatTableDataSource<any>(res)
    })
 } 
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
