import { Component, WritableSignal, signal } from '@angular/core';
import { useSync } from 'adax-angular';
import { getResult } from '../facade';
@Component({
  selector: 'result-panel',
  standalone: true,
  template: `
  <div
    class="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 border-slate-300 my-2"
  >
    <div class="p-2 text-3xl">
      {{ data().winnerName }}: ({{ data().winnerScore }})
    </div>
    <div class="p-2 text-3xl">
      {{ data().runnerUpName }}: ({{ data().runnerUpScore }})
    </div>
  </div>
  `,
})
export class ResultPanel {
  data: WritableSignal<ReturnType<typeof getResult>> = signal(getResult());
  cleanup: any;
  ngOnInit() {
    this.cleanup = useSync((x) => {
      this.data.set(x.data);
    }, getResult);
  }
  ngOnDestroy() {
    this.cleanup && this.cleanup();
  }
}
