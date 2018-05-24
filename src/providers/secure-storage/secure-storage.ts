import { Injectable } from '@angular/core';
import { SecureStorage,SecureStorageObject } from '@ionic-native/secure-storage';

@Injectable()
export class SecureStorageProvider {

  public storage:SecureStorageObject;
  constructor(private secureStorage:SecureStorage) {
    this.secureStorage = new SecureStorage();
       //Creo lo storage Object
    this.secureStorage.create('storageProva').then((storage:SecureStorageObject)=>{
      console.log("Storage is ready");
    },
    (error)=>{
      console.log(error);
    });
  }

  setKey(value) {
   
    console.log('set called');
    console.log(this.secureStorage);

    this.storage.set('mytoken', value)
      .then(
        data => console.log(data),
        error => console.log(error)
      ).catch((error)=>{
        console.log(error);
      });

}
  getKey(value) {
    console.log('get called');

    this.storage.get('mytoken')
      .then(
        data => {
          value = data;
        },
        error => {
          console.log(error)
        }
      ).catch((error)=>{
        console.log(error);
      });
  }

  

}
