export class User{
    public name:string;
    public surname:string;

    constructor(private n:string,private s:string){
        this.name = n;
        this.surname = s;
    }

    public getName():string{
        return this.name;
    }
    public getSurname():string{
        return this.surname;
    }
}