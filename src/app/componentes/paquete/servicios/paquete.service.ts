import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaqueteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private paqueteUrl = 'http://localhost:3002/api/modules/paquete/';

  constructor(private httpClient: HttpClient) {}

  getPedidos() {
    return this.httpClient.get(this.paqueteUrl + 'paquete');
  }

  guardarPedido(paquete: any) {
    return this.httpClient.post(
      this.paqueteUrl + 'paquete',
      JSON.stringify(paquete),
      this.httpOptions
    );
  }

  editarPedido(idPaquete, paquete) {
    return this.httpClient.put(
      this.paqueteUrl + 'pedido/' + idPaquete,
      JSON.stringify(paquete),
      this.httpOptions
    );
  }

  borrarPedido( idPaquete ){
    return this.httpClient.delete(this.paqueteUrl + 'paquete/' + idPaquete, this.httpOptions);
  }
}