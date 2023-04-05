export class ZoneConfigEvent {
    zoneId: number;
    configEventId: number;
    numberOfTickets: number;

    constructor() {
        this.zoneId = 0;
        this.configEventId = 0;
        this.numberOfTickets = 0;
    }
}
