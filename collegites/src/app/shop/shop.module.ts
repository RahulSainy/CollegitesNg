import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { SharedModule } from "../Shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { CoreModule } from "./core/core.module";
import { ShopRoutingModule } from "./shop-routing.module";
import { ShopComponent } from "./shop.component";
import { ShoppingModule } from "./shopping/shopping.module";


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ShopRoutingModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
})
export class AppModule { }
