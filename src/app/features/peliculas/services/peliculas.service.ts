import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMovie } from '../model/peliculas';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  
  constructor(private firestore: AngularFirestore) {}

  create(movie: IMovie) {
    return this.firestore.collection('peliculas').add(movie);
  }

  read() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }

  update(recordID, movie: IMovie) {
    return this.firestore.doc('peliculas/' + recordID).update(movie);
  }

  delete(movie_id: string) {
    return this.firestore.doc('peliculas/' + movie_id).delete();
  }
}
