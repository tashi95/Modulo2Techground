const LoginPage = require('../pageobjects/login.page');
const NavigationPage= require('../pageobjects/navigation.page');
const DashboardPage= require('../pageobjects/dashboard.page');


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goTosignIn();
        LoginPage.login('joseth.castro@ucreativa.com','123456789');
        browser.pause(5000);
        expect(browser).toHaveUrl('https://demo.realworld.io/#/')
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();

  });
        
    
        it ('should display empty dashboard',()=>
        {
            browser.pause(2000);
            expect(DashboardPage.getYourFeed()).toHaveAttribute('class','nav-link active')
        });

        it ('should open the global tap',()=>
        {
        
            DashboardPage.getGlobalFeedTap().click();
            browser.pause(10000);
            console.log('HOLA SIZE ' + DashboardPage.getArticleList().lenght);
           
         expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active',{message:'Not active tap!'});
         //expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('height',42);
         expect(DashboardPage.getGlobalFeedTap()).toBeClickable();
         expect(DashboardPage.getArticleList()).toBeElementsArrayOfSize({eq:10});
        // expect(DashboardPage.getGlobalFeedTap()).toBeSelected(); para checkbox
        // expect(DashboardPage.getYourFeed()).toHaveAttribute('class','nav-link active')

        
        });
   
    });   


