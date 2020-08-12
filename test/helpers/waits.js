class waits 
{
    waitUntilElementIsDisplay(element)
    {
        browser.waitUntil(
            ()=> element.isDisplayedInViewport(),
            {
                timeout: 10000,
                timeoutMsg: element + 'was not found in after 5s'
            }
            
            ) ;


    }

}
module.exports= new waits();