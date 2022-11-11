import { Component, OnInit } from '@angular/core';
import { Rekan } from '../model/rekan';
import {ActivatedRoute} from '@angular/router';
import { RekanService } from '../service/rekan.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rekan-detail',
  templateUrl: './rekan-detail.component.html',
  styleUrls: ['./rekan-detail.component.css']
})
export class RekanDetailComponent implements OnInit {

  rekan: Rekan | undefined;

  constructor(
    private rekanService: RekanService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRekan()
  }

  getRekan(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id')); //"2"
    this.rekanService.getRekan(idParams)
      .subscribe(a => this.rekan = a)
  }

  goBack(): void {
    this.location.back()
  }
}
