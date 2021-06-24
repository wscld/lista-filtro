import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carro } from '../../models/carro.model';
import { filter, map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor() { }

  listarCarros(filtro?: string): Observable<Carro[]> {
    return of([
      new Carro('RX7', 'Mazda', 1987),
      new Carro('Civic', 'Honda', 1991),
      new Carro('Supra', 'Toyota', 1996),
      new Carro('NSX', 'Honda', 1995),
      new Carro('GT-R', 'Nissan', 2000),
      new Carro('Lancer EVO', 'Mistsubishsi', 2001),
    ]).pipe(
      map(carros => filtro ? carros.filter(carro =>
        carro.marca.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()) ||
        carro.nome.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
      ) : carros)
    )
  }
}
