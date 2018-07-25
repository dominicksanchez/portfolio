import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SimplePageScrollModule} from 'ng2-simple-page-scroll';

// COMPONENTS
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { WorkComponent } from './components/work/work.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

// SERVICES
import { PortfolioService } from './services/portfolio.service';
import { ProfileService } from './services/profile.service';
import { AboutService } from './services/about.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    HeaderComponent,
    EducationComponent,
    WorkComponent,
    SkillComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SimplePageScrollModule.forRoot(),
    ServiceWorkerModule.register('/portfolio/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PortfolioService,
    ProfileService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
