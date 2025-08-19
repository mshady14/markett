import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  errorMsg = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.errorMsg = 'please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

   
    setTimeout(() => {
      this.loading = false;
    
      if (
        this.form.value.username === 'shady' &&
        this.form.value.password === '123456'
        
      ) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/products']);
      } else {
        this.errorMsg = 'Invalid username or password.';
      }
    }, 1500);
  }
}
