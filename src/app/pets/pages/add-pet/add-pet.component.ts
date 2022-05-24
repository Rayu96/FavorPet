import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent implements OnInit {
  animalKind: string[] = ['dog', 'cat', 'bird', 'other'];

  addPetForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    kind: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    photoUrl: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.addPetForm.value);
  }
}
