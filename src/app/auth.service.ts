export class AuthService {
    // This is just a dummy component for demo purposes.
    loggedIn = false;

    isAuthenticated() {
        // This fakes taking a bit of time to log in
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=> {
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}