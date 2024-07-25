import {
  Component,
  Input,
  WritableSignal,
  signal,
  SimpleChanges,
} from '@angular/core';
import { trigger } from 'adax';
import { useSync } from 'adax-angular';
import { getMood, voteFor } from '../facade';
@Component({
  selector: 'fans-group',
  standalone: true,
  template: `
  <div class="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 my-2">
    <h1>{{ name }}  FANS: {{ data()?.mood}}</h1>
    <button
      (click)="vote()"
      class="
        bg-blue-300
        mt-4
        px-4
        py-2
        rounded-lg
        border border-slate-500
        shadow-2xl
      "
    >
      Click to Vote
    </button>
  </div>
  `,
})
export class FansGroup {
  @Input() name!: string;
  data: WritableSignal<ReturnType<typeof getMood> | undefined> =
    signal(undefined);
  cleanup: any;
  ngOnChanges(changes: SimpleChanges) {
    this.cleanup && this.cleanup();
    this.cleanup = useSync((x) => this.data?.set(x.data), getMood, {
      name: this.name,
    });
  }
  ngOnDestroy() {
    this.cleanup && this.cleanup();
  }
  vote = () => trigger(voteFor, { name: this.name });
}
