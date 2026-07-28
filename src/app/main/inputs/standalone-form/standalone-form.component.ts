import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  OCheckboxModule, OComboModule, OCurrencyInputModule, ODateInputModule, ODateRangeInputModule,
  OEmailInputModule, OFileInputModule, OHourInputModule, OHTMLInputModule, OIntegerInputModule,
  OListPickerModule, ONIFInputModule, OPasswordInputModule, OPercentInputModule, OPhoneInputModule,
  ORadioModule, ORealInputModule, OSlideToggleModule, OSliderModule, OTextareaInputModule,
  OTextInputModule, OTimeInputModule
} from 'ontimize-web-ngx';

const HTML_DATA = `
<form (ngSubmit)="onSubmit()" class="standalone-form">

  <!-- Texto -->
  <o-text-input attr="name" label="Nombre" read-only="no" required="yes"
    [formControl]="form.controls.name">
  </o-text-input>
  <o-email-input attr="email" label="Email" read-only="no"
    [formControl]="form.controls.email">
  </o-email-input>
  <o-password-input attr="password" label="Contraseña" read-only="no"
    [formControl]="form.controls.password">
  </o-password-input>
  <o-nif-input attr="nif" label="NIF" read-only="no"
    [formControl]="form.controls.nif">
  </o-nif-input>
  <o-phone-input attr="phone" label="Teléfono" read-only="no"
    [formControl]="form.controls.phone">
  </o-phone-input>
  <o-textarea-input attr="notes" label="Notas" read-only="no" rows="3"
    [formControl]="form.controls.notes">
  </o-textarea-input>
  <o-html-input attr="html" label="HTML" read-only="no"
    [formControl]="form.controls.html">
  </o-html-input>

  <!-- Numéricos -->
  <o-integer-input attr="age" label="Edad" read-only="no" min="0" max="120"
    [formControl]="form.controls.age">
  </o-integer-input>
  <o-real-input attr="weight" label="Peso (kg)" read-only="no"
    min-decimal-digits="1" max-decimal-digits="2"
    [formControl]="form.controls.weight">
  </o-real-input>
  <o-currency-input attr="salary" label="Salario" read-only="no"
    currency-symbol="EUR" min-decimal-digits="2" max-decimal-digits="2"
    [formControl]="form.controls.salary">
  </o-currency-input>
  <o-percent-input attr="discount" label="Descuento (%)" read-only="no"
    [formControl]="form.controls.discount">
  </o-percent-input>
  <o-slider attr="rating" label="Valoración (0-10)" min="0" max="10" step="1"
    thumb-label="yes" [formControl]="form.controls.rating">
  </o-slider>

  <!-- Fechas y horas -->
  <o-date-input attr="birthdate" label="Fecha de nacimiento" read-only="no"
    format="DD/MM/YYYY" value-type="string"
    [formControl]="form.controls.birthdate">
  </o-date-input>
  <o-daterange-input attr="period" label="Período" read-only="no" format="DD/MM/YYYY"
    [formControl]="form.controls.period">
  </o-daterange-input>
  <o-hour-input attr="checkin" label="Hora entrada" read-only="no" format="HH:mm"
    [formControl]="form.controls.checkin">
  </o-hour-input>
  <o-time-input attr="meeting" label="Reunión" read-only="no"
    [formControl]="form.controls.meeting">
  </o-time-input>

  <!-- Selección -->
  <o-combo attr="country" label="País" read-only="no" value-column-type="STRING"
    [static-data]="countries" value-column="id" columns="id;name" visible-columns="name"
    [formControl]="form.controls.country">
  </o-combo>
  <o-combo attr="category" label="Categoría" read-only="no" value-column-type="INTEGER"
    [static-data]="categories" value-column="id" columns="id;name" visible-columns="name"
    [formControl]="form.controls.category">
  </o-combo>
  <o-list-picker attr="language" label="Lenguaje" read-only="no"
    [static-data]="languages" value-column="id" columns="id;name" visible-columns="name"
    [formControl]="form.controls.language">
  </o-list-picker>
  <o-radio attr="gender" label="Género" read-only="no"
    [static-data]="genders" value-column="id" columns="id;name" visible-columns="name"
    [formControl]="form.controls.gender">
  </o-radio>

  <!-- Booleanos -->
  <o-checkbox attr="active" label="Activo"
    [formControl]="form.controls.active">
  </o-checkbox>
  <o-slide-toggle attr="notifications" label="Notificaciones"
    [formControl]="form.controls.notifications">
  </o-slide-toggle>

  <!-- Archivos -->
  <o-file-input attr="avatar" label="Avatar" read-only="no" accept="image/*"
    [formControl]="form.controls.avatar">
  </o-file-input>

  <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">
    Guardar
  </button>
  <button mat-button type="button" (click)="onReset()">
    Limpiar
  </button>

  <pre *ngIf="result">{{ result | json }}</pre>
</form>
`;

