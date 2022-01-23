import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../validators/forbiddeden-name.validator';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  userForm!: FormGroup;

  userName = ''; 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [`Merabi`, [Validators.required, Validators.minLength(5), forbiddenNameValidator(/bob/i)]],
      lastName: [` `, Validators.required],
      age: [``, Validators.min(18)],
      address: this.fb.group({
        city: [``, Validators.maxLength(10)],
        town: [``],
        zip: [``],
      }),
      aliases: this.fb.array([this.fb.control("")]),
    })
    console.log(this.userForm.value);
  }

  get aliases() {
    return this.userForm.get ("aliases") as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(""));
  }
  removeAliases(index: number) {
    this.aliases.removeAt(index);
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
} 
