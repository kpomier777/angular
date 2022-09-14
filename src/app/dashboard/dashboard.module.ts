import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {View1Component} from "./view1/view1.component";
import {View2Component} from "./view2/view2.component";

const routes: Routes =


    [
        {
            path: '',
            component: DashboardComponent,
            children:
                [
                    {
                        title: 'Soy View 1',
                        path: 'view1',
                        component: View1Component
                    },
                    {
                        title: 'Soy View 2',
                        path: 'view2',
                        component: View2Component
                    }
                ]

        }
    ]

@NgModule({
    declarations: [View1Component, View2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
