import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// NgZorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { FirestoreDatePipe } from './pipes/firestore-date.pipe';


@NgModule({
  declarations: [FirestoreDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgZorro
    NzTableModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzModalModule,
    NzTagModule, 
    NzDividerModule,
    NzIconModule,
    NzFormModule,
    NzSwitchModule,
    NzInputModule,
    NzDatePickerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgZorro
    NzTableModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzModalModule,
    NzTagModule,
    NzDividerModule,
    NzIconModule,
    NzFormModule,
    NzSwitchModule,
    NzInputModule,
    NzDatePickerModule,
    // Custom pipes
    FirestoreDatePipe
  ],
})
export class SharedModule {}
