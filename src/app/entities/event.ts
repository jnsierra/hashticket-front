export interface Event extends Array<Event>{
    id: number,
    place: string,
    date: Date,
    time: Date,
    category: string,
    minimumAge: number
}
