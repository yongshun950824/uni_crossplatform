import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TestFormComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [TestFormComponent]
})
export class TestFormModule {}