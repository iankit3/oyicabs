export class Driver {
  constructor(
    public id: number,
    public name: string,
    public phone: number,
    public gender: string,
    public email: string,
    public vehicle_info: string,
    public vehicle_type: string,
    public allowed_passenger:number,
    public vehicle_registration: string,
    public vehicle_license: string,
    public rate: number,
    public password:string,
    //public alterEgo?: string
  ) {  }
}
