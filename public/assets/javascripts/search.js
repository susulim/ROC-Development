$(document).ready(function() {
  $('#home_search_input, #page_search_cage input').keydown(function(event) {
    if (event.which == 13) {
      var searchTarget = $(this).val().toLowerCase()
      $('#main').html("<div class=\"search_results_wrapper container\"><h1>Search results</h1><div class=\"search_results\"></div></div>");
      
      homePage.search(searchTarget);
      if (homePage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/" class="search_result_link">Homepage</a>');
      };
      
      companyOverview.search(searchTarget)
      if (companyOverview.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/company-overview" class="search_result_link">ROC|Bridge Partners, LLC ("ROC|Bridge")</a>');
      };
      
      bpmPage.search(searchTarget)
      if (bpmPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/c-overview/bpm" class="search_result_link">Bridge Property Management, LLC ("BPM")</a>');
      };

      bsaiPage.search(searchTarget)
      if (bsaiPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/c-overview/bsai" class="search_result_link">Bridge Stabilized Apartment Investments, LLC ("BSAI")</a>');
      };
      
      teamPage.search(searchTarget)
      if (teamPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/senior-management" class="search_result_link">Senior Management</a>');
      };
      
      serviceProviders.search(searchTarget)
      if (serviceProviders.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/service-providers/service" class="search_result_link">Service Providers</a>');
      };
      
      philanthropyPage.search(searchTarget)
      if (philanthropyPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/philanthropy/philanthropy" class="search_result_link">Philanthropy</a>');
      };
      
      investmentOverview.search(searchTarget)
      if (investmentOverview.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/investment-management/overview" class="search_result_link">Investment Management Overview</a>');
      };
      
      missionPage.search(searchTarget)
      if (missionPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/investment-management/mission" class="search_result_link">Our Mission</a>');
      };
      
      opportunityPage.search(searchTarget)
      if (opportunityPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/investment-management/the-opportunity" class="search_result_link">The Opportunity</a>');
      };
      
      caseStudies.search(searchTarget)
      if (caseStudies.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/investment-management/case-studies" class="search_result_link">Case Studies</a>');
      };
      
      propertiesOverview.search(searchTarget)
      if (propertiesOverview.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/property-management/overview" class="search_result_link">Property Management Overview</a>');
      };
      
      currentPortfolio.search(searchTarget)
      if (currentPortfolio.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/property-management/portfolio" class="search_result_link">Current Portfolio</a>');
      };
      
      monetizedProperties.search(searchTarget)
      if (monetizedProperties.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/property-management/monetized-properties" class="search_result_link">Monetized Properties</a>');
      };
      
      contactPage.search(searchTarget)
      if (contactPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/contact/contact-us" class="search_result_link">Contact Us</a>');
      };
      
      newsPage.search(searchTarget)
      if (newsPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/news/roc-acquires-opportunistic-asset" class="search_result_link">News & Updates</a>');
      };
      
      legalPage.search(searchTarget)
      if (legalPage.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/legal" class="search_result_link">Legal</a>');
      };

      if ($('.search_results').text().length == 0 ) {
        $('.search_results').html('<div class="no_result">' + 'No result for ' + searchTarget + '</div>');
      };
        
    };
  });
  
  var legalPage =
    "legal terms of use terms of services advice prohibited use international use governing law and forum limitation of liability disclaimer and indemnity password and security notification".toLowerCase()
  
  var newsPage =
    "news updates events conferences conference".toLowerCase()
  
  var contactPage =
    "contact us address office head office property aquisition robert morse".toLowerCase()
  
  var monetizedProperties =
    "monetized P]properties ROC|Bridge has a predetermined holding period of between 3 – 4 years for its properties. Below are some of the properties which we have recently monetized. Multifamily Property	City	Stat	Units Ladera Palms Apts	Fort Worth	Texas	784 Cottages at McMillen Park	Fort Wayne	Indiana	216 Office & Retail Property	City	Stat	Square Feet Big Lots! Midbox Retail	Bolingbrook	Illinois	33,145 Marathon Medical Office	Los Angelas	California	31,767".toLowerCase()
  
  var currentPortfolio =
    "current portfolio BPM manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC|Bridge’s privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. Our property management division employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on-site personnel providing property maintenance and operations. Multifamily Property	City	State	Units Indigo on Forest	Dallas	Texas	1,217 Villages at Gateway	Denver	Colorado	760 Chelsea Park Village	Aurora	Colorado	600 Park at Lakeside	Houston	Texas	592 Promenade at Towne	Aurora	Colorado	511 Warwick Square	Santa Ana	California	500 Maple Hills / Royal	Kansas City	Missouri	455 The Arbors at Eastland	Bloomington	Illinois	449 La Jolla Champions	Houston	Texas	448 Torrey Ridge Apartments	Fresno	California	418 One Dartmouth Place	Denver	Colorado	418 Tudor Heights	Omaha	Nebraska	418 Mirabella Apartments	Tucson	Arizona	410 Barclay Club	Kansas City	Missouri	400 Valencia Crossing	Mesa	Arizona	397 Ridge at Chestnut	Kansas City	Missouri	388 Sandpiper	Westminster	Colorado	358 Whispering Oaks	San Antonio	Texas	346 Oak Creek Apartments	Arlington	Texas	336 Briarwood North	Denver	Colorado	322 Autumn Chase	Houston	Texas	320 Monterra	Albuquerque	New Mexico	312 Windmill	Colorado Springs	Colorado	304 Republic Hollow Tree	Houston	Texas	280 West Town Court	Phoenix	Arizona	274 Sun Creek Village	Albuquerque	New Mexico	267 Arvada Village	Arvada Green	Colorado	264 Autumn Lakes	Houston	Texas	252 Tuscany Cove	West Valley City	Utah	252 Woodglen Village	Houston	Texas	250 Tuscany Cove	Dallas	Texas	244 Villa Sierra	El Paso	Texas	243 Mission Falls	Houston	Texas	228 La Entrada	Albuquerque	New Mexico	216 Cheyenne Crest	Colorado Springs	Colorado	208 Kings Manor	Kansas City	Missouri	207 Bridges at CitiFront	Salt Lake City	Utah	204 Kings Quarters	Kansas City	Missouri	202 Evergreen Point	Houston	Texas	197 Andorra	Indio	California	186 Pinewood	Seattle	Washington	180 San Marin Apartments	Tucson	Arizona	176 Park Meadows	Kansas City	Missouri	172 Oakbrook Terrace Apartments	Topeka	Kansas	170 CitiFront	Salt Lake City	Utah	155 Wyndchase	El Paso	Texas	150 University Villa	Provo	Utah	126 Arvada Green	Arvada Green	Colorado	108 Sungate	Albuquerque	New Mexico	95 Rancho Verde	Albuquerque	New Mexico	65 Axis 739	Salt Lake City	Utah	60 Patrick Lofts	Salt Lake City	Utah	34 Presidents Corner	Dallas	Texas	100 Acacia Lofts	Casa Grande	Arizona	28units 152lotsOffice & Retail Property	City	State	Square Feet Cherry Creek	Denver	Colorado	594,044 1700 W. Loop	Houston	Texas	272,113 Promenade Building	Dallas	Texas	221,404 Logan Tower	Denver	Colorado	69,784Other Property	City	State	Units Park Inn Hotel	Albuquerque	New Mexico	310 Rooms".toLowerCase()
  
  var propertiesOverview =
    "overview The majority of our properties are managed in-house by our property management affiliate. Currently, Bridge Property Management (“BPM”), manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC|Bridge’s privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. BPM employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on-site personnel providing property maintenance and operations. This in-house network is well versed with the real estate market within their respective local areas, allowing ROC|Bridge to provide objective assessments of potential investment opportunities and local intelligence (such as leasing activity, sub-market occupancy, valuation, employment, demographic trends, local redevelopment initiatives, capital improvement needs, and physical security issues).".toLowerCase()
  
  var caseStudies =
    "case studies The principals of ROC|Bridge have been adding value and optimizing multifamily and commercial office real estate investments since 1992. The principals possess an average of over 21 years' experience with a proven track record in all facets of real estate investment - including financing, development, management and operations. We have an extensive in-house team of over 550 full-time real estate professionals, in over 40 unique sub-markets across the U.S. who play an important role in the entire investment process - from underwriting, management and operations, and monetization. The case studies below provide a detailed summary of the analysis that goes into each investment and results achieved. Cherry Creek Corporate Office Denver, CO Indigo Apartments Dallas, TX Ladera Palms Apartments Fort Worth, TX Torrey Ridge Apartments Fresno, CA".toLowerCase()
  
  var opportunityPage =
    "The U.S. market is experiencing a “once in a generation” opportunity to acquire real estate assets in local markets with attractive growth characteristics at “bargain basement prices” not seen since the U.S. Savings and Loan crisis in the 1980s. The principals at ROC|Bridge are qualified and registered with the FDIC, HUD, the Federal National Mortgage Association and the Federal Home Loan Mortgage Corporation to buy discounted loans in government-directed auctions or through the duly appointed vendors. The principals also have significant relationships with banks, special loan servicers, bankruptcy courts, distressed funds and private investors whose troubled assets are also being liquidated at discounts. In the next two years, we expect the pace of these takeovers and liquidations to accelerate. Presently, ROC|Bridge has not only proven deal flow from these sources, but also the expertise and systems to cost-efficiently renovate, improve and monetize such assets. We believe that the opportunity to purchase assets at substantial discounts to replacement cost will continue over the next several years due to inventory from government agencies, failed and stressed financial institutions and other motivated sellers. Being a buyer of choice with a track record of efficiently analyzing and closing transactions, positions ROC|Bridge to profit from activity in the sector. In addition, the attractive valuation of property assets is further enhanced from the prospective of a non-U.S. investor, by the comparative weakness of the U.S. dollar. In fact, on a currency adjusted basis, comparable multifamily and commercial office assets in the U.S. often sell for less than 50%, and as much as 90% discount to similarly situated assets in Asia.".toLowerCase()
  
  var homePage = 
    "ROC|Bridge Partners, LLC ROC|Bridge is registered with the SEC as an investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. Our activities since 1991 have included the acquisition, management and optimization of over $1.3 billion of real estate in more than 110 assets, mostly concentrated in the value added and stabilized multifamily sectors and in selected commercial office and other assets. Our long track record of success has created a vibrant network of relationships within the government, banking and real estate industries which provide us with attractive deal flow and opportunities to invest capital. We have the capability to effectively evaluate a wide variety of real estate investments from core to value-add and opportunistic distressed. ROC|Bridge believes that significant value is created through property management to optimize the financial and operational profile of our assets. Our real estate holdings, consisting of over 7,200 apartment units and 1.1 million square feet of office space, are managed by our in-house property management affiliate of over 550 personnel across the United States. These professionals include 54 property managers, 120 leasing agents and over 320 operations and maintenance personnel. ROC|Bridge manages two value added funds incepted in 2009 and 2012 respectively. The investment thesis of these funds is to invest, for the benefit of our LPs, in multifamily and selective commercial office assets acquired at a significant discount to replacement value. We strive to add value to those assets through superior property management including capital investment, leasing, operations, maintenance, and capital structure to optimize prior to monetization at a profit. We believe that the U.S. real estate market, especially in the multifamily and commercial office sectors, offers some of the most compelling values and prospective returns in the world today.".toLowerCase()
  
  var companyOverview =
    "overview ROC|Bridge Partners, LLC (“ROC|Bridge”), is a registered investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. We purchase real property and real estate backed loans at attractive valuations, build significant value through internal and affiliated operational expertise, and exit such investments within a pre-determined three to four year period. Our real estate investment and operating expertise, coupled with the opportunities afforded by current conditions in the U.S. real estate market, have created strong returns for our partners and investors. The principals at ROC|Bridge possess an average of over 21 years’ experience with a proven track record in all facets of real estate investment. This includes financing, development, management and operations, and spans all major asset classes including multifamily apartment, condominium, hotel, industrial, office, single family residential, retail and storage. As a result of this expertise, the ROC|Bridge team has the capability to effectively evaluate a wide variety of real estate investments from core to value-add and opportunistic / distressed. Additionally, we have the “on the ground” resources to operate and add value to these assets. These capabilities enable ROC|Bridge to provide attractive investment returns while minimizing risks. We own, manage and operate, through our privately held real estate investment vehicles over 7,200 apartment units and over 1.1 million square feet of commercial office space, as well as select other real estate assets. We are in business to make money for our investors, we distribute our excess cash flow quarterly and we seek to maximize returns through the intensive management and optimization of our portfolio. Through our principals’ 21 year track record, ROC|Bridge seeks to leverage long-standing relationships within the commercial real estate and banking industries both domestically and internationally.".toLowerCase()
    
  var bpmPage =
    "Bridge Property Management, LLC is the group’s in-house property management operations with a 21 year track record. BPM manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC|Bridge’s privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. BPM employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on-site personnel providing property maintenance and operations. The network is well versed within their respective local markets, allowing ROC|Bridge to provide objective assessments of potential investment opportunities and local intelligence (such as leasing activity, sub-market occupancy, valuation, employment, demographic trends, local redevelopment initiatives, capital improvement needs, and physical security issues).".toLowerCase()
  
  var bsaiPage =
    "Bridge Stabilized Apartment Investments is the group’s joint venture platform. Featuring an investment track record that spans over 21 years, BSAI acquires stabilized cash-flowing multifamily rental properties in partnership with a select group of institutional equity partners. Its primary business is to identify, analyze and evaluate stabilized apartment investments that offer opportunities to add value through physical renovation, marketing/management enhancement and/or recurring expense rationalization. BSAI’s principals have completed more than 70 investments over its 21 year history. All BSAI potential acquisitions are offered to ROC|Bridge on a right of first refusal basis, and all “carried interest” earned by BSAI from investors that joint venture with the ROC|Bridge managed funds inure to such funds.".toLowerCase()
  
  var teamPage =
    "Senior Management Our principals have an average of 21 years’ experience and have extensive experience in all facets of real estate investment, financing, development, management and operations, spanning all major assets classes including multifamily apartment and condominium, hotel, industrial, office, single-family residential retail and storage. With over 550 real estate professionals in over 40 unique submarkets across the U.S., ROC|Bridge has a pool of resources that is well versed in local markets throughout the country. Name	Title	Group	Location Robert Morse	Chairman	Investment Management	New York Donaldson L. Hartman	Chief Executive Officer	Investment Management	Salt Lake City Christian V. Young	Chairman, Bridge Stabilized Apartment Investments, LLC	Joint Venture	Salt Lake City Danuel R. Stanger	Chief Investment Officer	Investment Management	Salt Lake City Dean A. Allara	Chief Operations Officer	Investment Management	San Francisco D. Russell Minnick	CEO & President, Bridge Stabilized Apartment Investments, LLC	Joint Venture	Salt Lake City Jonathan Slager	Managing Director, Asset Management Group	Investment Management	Salt Lake City Richard W. Stayner	President, Property Management	Property Management	Salt Lake City Winston Chiu	Director, Finance	Investment Management	Hong Kong Robert Hallock	Senior Vice President, Property Acquisitions	Investment Management	San Diego Kelley Hansen	Senior Vice President, Property Acquisitions	Investment Management	Salt Lake City John S. Pennington	Chief Compliance Officer	Investment Management	Salt Lake City Chad Briggs	Chief Financial Officer	Investment Management	Salt Lake City Adam O'Farrell	General Counsel	Investment Management	Salt Lake City Paul Hutchinson	Director, Business Development	Investment Management	Salt Lake City Richard G. Andrus	Director, Bridge Stabilized Apartment Investments	Joint Venture	Salt Lake City Matthew DeGraw	Vice President, Property Management	Property Management	Salt Lake City Matthew Jensen	Vice President, Fund Operations	Investment Management	Salt Lake City Dale Smetana-Nelson	Vice President, Property Management	Property Management	Salt Lake City Douglas Anderson	Principal	Investment Management	Salt Lake City".toLowerCase()
  
  var serviceProviders =
    "Service Providers ROC|Bridge works with top tier professionals and institutions to provide first class service to our investors. Legal Counsel Auditor Fund Administrator Bankers".toLowerCase()
  
  var philanthropyPage =
    "Philanthropy At ROC|Bridge Partners we understand the importance of giving back to the communities in which we operate. We support charitable organizations which focus on children and child welfare, protecting the environment and the provision of services to affordable housing. Children and Child Welfare Protecting the Environment Provision of Community Services to Affordable Housing Neighbor Works Project Access".toLowerCase()
  
  var investmentOverview =
    "overview ROC|Bridge Partners, LLC (“ROC|Bridge”), is a registered investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. We purchase real property and real estate backed loans at attractive valuations, build significant value through internal and affiliated operational expertise, and exit such investments once the improvements have been put in place. Our real estate investment and operating expertise, coupled with the opportunities afforded by current conditions in the U.S. real estate market, have created strong returns for our partners and investors. The principals at ROC|Bridge possess an average of over 21 years' experience with a proven track record in all facets of real estate investment. This includes development, management, operations and financial engineering, and spans all major asset classes including multifamily apartment, condominium, hotel, industrial, office, single family residential, retail and storage. As a result of this expertise, the ROC|Bridge team has the capability to effectively evaluate a wide variety of real estate investments from core to value-add and opportunistic / distressed. Additionally, we have the “on the ground” resources to operate and add value to these assets. These capabilities enable ROC|Bridge to provide attractive investment returns while minimizing risks. We own, manage and operate, through our privately held real estate investment vehicles over 7,200 apartment units and over 1.1 million square feet of commercial office space, as well as select other real estate assets. We are in business to make money for our investors, we distribute our excess cash flow quarterly and we seek to maximize returns through the intensive management and optimization of our portfolio. Through our principals’ 21 year track record, ROC|Bridge seeks to leverage long-standing relationships within the commercial real estate and banking industries both domestically and internationally.".toLowerCase()
  
  var missionPage =
    "Our Mission ROC|Bridge’s mission is to buy attractively priced assets to which we can add value and monetize at a significant return to our investors: in essence, to buy the right property, in the right place, at the right time and at the right price. We evaluate each asset with these core fundamentals in mind. to use a thorough underwriting approach to effectively diligence, structure and analyze each portfolio investment to ensure that the right property, place and price are targeted; and to utilize the collective resources of the team to directly oversee, inspect, finance, construct, rehabilitate, manage, improve and sell each portfolio investment in a way that unlocks or maximizes the value that can be realized from such portfolio investment.".toLowerCase()
  
});
