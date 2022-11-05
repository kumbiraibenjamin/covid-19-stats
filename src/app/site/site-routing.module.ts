import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SiteContainerComponent } from "./components/site-container/site-container.component";

const routes: Routes = [
    { path: "", component: SiteContainerComponent }
]
    ;
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }