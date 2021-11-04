import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {

  portfolioFG: FormGroup;

  @Input() isEdit: boolean | undefined;
  @Input() portfolioName: string | undefined;
  @Output() closed: EventEmitter<ModalDto> = new EventEmitter<ModalDto>();

  constructor(private fb: FormBuilder) {
    this.portfolioFG = this.fb.group({
      name: [this.isEdit ? this.portfolioName : null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  handleCancel() {
    this.closed.emit({
      cancel: true,
      data: {
        name: ''
      }
    })
  }

  handleOk() {
    const form = this.submit();

    if (form.valid) {
      const formData = {
        name: form.value.name
      };

      this.closed.emit({
        cancel: false,
        data: formData
      });
    }
  }

  getFormControl(name: string): AbstractControl {
    return <AbstractControl>this.portfolioFG.get(name);
  }

  getValidateStatus(inputName: string) {
    return this.getFormControl(inputName)
      ?.dirty && this.getFormControl(inputName)
      ?.hasError('required') ? 'error' : 'validating';
  }

  submit() {
    Object.keys(this.portfolioFG.controls)
      .forEach( clave => this.portfolioFG.controls[clave].markAsDirty());

    return Object.assign(this.portfolioFG);
  }
}

export interface ModalDto {
  cancel: boolean,
  data: any;
}
