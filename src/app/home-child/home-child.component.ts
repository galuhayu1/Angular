import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rekan } from '../model/rekan';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent {

  tanggal = new Date();
  dataKosong: string= "data kosong"

  @Input() count!: number;
  @Input() rekanan!: Rekan[];

  @Output() incrementEvent = new EventEmitter<number>();
  increment(penambah: number){
    this.incrementEvent.emit(penambah);
    console.log("penambah")
  }

}
