const LoginPage = require('../pageobjects/login.page');
const NavigationPage= require('../pageobjects/navigation.page');
const DashboardPage= require('../pageobjects/dashboard.page');
<<<<<<< HEAD
const ArticleDetail= require('../pageobjects/articleDetail.page');
const wait= require('../helpers/waits');
=======
const user= require('../data/users');
const loginPage = require('../pageobjects/login.page');
>>>>>>> clase8


describe('My Login application', () => {

    before(()=>
    {
       // browser.url('https://demo.realword.io/#/login')
        console.log('antes de todos los test')
    })
    beforeEach(()=>
    {
        console.log('antes de cada test')
    })
    after(()=>{

        console.log('despues de todos los test')
    })


    it('should login with valid credentials', () => {
       
        NavigationPage.goTosignIn();
     //   LoginPage.login('joseth.castro@ucreativa.com','123456789');

        loginPage.login(user[0].email,user[0].password)
        browser.pause(5000);
        browser.setTimeout({'pageLoad':500})//para que la pagina cargue
        browser.setTimeout({'implicit':50})//para que espere x un elemento

     wait.waitUntilElementIsDisplay(DashboardPage.getNoArticlesLabel());
      
        expect(browser).toHaveUrl('https://demo.realworld.io/#/')
        //expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();


  });
        
        it ('should display empty dashboard',()=>
        {
            browser.pause(2000);
            expect(DashboardPage.getYourFeed()).toHaveAttribute('class','nav-link active')
        });

        it ('should open the global tap',()=>
        {
            browser.saveScreenshot('/Users/joseth.castro/Documents/Modulo2Techground/test/resources/sc/testcase2.png')
            DashboardPage.getGlobalFeedTap().click();
            browser.setTimeout({'implicit':1000})
            console.log('HOLA SIZE ' + DashboardPage.getArticleList().lenght);
           
         expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active',{message:'Not active tap!'});
         //expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('height',42);
         expect(DashboardPage.getGlobalFeedTap()).toBeClickable();
         expect(DashboardPage.getArticleList()).toBeElementsArrayOfSize({eq:10});
        // expect(DashboardPage.getGlobalFeedTap()).toBeSelected(); para checkbox
        // expect(DashboardPage.getYourFeed()).toHaveAttribute('class','nav-link active')

        
        });

        it ('should open read more',()=>
        {
            DashboardPage.getReadMoreAnchor().click();
            browser.pause(5000);
            
        });

        it ('add description',()=>
        {
            browser.setTimeout({'implicit': 10000});
            ArticleDetail.getDescriptionTextBox().setValue('Hola')
            
        });
       
       
   
    });   


