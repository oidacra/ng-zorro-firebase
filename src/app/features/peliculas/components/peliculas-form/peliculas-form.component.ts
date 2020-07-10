import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { IMovie } from '../../model/peliculas';
import { FirestoreDatePipe } from '../../../../shared/pipes/firestore-date.pipe';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-peliculas-form',
  templateUrl: './peliculas-form.component.html',
  styleUrls: ['./peliculas-form.component.scss'],
  providers: [FirestoreDatePipe],
})
export class PeliculasFormComponent implements OnInit {
  @Input() isNew: boolean;
  @Input() selectedMovie?: IMovie;
  form!: FormGroup;
  private __idSelected;
  private __selectedValue: IMovie;

  constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService,
    private modal: NzModalRef,
    private pipeFirebase: FirestoreDatePipe
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      created: [null, [Validators.required]],
      isActive: [false],
    });
    
    console.log(this.selectedMovie);
    if (this.isNew === false) {
      this.__idSelected = this.selectedMovie.id;

      this.__selectedValue = {...this.selectedMovie };
      
      delete this.__selectedValue.id;
      // Cambio de formato de Firebase Timestamp a Date que usa el input de DatePicker
      let fecha = (this.__selectedValue.created as unknown) as Timestamp;

      this.__selectedValue.created = fecha.toDate();
     
      this.form.patchValue(this.__selectedValue);
    }
  }
 

  save() {
 
    if (this.form.valid) {
      if(this.isNew){
        this.peliculasService.create(this.form.value).then((res) => {
          console.log(res);
          this.form.reset();
          this.modal.destroy('Guardo Exitosamente');
        });
      }else{
        this.peliculasService.update(this.__idSelected,this.form.value).then((res) => {
          console.log(res);
          this.form.reset();
          this.modal.destroy('Guardo Exitosamente');
        });
      }
  
    }
  }
}
