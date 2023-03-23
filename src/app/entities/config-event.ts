import { Time } from "@angular/common";

export class ConfigEvent {
    id: number;
    eventId: number;
    // doorOpening: Time;
    doorOpening: string;
    numberOfTickets: number;
    numberOfTicketSold: number;
    // eventDate: Date
    eventDate: string;
    presentationId: number;

constructor() {
    this.id = 0;
    this.eventId = 0;
    this.doorOpening = '00:00 AM';
    this.numberOfTickets = 0;
    this.numberOfTicketSold = 0;
    this.eventDate = '01/01/1999';
    this.presentationId = 0;
}

}