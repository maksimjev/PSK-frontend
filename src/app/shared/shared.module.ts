import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowWrapperComponent } from './components/form-row-wrapper/form-row-wrapper.component';
import { BtnSecondaryComponent } from './components/btn-secondary/btn-secondary.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { InvalidFeedbackComponent } from './components/invalid-feedback/invalid-feedback.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { OtherExpenseComponent } from './components/other-expense/other-expense.component';
import { ModalBtnCloseComponent } from './components/modal-btn-close/modal-btn-close.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    FormRowWrapperComponent,
    BtnSecondaryComponent,
    BtnPrimaryComponent,
    InvalidFeedbackComponent,
    PaginatorComponent,
    OtherExpenseComponent,
    ModalBtnCloseComponent,
    LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [FormRowWrapperComponent,
    BtnSecondaryComponent,
    BtnPrimaryComponent,
    InvalidFeedbackComponent,
    PaginatorComponent,
    OtherExpenseComponent,
    ModalBtnCloseComponent,
    LoaderComponent]
})
export class SharedModule { }
