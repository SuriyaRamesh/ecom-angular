import { NgModule } from '@angular/core';
import {MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule} from '@angular/material';


@NgModule({
  exports : [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MdComponentsModule { }
