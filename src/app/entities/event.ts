export class Event {
  id: number;
  place: string;
  date: Date;
  time: Date;
  category: string;
  minimumAge: number;

  constructor() {
    this.id = 0;
    this.place = '';
    this.date = new Date();
    this.time = new Date();
    this.category = '';
    this.minimumAge = 0;
  }
}
