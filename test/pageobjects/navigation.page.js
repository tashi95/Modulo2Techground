const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class navigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink() { return $('a=Sign in') }
    get signUpLink () { return $('*=up') }

    goTosignIn()
        {
            this.signInLink.click();
        }
    getConduitText()
        {
        return this.conduitLabel.getText();
        }

    open () 
        {
            return super.open('');
        }
 
  
}

module.exports = new navigationPage();
