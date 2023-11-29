import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})

export class EmpleadosComponent {
  empleados = [
    {id:1, nombre: "Juan", sueldo:450.45, activo:false},
    {id:2, nombre: "Luis", sueldo:750.45, activo:true},
    {id:3, nombre: "Ana", sueldo:420.45, activo:false},
    {id:4, nombre: "Jun", sueldo:150.45, activo:true},
    {id:5, nombre: "Emi", sueldo:4050.45, activo:false},
    {id:6, nombre: "Nora", sueldo:4545.45, activo:true},
    {id:7, nombre: "Claudia", sueldo:50.45, activo:false},
    {id:8, nombre: "Karina", sueldo:150.45, activo:true},
    {id:9, nombre: "Omar", sueldo:250.45, activo:false},
    {id:10, nombre: "Beto", sueldo:350.45, activo:false}
  ];
}
