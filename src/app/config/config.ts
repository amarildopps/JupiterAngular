import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig{

    private _config: {[key: string]: string};
    
    constructor(){
        this._config = {
            PathAPI: 'https://localhost:44345/api/',
            UrlDowload: 'https://localhost:44345/api/uploadfile/download/',
        };
    }

    get setting(): { [key: string]: string} {
        return this._config;
    }

    get(key: any){
        return this._config[key];
    }
}