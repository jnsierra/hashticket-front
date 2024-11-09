import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public ALERT_INVALID_FORM = "Formulario invalido";
    public ALERT_NO_ITEM = "Al insertar no debe estar seleccionado ning\u00fan item";
    public ALERT_ONLY_ONE_ITEM = "Acci\u00f3n no permitida para mas de un item";
    public ALERT_SELECT_ITEM = "Debes seleccionar un item";
    public ALERT_SUCCESS = "Operaci\u00f3n exitosa";
    public CLOSE = "Cerrar";

    public BUTTON_CANCEL = "Cancelar";
    public BUTTON_CREATE = "Crear";
    public BUTTON_UPDATE = "Actualizar";
    public BUTTON_UPLOAD = "Cargar";
    public BUTTON_BUY = "Comprar";
    
    public COLUMN_CITY_CODE = "cityCode";
    public COLUMN_DATE = "date";
    public COLUMN_DESCRIPTION = "description";
    public COLUMN_EVENT_DATE = "fecha_evento";
    public COLUMN_MINIMUM_AGE = "minimumAge";
    public COLUMN_MUSIC_BAND_NAME = "musicBandName";
    public COLUMN_NAME = "name";
    public COLUMN_OPENING_DOORS = "apertura_puertas";
    public COLUMN_PLACE = "place";
    public COLUMN_PRESENTATION = "presentation";
    public COLUMN_RESPONSIBLE = "responsible";
    public COLUMN_SELECT = "select";
    public COLUMN_SOLD_TICKETS = "tickets_vendidos";
    public COLUMN_TICKET_NUMBER = "numero_tickets";

    public ROLE_ADMIN = "ADMIN";
    public ROLE_MANAGER = "ROLE_MANAGER";
    public ROLE_USER = "USER";
}