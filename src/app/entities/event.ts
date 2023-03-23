export class Event {
  id: number;
  place: string;
  date: Date;
  time: Date;
  minimumAge: number;
  responsible: string;
  nit: number;
  address: string;
  cityCode: number;
  departmentCode: number;
  eventStatus: string;
  categoryEventId: number;

  constructor() {
    this.id = 0;
    this.place = '';
    this.date = new Date();
    this.time = new Date();
    this.minimumAge = 0;
    this.responsible = '';
    this.nit = 0;
    this.address = '';
    this.cityCode = 0;
    this.departmentCode = 0;
    this.eventStatus = '';
    this.categoryEventId = 0;
  }
}
