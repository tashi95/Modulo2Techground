const LoginPage = require('../pageobjects/login.page');
const NavigationPage= require('../pageobjects/navigation.page');


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goTosignIn();
        LoginPage.login('Hola','123');
        browser.pause(5000);
 // console.log(NavigationPage.getConduitText());
 //       
    });
});


