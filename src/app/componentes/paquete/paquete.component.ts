import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PaqueteService} from './servicios/paquete.service';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  itemForm: FormGroup;

  pedidos: any[] = [];
  idPedido: any;
  text: string = 'Mostrar Formulario';
  show: any = false;
  displayedColumns: string[] = ['nombreR', 'direccionR', 'nombreD','direccionD', 'descripcion', 'editar', 'borrar'];






  constructor(private fb: FormBuilder, private pedidoService: PaqueteService) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.getPedido();

  }
  iniciarFormulario() {
    this.itemForm = this.fb.group({
      nombreR: [''],
      direccionR: [''],
      nombreD: [''],
      direccionD:[''],
      descripcion: [''],
      fechaEntrega: ['']
    });
  }
  getPedido() {
    this.pedidoService.getPedidos().subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }
  editarPedido(pedido: any) {
    this.idPedido = pedido._id;
    this.itemForm.patchValue({
      nombreR: pedido.nombreR,
      direccionR: pedido.direccionR,
      nombreD: pedido.nombreD,
      direccionD: pedido.direccionD,
      descripcion: pedido.descripcion,
      fechaEntrega: pedido.fechaEntrega
    });
  }
  borrarPedido(pedido: any) {
    this.idPedido = pedido._id;
    this.pedidoService.borrarPedido(this.idPedido).subscribe(result => console.log('Se borro a: ', pedido));
    this.getPedido();
  }
  submit() {
    if (this.idPedido) {
      this.pedidoService.editarPedido(this.idPedido, this.itemForm.value).subscribe((pedido) => {
        console.log('Paquete Editada: ', pedido);
      });
    } else {
      this.pedidoService.guardarPedido(this.itemForm.value).subscribe((pedido) => {
        console.log('Paquete Nueva: ', pedido);
      });
    }
    this.getPedido();
  }




}
