import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appPrefixInput]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PrefixInputDirective,
      multi: true
    }
  ]
})
export class PrefixInputDirective implements ControlValueAccessor, OnInit {
  @Input() appPrefixInput: string = '';
  
  private onChange = (value: string) => {};
  private onTouched = () => {};
  private currentValue = '';

  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngOnInit() {
    // Establecer el valor inicial con el prefijo
    if (this.appPrefixInput && !this.currentValue) {
      this.currentValue = this.appPrefixInput;
      this.el.nativeElement.value = this.currentValue;
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    
    // Si el valor no comienza con el prefijo, restaurar el prefijo
    if (this.appPrefixInput && !value.startsWith(this.appPrefixInput)) {
      // Si el usuario está intentando borrar el prefijo, mantenerlo
      if (value.length < this.appPrefixInput.length) {
        value = this.appPrefixInput;
      } else {
        // Si el usuario está escribiendo después del prefijo, mantener el prefijo
        value = this.appPrefixInput + value.substring(this.appPrefixInput.length);
      }
    }
    
    this.currentValue = value;
    input.value = value;
    this.onChange(value);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const cursorPosition = input.selectionStart || 0;
    
    // Si el cursor está antes del prefijo y el usuario presiona una tecla de borrado
    if (this.appPrefixInput && cursorPosition < this.appPrefixInput.length) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        // Mover el cursor al final del prefijo
        setTimeout(() => {
          input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
        }, 0);
      }
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const input = event.target as HTMLInputElement;
    const cursorPosition = input.selectionStart || 0;
    
    // Si el usuario hace clic antes del prefijo, mover el cursor al final del prefijo
    if (this.appPrefixInput && cursorPosition < this.appPrefixInput.length) {
      setTimeout(() => {
        input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
      }, 0);
    }
  }

  @HostListener('focus', ['$event'])
  onFocus(event: Event) {
    const input = event.target as HTMLInputElement;
    
    // Al enfocar, posicionar el cursor al final del prefijo
    if (this.appPrefixInput) {
      setTimeout(() => {
        input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
      }, 0);
    }
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.currentValue = value || this.appPrefixInput;
    this.el.nativeElement.value = this.currentValue;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }
}
