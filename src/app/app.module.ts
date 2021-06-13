import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import {LayoutModule} from './layout/layout.module';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './features/home/home.component';
import {ContactComponent} from './features/contact/contact.component';
import {AboutUsComponent} from './features/about-us/about-us.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ContactComponent,
        AboutUsComponent,
    ],
    imports: [
        LayoutModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        I18nModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDEAOXuWJY0GSPVdsfjXzLUwLo-3erB0kU'
        }),
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
