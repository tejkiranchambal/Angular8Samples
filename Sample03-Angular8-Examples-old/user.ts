export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topics: string,
    public timePreference: string,
    public subscribe: boolean
  ){}

}
