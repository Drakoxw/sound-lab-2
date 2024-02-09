import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import {
  REGEX,
  RadioOptionsContactUs,
  radioButtonsFormContactUs,
} from '@constants/index';
import { ContactMeRequest } from '@interfaces/index';
import { HttpService, ToastrAlertService } from '@services/index';
import { ButtonComponent } from '@shared/button/button.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

type TypeForm = {
  name: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  subject: FormControl<string | null>;
  otherSubject: FormControl<string | null>;
  message: FormControl<string | null>;
};

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, TitleComponent],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  form: FormGroup<TypeForm>;
  optionsSubject: RadioOptionsContactUs[] = radioButtonsFormContactUs;
  subs: Subscription[] = [];
  load = false;

  private toastr = inject(ToastrAlertService);
  private httpServ = inject(HttpService);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(REGEX.PHONE)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      otherSubject: ['', [Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    const subsc = this.form.get('subject')?.valueChanges.subscribe((val) => {
      if (val === 'Otro') {
        this.form
          .get('otherSubject')
          ?.setValidators([Validators.required, Validators.minLength(3)]);
        this.form.get('otherSubject')?.updateValueAndValidity();
      } else {
        this.form.get('otherSubject')?.clearValidators();
        this.form.get('otherSubject')?.updateValueAndValidity();
      }
    });
    if (subsc) {
      this.subs[0] = subsc;
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.warning('Faltan Campos Obligatorios!', 'Error');
      return;
    }

    if (this.load) { return; }

    const subject =
      this.form.value.subject === 'Otro'
        ? `Otro: ${this.form.value.otherSubject}`
        : String(this.form.value.subject);
    const data: ContactMeRequest = {
      fullname: `${this.form.value.name} ${this.form.value.lastname}`,
      email: String(this.form.value.email),
      phone: Number(this.form.value.phone),
      subject,
      message: String(this.form.value.message),
    };

    this.load = true;
    this.httpServ.sendEmailContactUs(data).subscribe({
      next: (r) => {
        if (r.error) {
          this.toastr.error(r.msg, 'Error');
          return;
        }
        this.toastr.success('Mensaje Enviado!');
        this.form.reset();
      },
      error: (err) => this.toastr.error(err.error.msg, 'Error'),
      complete: () => (this.load = false),
    });
  }

  get name() {
    return {
      validateError:
        this.form.get('name')?.errors && this.form.get('name')?.touched,
    };
  }
  get lastname() {
    return {
      validateError:
        this.form.get('lastname')?.errors && this.form.get('lastname')?.touched,
    };
  }
  get email() {
    return {
      validateError:
        this.form.get('email')?.errors && this.form.get('email')?.touched,
    };
  }
  get phone() {
    return {
      validateError:
        this.form.get('phone')?.errors && this.form.get('phone')?.touched,
    };
  }
  get subject() {
    return {
      validateError:
        this.form.get('subject')?.errors && this.form.get('subject')?.touched,
    };
  }
  get otherSubject() {
    return {
      validateError:
        this.form.get('otherSubject')?.errors &&
        this.form.get('otherSubject')?.touched,
    };
  }
  get message() {
    return {
      validateError:
        this.form.get('message')?.errors && this.form.get('message')?.touched,
    };
  }
}
