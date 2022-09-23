import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent/app.component';
import { NavigatorPageComponent } from './NavigatorPageComponent/navigatorPage.component';
import { NotFoundComponent } from './NotFoundComponent/NotFound';

@NgModule({
    declarations: [AppComponent, NavigatorPageComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
