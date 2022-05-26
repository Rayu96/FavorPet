import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  imageUrl: string = '';
  fileUpload: any;

  showPreview(e: any) {
    if (e.target.files) {
      this.fileUpload = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
    }
  }

  /*   uploadImage2() {
    const file = this.fileUpload;
    const imgRef = ref(this.storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(imgRef, file);
    uploadTask.on(
      'state_changed',
      () => {
        console.log('Uploading img...');
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  } */
}
