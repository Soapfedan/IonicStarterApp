import {Injectable} from "@angular/core";
import { Storage } from "@ionic/storage";
import { User } from "../user";


@Injectable()
export class AuthService {
    ret:boolean;

    constructor(private storage:Storage){

    }
    
    isLogged(){
        let ret=false;
        return new Promise((resolve,reject)=>{
            this.storage.get('user').then((value) => {
            console.log("Ehi positivo "+value.name);
            resolve(true);
          }).catch(() => {
            console.log("Ehi negativo");
            reject(false);
          });
        })
        
        
    }

    getUser(){
            return this.storage.get('user');
    }

    storeUser(user:User){
        console.log("Sto settando l'utente "+user.name+" "+user.surname);
        this.storage.set('user',user).then(
            function(){
                console.log("Ok l'ho settato correttamente");
            }
        ).catch(
            function(){
                console.log("Non sono riuscito a settare l'utente")
            }
        );
    }

    clearUser(){
        console.log("Arrivederci utente");
        this.storage.remove('user').then(
            function(){
                console.log("Ok l'ho cancellato correttamente");
            }
        ).catch(
            function(){
                console.log("Non sono riuscito a cancellare l'utente")
            }
        );;
    }
    


}