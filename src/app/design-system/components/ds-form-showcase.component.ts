import { Component } from '@angular/core';
import {
  ButtonComponent,
  CheckComponent,
  FieldComponent,
  InputComponent,
  SelectComponent,
  SwitchComponent,
  TextareaComponent,
  type SelectOption,
} from '../../../lib/public-api';

@Component({
  selector: 'app-ds-form-showcase',
  imports: [
    ButtonComponent,
    CheckComponent,
    FieldComponent,
    InputComponent,
    SelectComponent,
    SwitchComponent,
    TextareaComponent,
  ],
  templateUrl: './ds-form-showcase.component.html',
})
export class DsFormShowcaseComponent {
  protected readonly regionOptions: SelectOption[] = [
    { label: 'EMEA', value: 'emea' },
    { label: 'Americas', value: 'americas' },
    { label: 'APAC', value: 'apac' },
  ];
}
