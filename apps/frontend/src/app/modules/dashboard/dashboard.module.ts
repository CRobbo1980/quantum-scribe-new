import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            // Add dashboard routes here
        ])
    ],
    declarations: []
})
export class DashboardModule {}