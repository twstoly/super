import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { CaroselComponent } from './Components/carosel/carosel.component';
import { FormComponent } from './Components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainControlComponent } from './Components/main-control/main-control.component';
import { CountPipe } from './Pipes/count.pipe';
import { DeleteComponent } from './Components/delete/delete.component';
import { QuoteDetailsComponent } from './Components/quote-details/quote-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuoteComponent } from './Components/quote/quote.component';
import { UpvotesDirective } from './Directives/upvotes/upvotes.directive';
import { BackgroundDirective } from './Directives/background/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CaroselComponent,
    FormComponent,
    MainControlComponent,
    BackgroundDirective,
    CountPipe,
    DeleteComponent,
    QuoteDetailsComponent,
    FooterComponent,
    QuoteComponent,
    UpvotesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






