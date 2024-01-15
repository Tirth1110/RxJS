import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './Promise/Promise.component';
import { AsyncAwaitPromiseComponent } from './async-await-promise/async-await-promise.component';
import { ObservableComponent } from './Observable/Observable.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomObservableComponent } from './Observable/Custom-Observable/Custom-Observable.component';
import { PluckComponent } from './Observable/Pluck/Pluck.component';
import { FilterComponent } from './Observable/filter/filter.component';
import { TapComponent } from './Observable/tap/tap.component';
import { TakeComponent } from './Observable/take/take.component';
import { RetryComponent } from './Observable/retry/retry.component';
import { DebounceTimeComponent } from './Observable/debounce-time/debounce-time.component';
import { SubjectAndBehaviorSubjectComponent } from './Observable/subject-and-behavior-subject/subject-and-behavior-subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaySubjectComponent } from './Observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Observable/async-subject/async-subject.component';
import { MergeComponent } from './Observable/merge/merge.component';
import { ConcatComponent } from './Observable/concat/concat.component';
import { MergeMapComponent } from './Observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './Observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './Observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './Observable/switch-map2/switch-map2.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './Observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './Observable/share-replay/share-replay.component';
import { CombineLatestAndWithLatestFromComponent } from './Observable/combine-latest-and-with-latest-from/combine-latest-and-with-latest-from.component';
import { ZipAndForkJoinComponent } from './Observable/zip-and-fork-join/zip-and-fork-join.component';
import { CatchErrorAndThrowErrorComponent } from './Observable/catch-error-and-throw-error/catch-error-and-throw-error.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    AsyncAwaitPromiseComponent,
    ObservableComponent,
    CustomObservableComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectAndBehaviorSubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    SwitchMap2Component,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestAndWithLatestFromComponent,
    ZipAndForkJoinComponent,
    CatchErrorAndThrowErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
