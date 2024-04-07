import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
  
export class TestFormComponent  implements OnInit {
  @Output() formDataSubmitted = new EventEmitter<any>();
  inputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      years: this.formBuilder.array([])
    });
    this.addYearsControls();
    console.log('inputForm initialized:', this.inputForm);
  }

  ngOnInit() {}


  addYearsControls() {
    const yearsFormArray = this.inputForm.get('years') as FormArray;
    for (let i = 0; i < 5; i++) {
      yearsFormArray.push(this.createYearGroup());
    }
  }

  createYearGroup(): FormGroup {
    return this.formBuilder.group({
      numGroups: ['', Validators.required],
      groups: this.formBuilder.array([])
    });
  }

  addStudents(yearIndex: number) {
    const yearGroupsArray = (this.inputForm.get(`years.${yearIndex}.groups`) as FormArray);
    yearGroupsArray.push(this.createGroupControl());
  }

  removeStudents(yearIndex: number, groupIndex: number) {
    const yearGroupsArray = (this.inputForm.get(`years.${yearIndex}.groups`) as FormArray);
    yearGroupsArray.removeAt(groupIndex);
  }

  createGroupControl(): FormControl {
    return new FormControl('');
  }

  onSubmit() {
    this.formDataSubmitted.emit(this.inputForm.value);
    console.log(this.inputForm.value);
  }

  getYearsControls() {
    return ((this.inputForm.get('years') as FormArray).controls);
  }

  getGroupsControls(yearIndex: number) {
    return ((this.inputForm.get(`years.${yearIndex}.groups`) as FormArray).controls);
  }
}