const TS_DATA = `
@Component({ ... })
export class StandaloneFormComponent {

  countries = [
    { id: 'ES', name: 'España' }, { id: 'US', name: 'Estados Unidos' },
    { id: 'UK', name: 'Reino Unido' }, { id: 'DE', name: 'Alemania' }
  ];
  categories = [
    { id: 1, name: 'Junior' }, { id: 2, name: 'Senior' }, { id: 3, name: 'Lead' }
  ];
  languages = [
    { id: 'ts', name: 'TypeScript' }, { id: 'java', name: 'Java' },
    { id: 'py', name: 'Python' }, { id: 'go', name: 'Go' }
  ];
  genders = [
    { id: 'M', name: 'Masculino' }, { id: 'F', name: 'Femenino' },
    { id: 'O', name: 'Otro' }
  ];

  form = new FormGroup({
    name:          new FormControl('', Validators.required),
    surname:       new FormControl(''),
    email:         new FormControl('', [Validators.required, Validators.email]),
    password:      new FormControl(''),
    nif:           new FormControl(''),
    phone:         new FormControl(''),
    notes:         new FormControl(''),
    html:          new FormControl(''),
    age:           new FormControl<number>(null),
    weight:        new FormControl<number>(null),
    salary:        new FormControl<number>(null),
    discount:      new FormControl<number>(null),
    rating:        new FormControl<number>(5),
    birthdate:     new FormControl<string>(null),
    period:        new FormControl(null),
    checkin:       new FormControl(null),
    meeting:       new FormControl(null),
    country:       new FormControl('ES'),
    category:      new FormControl<number>(1),
    language:      new FormControl('ts'),
    gender:        new FormControl('M'),
    active:        new FormControl(true),
    notifications: new FormControl(false),
    avatar:        new FormControl(null)
  });

  onSubmit() {
    if (this.form.valid) { this.result = this.form.value; }
  }

  onReset() {
    this.form.reset({
      country: 'ES', category: 1, language: 'ts',
      gender: 'M', active: false, rating: 5
    });
    this.result = null;
  }
}
`;

@Component({
  selector: 'standalone-form',
  templateUrl: './standalone-form.component.html',
  styleUrls: ['./standalone-form.component.scss'],
  standalone: false
})
export class StandaloneFormComponent {

  countries = [
    { id: 'ES', name: 'España' },
    { id: 'US', name: 'Estados Unidos' },
    { id: 'UK', name: 'Reino Unido' },
    { id: 'DE', name: 'Alemania' }
  ];

  categories = [
    { id: 1, name: 'Junior' },
    { id: 2, name: 'Senior' },
    { id: 3, name: 'Lead' }
  ];

  languages = [
    { id: 'ts', name: 'TypeScript' },
    { id: 'java', name: 'Java' },
    { id: 'py', name: 'Python' },
    { id: 'go', name: 'Go' }
  ];

  genders = [
    { id: 'M', name: 'Masculino' },
    { id: 'F', name: 'Femenino' },
    { id: 'O', name: 'Otro' }
  ];

  form2 = new FormGroup({
    accepted: new FormControl(false)
  });

  form = new FormGroup({
    name:          new FormControl(''),
    surname:       new FormControl(''),
    email:         new FormControl('', Validators.email),
    password:      new FormControl(''),
    nif:           new FormControl(''),
    phone:         new FormControl(''),
    notes:         new FormControl(''),
    html:          new FormControl(''),
    age:           new FormControl<number>(null),
    weight:        new FormControl<number>(null),
    salary:        new FormControl<number>(null),
    discount:      new FormControl<number>(null),
    rating:        new FormControl<number>(5),
    birthdate:     new FormControl<string>(null),
    period:        new FormControl(null),
    checkin:       new FormControl(null),
    meeting:       new FormControl(null),
    country:       new FormControl('ES'),
    category:      new FormControl<number>(1),
    language:      new FormControl('ts'),
    gender:        new FormControl('M'),
    active:        new FormControl(true),
    notifications: new FormControl(false),
    avatar:        new FormControl(null)
  });

  result: any = null;
  result2: Partial<{ accepted: boolean | null; }>;

  get invalidControls(): string[] {
    return Object.entries(this.form.controls)
      .filter(([, ctrl]) => ctrl.invalid)
      .map(([key]) => key);
  }

  files = {
    html: { data: HTML_DATA },
    typescript: { data: TS_DATA }
  };

  onSubmit() {
    if (this.form.valid) {
      this.result = this.form.value;
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      this.result2 = this.form2.value;
    }
  }

  onReset() {
    this.form.reset({
      country: 'ES', category: 1, language: 'ts',
      gender: 'M', active: false, rating: 5
    });
    this.result = null;
  }
}
