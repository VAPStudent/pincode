import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PincodeService } from './services/pincode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pincode';

  pincodeForm: FormGroup;

  constructor(private _service: PincodeService) {  }

  ngOnInit() {
    this.pincodeForm = new FormGroup({
      pincode: new FormControl(null),
      area: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl(null)
    });
  }

  onGetAddress() {
    const pc = this.pincodeForm.get("pincode").value;

    this._service.GetAddress(pc)
      .subscribe((sub) => {

        this.pincodeForm.setValue({
          pincode: sub[0].PostOffice[0].Pincode,
          area: sub[0].PostOffice[0].Name,
          state: sub[0].PostOffice[0].State,
          city: sub[0].PostOffice[0].Division,
          country: sub[0].PostOffice[0].Country
        })

        console.log(sub);
      })
  }

}
