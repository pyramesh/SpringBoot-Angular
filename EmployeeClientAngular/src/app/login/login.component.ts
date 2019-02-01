import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private router: Router) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      uname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      //passwd: new FormControl('', this.passwordvalidation)
      passwd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))

    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {'passwd' : true};
    }
  }
  onClickSubmit(data) {

    if (this.loginForm.valid) {
      console.log(data.uname);
      if (data.uname === 'admin' && data.passwd === 'admin') {
        alert('Login Successful');
        this.router.navigate(['home']);
      }
    } else {
      this.validateAllFormFields(this.loginForm);
    }


  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });

      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
