import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

    constructor() { }

    /**
     * Return cookie value.
     * 
     * @param cookieName - name of the cookie
     * @returns - value of the cookie
     */
    public getCookie(cookieName: string): string[] {

        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            if (cookie.includes(cookieName)) {
                //console.log(cookie.split('=')[1], cookieName);
                var cookie_value = cookie.split('=')[1];
                return cookie_value.split(',');
            }
        }
        return [];
    }
  
    /**
     * Set a new or replace existing cookie.
     * 
     * @param name - name of the cookie
     * @param value - value of the cookie
     */
    public setCookie(name: string, value: string[]) {

        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (365*24*60*60*1000));
        document.cookie = name+"="+value+";expires="+expireDate.toUTCString();
    }

    // /**
    //  * Checks whether a cookie has no value.
    //  * 
    //  * @param name - name of the cookie
    //  * @returns - whether or not the cookie is empty
    //  */
    // public isEmpty(name: string): boolean {

    //     const cookie = this.getCookie(name);

    //     if (cookie.length === 0 || cookie[0] === '') {
    //         return true;
    //     }
    //     return false;
    // }
}
