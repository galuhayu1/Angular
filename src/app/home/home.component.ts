import { Component, OnInit } from '@angular/core';
import { RekanService } from '../service/rekan.service';
import { Rekan, RekanModel } from '../model/rekan';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 rekanan: Rekan[] = [];
 count: number = 1;
 inc(value: number){
   this.count = this.count + value;
 }

 modelRekan = new RekanModel('','','','')
 submitted = false;

 constructor(private rekanService: RekanService, private location: Location){}

 ngOnInit(): void {
   this.rekanan = []
   this.getRekanan()
 }

 onSubmit(){
   this.submitted = true;
   this.addRekan()
 }

 getRekanan(): void {
   this.rekanService.getRekanan()
     .subscribe(rekanan => this.rekanan = rekanan);
 }

 goBack(): void {
   this.location.back()
 }

 validateNo(e: any): boolean{
   const charCode = e.which ? e.which: e.keyCode;
   if(charCode > 31 && (charCode < 48 || charCode > 57)){
     return false
   }
   return true
 }

 addRekan(
   name :string=this.modelRekan.name,
   skill: string = this.modelRekan.skill, 
   phone: string = this.modelRekan.phone,
   deskripsi:string=this.modelRekan.deskripsi
   ): void {
    name = name.trim();
     if(!name) {return}
     this.rekanService.addRekanService({name,skill, phone,deskripsi} as Rekan)
       .subscribe(rekan => {
         this.rekanan.push(rekan)
       })
 }
}
