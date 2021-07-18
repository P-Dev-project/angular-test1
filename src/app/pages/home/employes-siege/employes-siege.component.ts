import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employes-siege',
  templateUrl: './employes-siege.component.html',
  styleUrls: ['./employes-siege.component.css']
})
export class EmployesSiegeComponent implements OnInit {

  constructor() {
  }

  types = ['ع/ر', 'الرتبة', 'الاسم', 'اللقب', 'الرقم الموحد', 'رقم الهاتف'];
  type = 'أدخل ' + 'ع/ر';

  ngOnInit(): void {
  }

  searchBy(value: any) {
    this.type = 'أدخل ' + value.target.value;
  }

}
