import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextSelector]',
  exportAs: 'selectorTexto' // Para asignar directiva a variable de la vista
})
export class TextSnippetDirective {

  @Output() textSelected = new EventEmitter<string>();

  private _snippets: string[] = [];

  @HostListener('mouseup')
  mandarAlControladorTextoSeleccionado() {
    const texto = document.getSelection().toString();
    if (texto) {
      this._snippets.push(texto + texto);
      this.textSelected.emit(texto);
    }
  }

  get snippets(): string[] {
    return this._snippets;
  }

  clear(): void {
    this._snippets = [];
  }
}