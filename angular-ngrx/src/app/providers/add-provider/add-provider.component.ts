import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersService } from '../../shared/services/providers.service';


@Component({
  selector: "app-add-provider",
  templateUrl: "./add-provider.component.html",
  styleUrls: ["./add-provider.component.scss"],
})
export class AddProviderComponent implements OnInit {
  public frm: FormGroup;

  constructor(
    private service: ProvidersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.frm = this.fb.group({
      name: null,
      code: null,
      active: true,
    });
  }

  ok(): void {
    this.service.addProvider(this.frm.value);
    this.cancel();
  }

  cancel(): void {
    this.router.navigate(["providers"]);
  }
}
