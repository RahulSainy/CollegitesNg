import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { MateririalModule } from '../material.module'

@NgModule({
  imports: [MateririalModule, CommonModule, FormsModule, FlexLayoutModule],
  exports: [MateririalModule, CommonModule, FormsModule, FlexLayoutModule],
})
export class SharedModule {}
