import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginRequest } from '@interfaces/index';
import { AuthService, ToastrAlertService } from '@services/index';

import { ButtonComponent } from '@shared/button/button.component';

type TypeForm = {
  user: FormControl<string | null>;
  pass: FormControl<string | null>;
};

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css',
})
export default class LoginViewComponent {
  form: FormGroup<TypeForm>;
  load: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrAlertService,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.auth.resetSesion();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.warning('Faltan Campos Obligatorios!', 'Error');
      return;
    }
    this.load = true;
    const payload: LoginRequest = {
      user: String(this.form.value.user),
      pass: String(this.form.value.pass),
    };
    this.auth.login(payload).subscribe((res) => {
      this.load = false;
      if (res.error) {
        this.toastr.error(res.msg, 'Error');
        return;
      }
      this.toastr.success('Bienvenido!');
      this.form.reset();
      this.router.navigate(['/admin']);
    });
  }
}
