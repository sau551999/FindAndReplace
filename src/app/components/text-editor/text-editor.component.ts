import { Component } from '@angular/core';
import { TextHandlerService } from 'src/app/services/text-handler.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  text: string = '';
  searchWord: string = '';
  replaceWord: string = '';
  resultText: string = '';
  occurrenceCount: number = 0;

  constructor(private textHandlerService: TextHandlerService) {}

  onFind() {
    this.occurrenceCount = this.textHandlerService.findOccurrences(this.text, this.searchWord);
  }

  onReplace() {
    this.resultText = this.textHandlerService.replaceOccurrences(this.text, this.searchWord, this.replaceWord);
  }

}
