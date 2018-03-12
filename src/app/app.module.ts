import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { IndexPage } from '../pages/index/index';
import { MenuPage } from '../pages/menu/menu';
import { DescriptionPage } from '../pages/description/description';
import { ConceptsPage } from '../pages/concepts/concepts';
import { EtiquettePage } from '../pages/etiquette/etiquette';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    IndexPage,
    MenuPage,
    DescriptionPage,
    ConceptsPage,
    EtiquettePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    IndexPage,
    MenuPage,
    DescriptionPage,
    ConceptsPage,
    EtiquettePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
