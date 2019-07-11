import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { People } from './people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCrud';

  name = '';
  lastname = '';
  phone = '';
  password = '';
  email = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  createResource(form) {
    // form.value
    console.log(form.value);
    this.apiService.createPeople(form.value).subscribe((people: People) => {
      console.log('Resource created, ', people);
    });
  }
}
