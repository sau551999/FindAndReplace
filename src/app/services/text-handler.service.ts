import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextHandlerService {

  findOccurrences(text: string, searchWord: string): number {
    if (!text || !searchWord) return 0;
    const regex = new RegExp(searchWord, 'gi');
    return (text.match(regex) || []).length;
  }

  replaceOccurrences(text: string, searchWord: string, replaceWord: string): string {
    if (!text || !searchWord) return text;
    const regex = new RegExp(searchWord, 'gi');
    return text.replace(regex, replaceWord);
  }
}
