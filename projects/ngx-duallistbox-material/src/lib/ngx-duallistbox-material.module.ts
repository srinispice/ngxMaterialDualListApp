import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { NgxDuallistboxMaterialComponent } from './ngx-duallistbox-material.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxDuallistboxMaterialComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [NgxDuallistboxMaterialComponent],
})
export class NgxDuallistboxMaterialModule {}
