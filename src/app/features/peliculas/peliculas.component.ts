import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { IMovie } from './model/peliculas';
import { PeliculasService } from './services/peliculas.service';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PeliculasFormComponent } from './components/peliculas-form/peliculas-form.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent {
  public isVisible = false;
  public titleModal: string = 'Agregar película';
  listOfColumn = [
    {
      title: 'ID',
    },
    {
      title: 'Nombre',
      // TODO: Order
      //compare: (a: IMovie, b: IMovie) => a.name - b.name,
      priority: 3,
    },
    {
      title: 'F. Publicación',
      // TODO: Order
      //compare: (a: IMovie, b: IMovie) => a.created - b.created,
      priority: 2,
    },
    {
      title: 'Estado',
    },
    {
      title: '',
    },
  ];

  movies: IMovie[];
  movies$: Observable<IMovie[]>;
  private moviesCollection: AngularFirestoreCollection<IMovie>;
 

  constructor(private modal: NzModalService,private viewContainerRef: ViewContainerRef, private peliculasService: PeliculasService ) {}

  ngOnInit(): void {
    this.peliculasService.read().subscribe(data => {
      this.movies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IMovie
        } ;
      })
    });
    
  }

  onBack() {
    console.log('back');
  }
  addModal(): void {

    const modal = this.modal.create({
      nzTitle: 'Agregar nuevo',
      nzContent: PeliculasFormComponent,
      nzComponentParams: {
        isNew: true
      },
      nzFooter: [ ]
    });

  }
  editModal(movie: IMovie): void {
console.log(movie);
    const modal = this.modal.create({
      nzTitle: 'Editar película',
      nzContent: PeliculasFormComponent,
      nzComponentParams: {
        isNew: false,
        selectedMovie: movie
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [ ]
    });

  }
  removeModalConfirm(pelicula: IMovie): void {
    console.log(pelicula);
    this.modal.confirm({
      nzTitle: '¿Realmente quiere eliminar esta película?',
      nzContent: 'Presione el boton de aceptar para eliminar',
      nzOnOk: () =>
        this.peliculasService.delete(pelicula.id).then((res) => {
          console.log(res);
        }),
    });
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}
