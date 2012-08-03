$(document).ready(function() {
  $('#home_search_input').keydown(function(event) {
    if (event.which == 13) {
      var searchTarget = $(this).val()
      $('#main').html("<div class=\"search_results_wrapper container\"><h1>Search results</h1><div class=\"search_results\"></div></div>");
      
      homePage.search(searchTarget);
      if (homePage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/" class="search_result_link">Homepage</a>');
      };
      
      companyOverview.search(searchTarget)
      if (companyOverview.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/company-overview" class="search_result_link">Company Overview</a>');
      };

      if ($('.search_results').text().length == 0 ) {
        $('.search_results').html('<div class="no_result">' + 'No result for ' + searchTarget + '</div>');
      };
        
    };
  });
  
  var homePage = 
    "ROC|Bridge Partners, LLC ROC|Bridge is registered with the SEC as an investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. Our activities since 1991 have included the acquisition, management and optimization of over $1.3 billion of real estate in more than 110 assets, mostly concentrated in the value added and stabilized multifamily sectors and in selected commercial office and other assets. Our long track record of success has created a vibrant network of relationships within the government, banking and real estate industries which provide us with attractive deal flow and opportunities to invest capital. We have the capability to effectively evaluate a wide variety of real estate investments from core to value-add and opportunistic distressed. ROC|Bridge believes that significant value is created through property management to optimize the financial and operational profile of our assets. Our real estate holdings, consisting of over 7,200 apartment units and 1.1 million square feet of office space, are managed by our in-house property management affiliate of over 550 personnel across the United States. These professionals include 54 property managers, 120 leasing agents and over 320 operations and maintenance personnel. ROC|Bridge manages two value added funds incepted in 2009 and 2012 respectively. The investment thesis of these funds is to invest, for the benefit of our LPs, in multifamily and selective commercial office assets acquired at a significant discount to replacement value. We strive to add value to those assets through superior property management including capital investment, leasing, operations, maintenance, and capital structure to optimize prior to monetization at a profit. We believe that the U.S. real estate market, especially in the multifamily and commercial office sectors, offers some of the most compelling values and prospective returns in the world today."
  
  var companyOverview =
    "ROC|Bridge Partners, LLC (“ROC|Bridge”), is a registered investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. We purchase real property and real estate backed loans at attractive valuations, build significant value through internal and affiliated operational expertise, and exit such investments within a pre-determined three to four year period. Our real estate investment and operating expertise, coupled with the opportunities afforded by current conditions in the U.S. real estate market, have created strong returns for our partners and investors."
  
});
