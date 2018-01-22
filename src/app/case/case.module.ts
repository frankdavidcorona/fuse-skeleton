import {NgModule} from '@angular/core';
import {QuickCaseComponent} from './components/quick-case/quick-case.component';
import {SharedModule} from '../core/modules/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './case.routes';
import {CaseListComponent} from './components/case-list/case-list.component';
import {CaseSummaryComponent} from './components/case-summary/case-summary.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QuickCaseComponent,
    CaseListComponent,
    CaseSummaryComponent
  ]
})
export class CaseModule {
}
