import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './AppComponent/app.component';
import { NavigatorPageComponent } from './NavigatorPageComponent/navigatorPage.component';
import { NotFoundComponent } from './NotFoundComponent/NotFound';

const routes: Routes = [
    { path: '/', component: AppComponent },
    { path: '/navigator', component: NavigatorPageComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
