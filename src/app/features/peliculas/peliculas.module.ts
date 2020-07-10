import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';

import { PeliculasFormComponent } from './components/peliculas-form/peliculas-form.component';

@NgModule({
  declarations: [PeliculasComponent, PeliculasFormComponent],
  imports: [SharedModule, PeliculasRoutingModule],
})
export class PeliculasModule {}
