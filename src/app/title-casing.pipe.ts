import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
    transform (value: string) {

        if (!value) {
            return null;
        }

        let enteredWords = value.split(' ');
        let text: string;

        for (let i = 0; i < enteredWords.length; i++) {

            let word = enteredWords[i];

            if (i > 0 && this.isPreposition(word)) {
                enteredWords[i] = word.toLowerCase();
            } else {
                enteredWords[i] = this.toTitleCase(word);
            }
        }

        text = enteredWords.join(' ');

        return text;
    }

    private toTitleCase(word: string) {
        return  word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition (word: string): boolean {
        const prepositions = [
            'of',
            'the',
            'and'
        ];
        return prepositions.includes(word.toLocaleLowerCase());

    }
}
