import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeEditComponent } from "./challenge-edit.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/app/shared/shared.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule, 
        NativeScriptRouterModule.forChild([{path: '', component: ChallengeEditComponent}]), 
        SharedModule,
        NativeScriptFormsModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class ChallengeEditModule {}