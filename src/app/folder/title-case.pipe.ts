import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    const words = value.replace(/([A-Z])/g, ' $1')
                      .replace(/[-_]/g, ' ')
                      .toLowerCase()
                      .split(' ');
                      
    return words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}