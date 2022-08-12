import { action, computed, makeObservable, observable } from "mobx";

export class CssHome{
    isHideSidebar : boolean = false;
    isAdminUser : boolean = false;
    loginUser: string | null = null;

    constructor(){
        makeObservable(this,{
            isHideSidebar : observable,
            loginUser: observable,
            isAdminUser: observable,
            setIsHideSidebar: action,
            setIsAdminUser: action,
            getLoginUser : computed,
            getIsAdminUser : computed,
        });
    }

    setIsHideSidebar(){
        this.isHideSidebar = !this.isHideSidebar;
    }

    setLoginUser(user: string | null){
        this.loginUser = user;
    }

    get getLoginUser () : string | null{
        return this.loginUser;
    }

    setIsAdminUser(value: boolean){
        this.isAdminUser = value;
    }

    get getIsAdminUser () : boolean | null{
        if (localStorage.getItem('is_admin') === 'true'){
            return true;
        }
        else{
            return false;
        }   
    }
}

export default new CssHome();
