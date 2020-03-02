import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-label-input",
  templateUrl: "./label-input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LabelInputComponent)
    }
  ],
  styleUrls: ["./label-input.component.css"]
})
export class LabelInputComponent implements OnInit, ControlValueAccessor {
  @Input() inputType: string = 'text';
  @Input() name: string;
  @Input() id: string;
  @Input() label: string;
  isDisabled: boolean;

  get value(): string {
    return this._value;
  }
  @Input('value')
  set value(text: string) {
    if (this._value !== text) {
      this._value = text;
      this._onChangeCallback(text);
    }
  }

  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};
  private _value: string; // value を保存しておく変数を定義する。名前はなんでも良い

  constructor() {}

  ngOnInit() {}

  keyEnter(v: string) {
    this.value = v;
  }

  writeValue(text: string): void {
    if (text !== this.value) {
      this.value = text;
    }
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
