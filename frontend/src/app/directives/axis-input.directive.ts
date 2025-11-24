import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAxisInput]',
  standalone: true
})
export class AxisInputDirective {
  private readonly maxAxisValue = 180;
  @Input('appAxisInputZeroToMax') zeroToMax = false;
  private isInternalUpdate = false;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isPermittedKey(event)) {
      return;
    }

    if (this.isNumericKey(event)) {
      const nextValue = this.getNextValue(event.key);
      if (!this.isValueInRange(nextValue)) {
        event.preventDefault();
      }
      return;
    }

    event.preventDefault();
  }

  @HostListener('input')
  onInput() {
    if (this.isInternalUpdate) {
      this.isInternalUpdate = false;
      return;
    }

    const input = this.el.nativeElement;
    const digitsOnly = input.value.replace(/\D+/g, '');

    if (digitsOnly === '') {
      this.updateInputValue('');
      return;
    }

    const numericValue = parseInt(digitsOnly, 10);
    if (isNaN(numericValue)) {
      this.updateInputValue('');
      return;
    }

    this.updateInputValue(Math.min(numericValue, this.maxAxisValue).toString());
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pastedData)) {
      event.preventDefault();
      return;
    }

    const combinedValue = pastedData.slice(0, 3);
    const numericValue = parseInt(combinedValue, 10);
    if (numericValue > this.maxAxisValue) {
      event.preventDefault();
      this.el.nativeElement.value = this.maxAxisValue.toString();
      this.dispatchInputEvent();
      return;
    }
  }

  @HostListener('blur')
  onBlur() {
    if (!this.zeroToMax) {
      return;
    }

    const value = this.el.nativeElement.value.trim();
    if (value === '0') {
      this.updateInputValue(this.maxAxisValue.toString());
    }
  }

  private isPermittedKey(event: KeyboardEvent): boolean {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Home',
      'End'
    ];

    if (allowedKeys.includes(event.key)) {
      return true;
    }

    if (event.ctrlKey || event.metaKey) {
      return ['c', 'v', 'x', 'a'].includes(event.key.toLowerCase());
    }

    return false;
  }

  private isNumericKey(event: KeyboardEvent): boolean {
    return /^[0-9]$/.test(event.key);
  }

  private getNextValue(addedDigit: string): string {
    const input = this.el.nativeElement;
    const { selectionStart, selectionEnd, value } = input;

    if (selectionStart === null || selectionEnd === null) {
      return value + addedDigit;
    }

    return (
      value.substring(0, selectionStart) +
      addedDigit +
      value.substring(selectionEnd)
    );
  }

  private isValueInRange(value: string): boolean {
    if (!/^\d{1,3}$/.test(value)) {
      return false;
    }

    const numericValue = parseInt(value, 10);
    return numericValue >= 0 && numericValue <= this.maxAxisValue;
  }

  private updateInputValue(value: string): void {
    if (this.el.nativeElement.value === value) {
      return;
    }

    this.isInternalUpdate = true;
    this.el.nativeElement.value = value;
    this.dispatchInputEvent();
  }

  private dispatchInputEvent(): void {
    const event = new Event('input', { bubbles: true });
    this.el.nativeElement.dispatchEvent(event);
  }
}

