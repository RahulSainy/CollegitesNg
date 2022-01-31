import { Component } from '@angular/core'

@Component({
  selector: 'app-terms',
  template: `
    <div style="overflow: auto;">
      <h1 mat-dialog-title fxlayout fxLayoutAlign="center">Terms & Conditions</h1>
      <ul>
        <li>Not providing proper terms and conditions can be a high risk</li>
        <li>What types of businesses can it work for?</li>
        <li>Manage and auto-update</li>
        <li>Attorney-approved internationally</li>
        <li>Features and benefits</li>
        <li>
          The company also waives responsibility for screening user-submitted
          content in comments and forums, while establishing its right to use
          and license any such material as it sees fit.
        </li>
    
        <li>Plug-and-go integrations for popular store systems</li>
      </ul>
    </div>
    <mat-dialog-actions fxlayout fxLayoutAlign="end">
      <button mat-mini-fab style="background: green" [mat-dialog-close]="true">
        <mat-icon>check</mat-icon>
      </button>
    </mat-dialog-actions>
  `,
})
export class TermsComponent {}
