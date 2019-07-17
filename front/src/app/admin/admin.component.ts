import { Component, OnInit } from '@angular/core';
import { SpectaclesService } from '../spectacles.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public spectacles: SpectaclesService, public fb: FormBuilder) { }

  artistes: any = []
  spectacle: any = []
  formSpectacles: FormGroup;

  ngOnInit() {
    this.spectacles.programme().subscribe(result => {
      this.spectacle = result;
      this.spectacles.artists().subscribe(res => {
        this.artistes = res
      })
    })

    this.formSpectacles = this.fb.group({
      name: [''],
      date: [''],
      description: [''],
    });
  }

  ajoutSpectacles() {
    this.spectacles.ajoutSpectacles(this.formSpectacles.value).subscribe()
  }

}
