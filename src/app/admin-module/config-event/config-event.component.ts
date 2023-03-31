import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigEventTable } from 'src/app/entities/config-event-table';
import { ConfigEventService } from 'src/app/service/config-event.service';
import { EventService } from 'src/app/service/event.service';
import { PresentationService } from 'src/app/service/presentation.service';
import { Event } from '../../entities/event';

@Component({
  selector: 'app-config-event',
  templateUrl: './config-event.component.html',
  styleUrls: ['./config-event.component.scss']
})
export class ConfigEventComponent {
  displayedColumns: string[] = ['select','id','presentation','apertura_puertas','fecha_evento','numero_tickets','tickets_vendidos'];
  dataSource = new MatTableDataSource<ConfigEventTable>();
  selection = new SelectionModel<ConfigEventTable>(true, []);
  event:Event;
  
  constructor(private activatedRoute: ActivatedRoute
    , private router: Router
    , private _configEventService: ConfigEventService
    , private _presentationService: PresentationService){
    this.event = new Event(); 
    this.activatedRoute.params.subscribe(params => {
      this.event.id = params['idEvent'] as number;
      this.getConfigEvents();
    });
  }
  getConfigEvents(){
    this._configEventService.getConfigEventByIdEvent(this.event.id).subscribe(res => {
      var configEventsTable:ConfigEventTable[] = res.map( resp =>{
        var configEventTable = new ConfigEventTable();
        configEventTable.id = resp.id;
        configEventTable.eventId = resp.eventId;
        configEventTable.doorOpening = resp.doorOpening;

        configEventTable.numberOfTickets = resp.numberOfTickets;
        configEventTable.numberOfTicketSold = resp.numberOfTicketSold;
        configEventTable.eventDate = resp.eventDate;
        configEventTable.presentationId = resp.presentationId;
        return configEventTable;
      });
      this.getPresentation(configEventsTable);
    });
  }
  getPresentation(configEventsTable:ConfigEventTable[]){
    configEventsTable.forEach(resp => {
      this._presentationService.getById(resp.presentationId).subscribe(data =>{
        resp.presentationName = data.name;
      })
    });
    this.dataSource.data = configEventsTable;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ConfigEventTable): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  insert(){
    alert('Llego');
    if (this.selection.selected.length > 0) {
      alert('Al insertar no debe estar seleccionado ningún item');
      return;
    }
    this.router.navigateByUrl(`/configEventInsert/${this.event.id}`);
  }
  update(){

  }
}
