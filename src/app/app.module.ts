import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NavigatePathComponent } from './NavigateProjectComponent/navigatePath.component';
import { AppComponent } from './AppComponent/app.component';
import { OverviewCashComponent } from './OverviewCashComponent/OverviewCash.component';
import { NotFoundComponent } from './NotFoundComponent/NotFound.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'navigator', component: OverviewCashComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    declarations: [AppComponent, OverviewCashComponent, NotFoundComponent, NavigatePathComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [NavigatePathComponent],
})
export class AppModule {}
