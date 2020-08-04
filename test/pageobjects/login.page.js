const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('input[type="email"]') }
    get inputPassword () { return $('input[type="Password"]') }
    get btnSubmit () { return $('button=Sign in') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
