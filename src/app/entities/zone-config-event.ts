export class ZoneConfigEvent {
    id:number;
    zoneId: number;
    configEventId: number;
    numberOfTickets: number;
    cost:number;

    constructor() {
        this.id = 0;
        this.zoneId = 0;
        this.configEventId = 0;
        this.numberOfTickets = 0;
        this.cost = 0;
    }
}
