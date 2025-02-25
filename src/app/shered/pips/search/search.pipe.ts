import { Pipe, PipeTransform } from '@angular/core';
import { iproducts } from '../../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allproducts: iproducts[], searchValue: string): iproducts[] {
    return allproducts.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

}
