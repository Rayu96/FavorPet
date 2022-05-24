import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petImg',
})
export class PetImgPipe implements PipeTransform {
  transform(value: string): unknown {
    let imgUrl: string = '';
    switch (value) {
      case 'dog':
        imgUrl = 'assets/icons/dog.png';
        break;

      case 'cat':
        imgUrl = 'assets/icons/cat.png';
        break;

      case 'bird':
        imgUrl = 'assets/icons/bird.png';
        break;

      case 'other':
        imgUrl = 'assets/icons/other.png';
        break;
    }

    return imgUrl;
  }
}
