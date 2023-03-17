import { Time } from "@angular/common";

export interface ConfigEvent {
    eventId: number,
    doorOpening: Time,
    numberOfTickets: number,
    numberOfTicketSold: number,
    eventDate: Date
}
