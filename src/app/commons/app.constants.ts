import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public NO_ITEM = "Al insertar no debe estar seleccionado ningún item";
    public SELECT_ITEM = "Debes seleccionar un item";
    public ONLY_ONE_ITEM = "Acción no permitida para mas de un item";
    public CERRAR = "Cerrar";
}