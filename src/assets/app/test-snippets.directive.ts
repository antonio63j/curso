import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextSelector]',
  exportAs: 'appTextSelector'
})
export class TextSnippetDirective {

  @Output() textSelected = new EventEmitter<string>();

  private _snippets: string[] = [];

  @HostListener('mouseup')
  onSelected() {
    const text = document.getSelection().toString();
    if (text) {
      this._snippets.push(text);
      this.textSelected.emit(text);
    }
  }

  get snippets(): string[] {
    return this._snippets;
  }

  clear(): void {
    this._snippets = [];
  }
}