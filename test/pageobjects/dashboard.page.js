const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dashboardPage extends Page {

    get noArticleslabel(){ return $('div=No articles are here... yet.')}
    get yourFeedTap(){return $('.nav-link=Your Feed')}
    get globalFeedTap(){return $('.nav-link=Global Feed')}
    get articlesRows(){return $('<article-list />').$$('<article-preview />')}

    getNoArticlesLabel()
    {
        return this.noArticleslabel;
    }
    getYourFeed()
    {
        return this.yourFeedTap;
    }
    getGlobalFeedTap()
    {
        return this.globalFeedTap;
    }
    getArticleList()
    {
        return this.articlesRows;
    }

}

    module.exports = new dashboardPage();
    