import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddProvidersSandbox } from './add-provider.sandbox';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss'],
  providers: [AddProvidersSandbox]
})
export class AddProviderComponent implements OnInit {
  public frm: FormGroup;

  constructor(
    private sandbox: AddProvidersSandbox,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      name: null,
      code: null,
      active: true,
    });
  }

  ok(): void {
    this.sandbox.addProvider(this.frm.value);
    this.cancel();
  }

  cancel(): void {
    this.router.navigate(['providers']);
  }
}
