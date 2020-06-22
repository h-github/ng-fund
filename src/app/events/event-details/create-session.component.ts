import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
  selector: 'event-create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        color: red;
        float: right;
      }
    `,
  ],
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter<ISession>();
  @Output() cancelAddSession = new EventEmitter();
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    console.log(session);
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
