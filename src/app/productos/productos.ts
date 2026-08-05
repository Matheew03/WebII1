import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    {
      id: 1,
      titulo: 'Cyberpunk 2077',
      categoria: 'RPG / Ciencia Ficción',
      precio: 59.99,
      stock: 12
    },
    {
      id: 2,
      titulo: 'Persona 5 Royal',
      categoria: 'JRPG / Estrategia',
      precio: 59.99,
      stock: 0
    },
    {
      id: 3,
      titulo: 'The Last of Us Part I',
      categoria: 'Acción / Aventura',
      precio: 69.99,
      stock: 5
    },
    {
      id: 4,
      titulo: 'Elden Ring',
      categoria: 'Mundo Abierto / Soulslike',
      precio: 59.99,
      stock: 8
    },
    {
      id: 5,
      titulo: 'Resident Evil 4 Remake',
      categoria: 'Terror / Acción',
      precio: 39.99,
      stock: 3
    },
    {
      id: 6,
      titulo: 'Marvel\'s Spider-Man 2',
      categoria: 'Acción / Mundo Abierto',
      precio: 69.99,
      stock: 7
    }
  ];
}
