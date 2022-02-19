import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatSelectModule,
       MatGridListModule,
       MatSnackBarModule,
       MatProgressSpinnerModule,
       MatTabsModule,
       MatBadgeModule,
       MatMenuModule, 
       MatTableModule,

    ],
    exports: [MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatSelectModule,
        MatGridListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatBadgeModule,
        MatMenuModule,
        MatTableModule,
        
    ]
})
export class MateririalModule {}