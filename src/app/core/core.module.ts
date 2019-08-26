import {CommonModule, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '@app/core/components/app/app.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {ActivateComponent} from '@app/core/pages/activate/activate.component';
import {AdfcComponent} from '@app/core/pages/adfc/adfc.component';
import {BecomeStationComponent} from '@app/core/pages/become-station/become-station.component';
import {BookComponent} from '@app/core/pages/book/book.component';
import {CreditsComponent} from '@app/core/pages/credits/credits.component';
import {DataProtectionComponent} from '@app/core/pages/data-protection/data-protection.component';
import {DonationsComponent} from '@app/core/pages/donations/donations.component';
import {HowItWorksComponent} from '@app/core/pages/how-it-works/how-it-works.component';
import {ImprintComponent} from '@app/core/pages/imprint/imprint.component';
import {IndexComponent} from '@app/core/pages/index/index.component';
import {NotFoundComponent} from '@app/core/pages/not-found/not-found.component';
import {OfflineComponent} from '@app/core/pages/offline/offline.component';
import {PressComponent} from '@app/core/pages/press/press.component';
import {ProfileComponent} from '@app/core/pages/profile/profile.component';
import {TermsOfUseComponent} from '@app/core/pages/terms-of-use/terms-of-use.component';
import {SharedModule} from '@app/shared/shared.module';
import {CookieService} from 'ngx-cookie-service';


registerLocaleData(localeDe);


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AdfcComponent,
    ActivateComponent,
    ProfileComponent,
    BookComponent,
    BecomeStationComponent,
    CreditsComponent,
    DataProtectionComponent,
    DonationsComponent,
    HowItWorksComponent,
    ImprintComponent,
    IndexComponent,
    NotFoundComponent,
    OfflineComponent,
    PressComponent,
    TermsOfUseComponent,
  ],
  imports: [
    CoreRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
  ],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
