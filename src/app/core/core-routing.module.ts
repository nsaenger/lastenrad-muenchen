import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
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


export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'activate/:id',
    component: ActivateComponent,
  },
  {
    path: 'home',
    component: IndexComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'become-station',
    component: BecomeStationComponent,
  },
  {
    path: 'adfc',
    component: AdfcComponent,
  },
  {
    path: 'donations',
    component: DonationsComponent,
  },
  {
    path: 'press',
    component: PressComponent,
  },
  {
    path: 'credits',
    component: CreditsComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent,
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    urlUpdateStrategy: 'eager',
  })],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
