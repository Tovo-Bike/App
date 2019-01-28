import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenService } from '@app/services/authen.service';

@Component({
  selector: 'tovo-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  signupError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenService: AuthenService
  ) {
    if ( this.authenService.currentUserValue ) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenService.signup(this.f.username.value, this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['login']);
            },
            error => {
                console.log(error);
                this.signupError = true;
                this.loading = false;
            });
  }

  back() {
    this.router.navigate(['login']);
  }
}
