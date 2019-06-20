import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactRequest, Consents, Address} from '../../models/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  pets = ['dog', 'cat', 'other'];
  submitted = false;

  constructor() {
    this.contactForm = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.pattern('^((\\+-?)|0)?[0-9]{9,13}$')]),
      password: new FormControl('', [Validators.required,
      Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])(?=.*[$@$!#^~%*?&]).{8,}'), Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      pet: new FormControl('', Validators.required),

        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        building: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        flatNo: new FormControl(),

          newsletter: new FormControl(null, Validators.requiredTrue),
          sms: new FormControl(),
  });
  }
  get f() {
    return this.contactForm.controls;
  }

  revert() {
    this.contactForm.reset();
    this.contactForm.reset({ contactRequest: new ContactRequest(), address: new Address(), consents: new Consents()});
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.address = Object.assign({}, result.address);
    result.consents = Object.assign([], result.consents);
    console.log(result);
  }

  ngOnInit(): void {
  }
}
