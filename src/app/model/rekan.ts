export interface Rekan {
    id: number;
    name:string;
    skill: string;
    phone: string;
    deskripsi: string;
  }
  
  export class RekanModel {
    constructor(
      public name:string,
      public skill: string,
      public phone: string,
      public deskripsi: string
    ){ }
  }