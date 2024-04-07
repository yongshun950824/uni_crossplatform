import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form.component';

@NgModule({
  declarations: [TestFormComponent],
  imports: [IonicModule, ReactiveFormsModule],
  exports: [TestFormComponent]
})
export class TestFormModule {}