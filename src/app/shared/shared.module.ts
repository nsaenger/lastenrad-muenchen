import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {CheckboxComponent} from '@app/shared/components/checkbox/checkbox.component';
import {DayComponent} from '@app/shared/components/day/day.component';
import {DotsComponent} from '@app/shared/components/dots/dots.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {ModalComponent} from '@app/shared/components/modal/modal.component';
import {PageSectionComponent} from '@app/shared/components/page-section/page-section.component';
import {RegisterComponent} from '@app/shared/components/register/register.component';
import {ScrollToTopComponent} from '@app/shared/components/scroll-to-top/scroll-to-top.component';
import {SidebarComponent} from '@app/shared/components/sidebar/sidebar.component';
import {StationComponent} from '@app/shared/components/station/station.component';
import {UICarouselItemComponent} from '@app/shared/components/ui-carousel-item/ui-carousel-item.component';
import {UICarouselComponent} from '@app/shared/components/ui-carousel/ui-carousel.component';
import {UserCardComponent} from '@app/shared/components/user-card/user-card.component';
import {SwiperDirective} from '@app/shared/directives/swiper.directive';
import {UILazyloadDirective} from '@app/shared/directives/ui-lazy-load.directive';
import {HtmlPipe} from '@app/shared/pipes/html/html.pipe';
import {SafePipe} from '@app/shared/pipes/safe.pipe';


@NgModule({
  declarations: [
    SwiperDirective,
    UILazyloadDirective,
    SafePipe,
    HtmlPipe,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageSectionComponent,
    UICarouselComponent,
    UICarouselItemComponent,
    DotsComponent,
    ScrollToTopComponent,
    ModalComponent,
    UserCardComponent,
    StationComponent,
    DayComponent,
    CheckboxComponent,
    RegisterComponent,
  ],
  entryComponents: [
    UserCardComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressBarModule,
    CoreRoutingModule,
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressBarModule,

    SwiperDirective,
    UILazyloadDirective,
    SafePipe,
    HtmlPipe,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageSectionComponent,
    UICarouselComponent,
    UICarouselItemComponent,
    DotsComponent,
    ScrollToTopComponent,
    ModalComponent,
    UserCardComponent,
    StationComponent,
    DayComponent,
    CheckboxComponent,
    RegisterComponent,
  ],
})
export class SharedModule {
}
