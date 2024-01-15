import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './Promise/Promise.component';
import { ObservableComponent } from './Observable/Observable.component';
import { ListComponent } from './Observable/list/list.component';
import { FromEventComponent } from './Observable/from-event/from-event.component';
import { IntervalComponent } from './Observable/interval/interval.component';
import { OfFromComponent } from './Observable/of-from/of-from.component';
import { ToArrayComponent } from './Observable/ToArray/ToArray.component';
import { CustomObservableComponent } from './Observable/Custom-Observable/Custom-Observable.component';
import { MapComponent } from './Observable/map/map.component';
import { PluckComponent } from './Observable/Pluck/Pluck.component';
import { FilterComponent } from './Observable/filter/filter.component';
import { TapComponent } from './Observable/tap/tap.component';
import { TakeComponent } from './Observable/take/take.component';
import { RetryComponent } from './Observable/retry/retry.component';
import { DebounceTimeComponent } from './Observable/debounce-time/debounce-time.component';
import { SubjectAndBehaviorSubjectComponent } from './Observable/subject-and-behavior-subject/subject-and-behavior-subject.component';
import { ReplaySubjectComponent } from './Observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Observable/async-subject/async-subject.component';
import { MergeComponent } from './Observable/merge/merge.component';
import { ConcatComponent } from './Observable/concat/concat.component';
import { MergeMapComponent } from './Observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './Observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './Observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './Observable/switch-map2/switch-map2.component';
import { ExhaustMapComponent } from './Observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './Observable/share-replay/share-replay.component';
import { CombineLatestAndWithLatestFromComponent } from './Observable/combine-latest-and-with-latest-from/combine-latest-and-with-latest-from.component';
import { ZipAndForkJoinComponent } from './Observable/zip-and-fork-join/zip-and-fork-join.component';
import { CatchErrorAndThrowErrorComponent } from './Observable/catch-error-and-throw-error/catch-error-and-throw-error.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce-time-and-distinct-until-changed', component: DebounceTimeComponent },
      { path: 'subject-and-behavior-subject', component: SubjectAndBehaviorSubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergemap', component: MergeMapComponent },
      { path: 'concatmap', component: ConcatMapComponent },
      { path: 'switchmap', component: SwitchMapComponent },
      { path: 'switchmap2', component: SwitchMap2Component },
      { path: 'exhaust-map', component: ExhaustMapComponent },
      { path: 'share-replay', component: ShareReplayComponent },
      { path: 'combine-latest-and-with-latest-from', component: CombineLatestAndWithLatestFromComponent },
      { path: 'zip-and-forkjoin', component: ZipAndForkJoinComponent },
      { path: 'catch-and-throw', component: CatchErrorAndThrowErrorComponent },
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
