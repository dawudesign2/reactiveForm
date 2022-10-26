import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isRequired } from '../validators/isRequired';
import { rangeDate } from '../validators/rangeDate';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private buider: FormBuilder) {}

  searchMovie = this.buider.group({
    search: this.buider.group({
      identifiant: ['', [isRequired('identifiant')]],
      title: ['', [isRequired('title')]],
    }),
    type: ['series', Validators.required],
    year: ['', [rangeDate(1900, 2020)]],
    fiche: ['', Validators.required],
  });

  patchFiche() {
    let fiche = 'courte';
    this.searchMovie.patchValue({
      fiche,
    })
  }

  submitted = false;

  onSubmit() {
    console.log(this.searchMovie.value);
    this.submitted = true;
  }

  ngOnInit(): void {
    this.searchMovie.valueChanges.subscribe(console.log);
  }
}
