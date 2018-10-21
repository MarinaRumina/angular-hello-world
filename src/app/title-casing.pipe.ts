import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
    transform (value: string) {

        if (!value) {
            return null;
        }

        const prepositions = [
            'of',
            'the',
            'and'
        ];

        let enteredWords = value.split(' ');
        let text: string;

        for (let i = 0; i < enteredWords.length; i++) {

            if (i > 0 && prepositions.includes(enteredWords[i].toLocaleLowerCase())) {
                enteredWords[i] = enteredWords[i].toLowerCase();
            } else {
                enteredWords[i] = enteredWords[i].substr(0, 1).toUpperCase() + enteredWords[i].substr(1).toLowerCase();
            }
        }

        text = enteredWords.join(' ');

        return text;
    }
}
