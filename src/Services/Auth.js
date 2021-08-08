/* eslint-disable class-methods-use-this */
class Auth {
    login(callback) {
        localStorage.setItem('auth', true);
        callback();
    }

    logout(callback) {
        localStorage.clear();
        callback();
    }

    isAuth() {
        return localStorage.getItem('auth');
    }
}

export default new Auth();
