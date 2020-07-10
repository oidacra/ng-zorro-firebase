import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { firestore } from 'firebase';
import {Timestamp} from '@firebase/firestore-types';
import { formatDate } from '@angular/common';


@Pipe({
  name: 'firestoreDate'
})
export class FirestoreDatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {
  }
  transform(timestamp: Timestamp, format?: string): string {
    console.log(timestamp);
    return (timestamp) ? formatDate(timestamp.toDate(), format || 'medium', this.locale) : '';
  }

}
