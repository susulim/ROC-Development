
$(document).ready(function() {
  alert($.cookie("searchCookie"))

    $('#home_search_input').keydown(function(event) {
    if (event.which == 13) {
      var searchTarget = $(this).val().toLowerCase()
      $.cookie("searchCookie", searchTarget)
      $(".search_wrapper").empty();
      window.location="/search"
    }
  });

  var searchValue = $.cookie("searchCookie")


  var contactPage = "contact us address robert ROC Salt Lake City Head Office San Francisco Metro New York Donaldson Hartman Paul Hutchinson Kelley Hansen Dean Allara office mobile email".toLowerCase()
  if (contactPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/contact/contact-us\">Contact Us</a><br/><span>http://roc-development/about-roc-bridge-partners/contact/contact-us</span><p>Salt Lake City (Head Office)<br />5295 So. Commerce Dr., Suite 100...</p>");
  }
  
  var homePage = "company overview ROC Bridge Partners, LLC ROC Bridge is registered with the SEC as an investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. Our activities since 1991 have included the acquisition, management and optimization of over 1.3 billion of real estate in more than 110 assets, mostly concentrated in the value added and stabilized multifamily sectors and in selected commercial office and other assets. Our long track record of success has created a vibrant network of relationships within the government, banking and real estate industries which provide us with attractive deal flow and opportunities to invest capital. We have the capability to effectively evaluate a wide variety of real estate investments from core to value-add and opportunistic distressed.".toLowerCase()
  if (homePage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/company-overview\">Company Overview</a><br/><span>http://roc-development/about-roc-bridge-partners/company-overview</span><p>ROC|Bridge Partners, LLC (&#8220;ROC|Bridge&#8221;), is a registered investment<br/> advisory firm whose principals have a 21 year track record...</p>");
  }

  var bpmPage = "Bridge Property Management, LLC is the groups in house property management operations with a 21 year track record. BPM manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC Bridges privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. BPM employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on-site personnel providing property maintenance and operations The network is well versed within their respective local markets, allowing ROC Bridge to provide objective assessments of potential investment opportunities and local intelligence such as leasing activity, sub-market occupancy, valuation, employment, demographic trends, local redevelopment initiatives, capital improvement needs, and physical security issues.".toLowerCase()
  if (bpmPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/c-overview/bpm\">Bridge Property Management</a><br /><span>http://roc-development/about-roc-bridge-partners/c-overview/bpm</span><br /><p>Bridge Property Management, LLC is the group&#8217;s in-house property management<br />operations with a 21 year track record...</p>");
  }

  var bsaiPage = "Bridge Stabilized Apartment Investments is the groups joint venture platform. Featuring an investment track record that spans over 21 years, BSAI acquires stabilized cash-flowing multifamily rental properties in partnership with a select group of institutional equity partners. Its primary business is to identify, analyze and evaluate stabilized apartment investments that offer opportunities to add value through physical renovation, marketing management enhancement and or recurring expense rationalization BSAI principals have completed more than 70 investments over its 21 year history. All BSAI potential acquisitions are offered to ROC Bridge on a right of first refusal basis, and all carried interest earned by BSAI from investors that joint venture with the ROC Bridge managed funds inure to such funds.".toLowerCase()
  if (bsaiPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/c-overview/bsai\">Bridge Stabilized Apartment Investments</a><br /><span>http://roc-development/about-roc-bridge-partners/c-overview/bsai</span><br /><p>Bridge Stabilized Apartment Investments is the group&#8217;s joint venture platform<br />Featuring an investment track record that spans over 21 years...</p>");
  }

  var teamPage = "team senior management Our principals have an average of 21 years experience and have extensive experience in all facets of real estate investment, financing, development, management and operations, spanning all major assets classes including multifamily apartment and condominium, hotel, industrial, office, single-family residential retail and storage. With over 550 real estate professionals in over 40 unique submarkets across the U.S., ROC Bridge has a pool of resources that is well versed in local markets throughout the country. Robert Morse adam farrell chad briggs christian young russell minnick dale smetana nelson danuel stranger dean allara donaldson hartman douglas anderson john pennington jonathan slager kelley hansen matthew degraw jensen paul hutchinson richard andrus stayner robert hallock morse winston chiu ".toLowerCase()
  if (teamPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/senior-management\">Senior Management</a><br /><span>http://roc-development/about-roc-bridge-partners/senior-management</span><br /><p>Our principals have an average of 21 years&#8217; experience and have extensive experience<br /> in all facets of real estate investment, financing, development, management and operations...</p>");
  }

  var servicePage = "service providers ROC Bridge works with top tier professionals and institutions to provide first class service to our investors Legal Counsel Auditor Fund Administrator bankers".toLowerCase()
  if (servicePage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/service-providers/service\">Service Providers</a><br /><span>http://roc-development/about-roc-bridge-partners/service-providers/service</span><br /><p>ROC|Bridge works with top tier professionals and institutions to provide first class<br /> service to our investors...</p>");
  }

  var philanthropyPage = "philanthropy At ROC Bridge Partners we understand the importance of giving back to the communities in which we operate. We support charitable organizations which focus on children and child welfare, protecting the environment and the provision of services to affordable housing. Children and Child Welfare Protecting the Environment Provision of Community Services to Affordable Housing".toLowerCase()
  if (philanthropyPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/about-roc-bridge-partners/philanthropy/philanthropy\">Philanthropy</a><br /><span>http://roc-development/about-roc-bridge-partners/philanthropy/philanthropy</span><br /><p>At ROC|Bridge Partners we understand the importance of giving back to the communities<br /> in which we operate...</p>");
  }

  var investmentPage = "investment management overview ROC Bridge Partners, LLC ROC Bridge, is a registered investment advisory firm whose principals have a 21 year track record of success in the multifamily and commercial office real estate sectors. We purchase real property and real estate backed loans at attractive valuations, build significant value through internal and affiliated operational expertise, and exit such investments once the improvements have been put in place. Our real estate investment and operating expertise, coupled with the opportunities afforded by current conditions in the U.S. real estate market, have created strong returns for our partners and investors. The principals at ROC Bridge possess an average of over 21 years experience with a proven track record in all facets of real estate investment. This includes development, management, operations and financial engineering, and spans all major asset classes including multifamily apartment, condominium, hotel, industrial, office, single family residential, retail and storage. As a result of this expertise, the ROC Bridge team has the capability to effectively evaluate a wide variety of real estate investments from core to value add and opportunistic distressed. Additionally, we have the on the ground resources to operate and add value to these assets. These capabilities enable ROC Bridge to provide attractive investment returns while minimizing risks. We own, manage and operate, through our privately held real estate investment vehicles over 7,200 apartment units and over 1.1 million square feet of commercial office space, as well as select other real estate assets. We are in business to make money for our investors, we distribute our excess cash flow quarterly and we seek to maximize returns through the intensive management and optimization of our portfolio. Through our principals 21 year track record, ROC|Bridge seeks to leverage long-standing relationships within the commercial real estate and banking industries both domestically and internationally.".toLowerCase()
  if (investmentPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/investment-management/overview\">Investment Management - Overview</a><br /><span>http://roc-development/investment-management/overview</span><br /><p>ROC|Bridge Partners, LLC (&#8220;ROC|Bridge&#8221;), is a registered investment advisory<br /> firm whose principals have a 21 year track record of success in the multifamily<br /> and commercial office real estate sectors...</p>");
  }

  var missionPage = "mission ROC Bridge mission is to buy attractively priced assets to which we can add value and monetize at a significant return to our investors: in essence, to buy the right property, in the right place, at the right time and at the right price. We evaluate each asset with these core fundamentals in mind. to use a thorough underwriting approach to effectively diligence, structure and analyze each portfolio investment to ensure that the right property, place and price are targeted; and to utilize the collective resources of the team to directly oversee, inspect, finance, construct, rehabilitate, manage, improve and sell each portfolio investment in a way that unlocks or maximizes the value that can be realized from such portfolio investment.".toLowerCase()
  if (missionPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/investment-management/mission\">Our Mission</a><br /><span>http://roc-development/investment-management/mission</span><br /><p>ROC|Bridge&#8217;s mission is to buy attractively priced assets to which we can<br /> add value and monetize at a significant return to our investors...");
  }

  var opportunityPage = "opportunity The U.S. market is experiencing a once in a generation opportunity to acquire real estate assets in local markets with attractive growth characteristics at bargain basement prices not seen since the U.S. Savings and Loan crisis in the 1980s. The principals at ROC Bridge are qualified and registered with the FDIC, HUD, the Federal National Mortgage Association and the Federal Home Loan Mortgage Corporation to buy discounted loans in government-directed auctions or through the duly appointed vendors. The principals also have significant relationships with banks, special loan servicers, bankruptcy courts, distressed funds and private investors whose troubled assets are also being liquidated at discounts. In the next two years, we expect the pace of these takeovers and liquidations to accelerate. Presently, ROC Bridge has not only proven deal flow from these sources, but also the expertise and systems to cost-efficiently renovate, improve and monetize such assets. We believe that the opportunity to purchase assets at substantial discounts to replacement cost will continue over the next several years due to inventory from government agencies, failed and stressed financial institutions and other motivated sellers. Being a buyer of choice with a track record of efficiently analyzing and closing transactions, positions ROC Bridge to profit from activity in the sector. In addition, the attractive valuation of property assets is further enhanced from the prospective of a non U.S. investor, by the comparative weakness of the U.S. dollar. In fact, on a currency adjusted basis, comparable multifamily and commercial office assets in the U.S. often sell for less than 50, and as much as 90 discount to similarly situated assets in Asia.".toLowerCase()
  if (opportunityPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/investment-management/the-opportunity\">The Opportunity</a><br /><span>http://roc-development/investment-management/the-opportunity</span><br /><p>The U.S. market is experiencing a &#8220;once in a generation&#8221; opportunity to acquire<br /> real estate assets in local markets with attractive growth...</p>");
  }

  var casestudiesPage = "case studies ladera palms indigo cherry creek torrey ridge apartments The principals of ROC Bridge have been adding value and optimizing multifamily and commercial office real estate investments since 1992. The principals possess an average of over 21 years experience with a proven track record in all facets of real estate investment including financing, development, management and operations. We have an extensive in house team of over 550 full time real estate professionals, in over 40 unique sub markets across the U.S. who play an important role in the entire investment process from underwriting, management and operations, and monetization. The case studies below provide a detailed summary of the analysis that goes into each investment and results achieved.".toLowerCase()
  if (casestudiesPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/investment-management/case-studies\">Case Studies</a><br /><span>http://roc-development/investment-management/case-studies</span><br /><p>The principals of ROC|Bridge have been adding value and optimizing multifamily<br /> and commercial office real estate investments since 1992...</p>");
  }

  var propertiesPage = "property management overviewThe majority of our properties are managed in house by our property management affiliate. Currently, Bridge Property Management BPM, manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC Bridges privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. BPM employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on site personnel providing property maintenance and operations. This in house network is well versed with the real estate market within their respective local areas, allowing ROC Bridge to provide objective assessments of potential investment opportunities and local intelligence (such as leasing activity, sub market occupancy, valuation, employment, demographic trends, local redevelopment initiatives, capital improvement needs, and physical security issues.".toLowerCase()
  if (propertiesPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/property-management/overview\">Property Management - Overview</a><br /><span>http://roc-development/property-management/overview</span><br /><p>The majority of our properties are managed in-house by our property management affiliate.<br /> Currently, Bridge Property Management...</p>");
  }

  var portfolioPage = "current portfolio Multifamily office retails other property city state units BPM manages over 16,500 multifamily apartment units and over 1.5 million square feet of commercial office space, which are owned by ROC Bridge privately held real estate investment vehicles, other funds, institutional capital aggregators and individual investors. Our property management division employs over 550 real estate professionals, in over 40 unique sub-markets across the U.S. This includes 54 property managers and 120 leasing agents, and over 320 on-site personnel providing property maintenance and operations.".toLowerCase()
  if (portfolioPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/property-management/portfolio\">Current Portfolio</a><br /><span>http://roc-development/property-management/portfolio</span><br /><p>BPM manages over 16,500 multifamily apartment units and over 1.5 million<br /> square feet of commercial office space, which are...</p>");
  }

  var monetizedPage = "monetized properties ROC Bridge has a predetermined holding period of between 3 4 years for its properties. Below are some of the properties which we have recently monetized. multifamily office retail ladera palms cottage property city state unit square feet Big Lots Midbox Retail	Bolingbrook	Illinois	33,145 Marathon Medical Office".toLowerCase()
  if (monetizedPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/property-management/monetized-properties\">Monetized Properties</a><br /><span>http://roc-development/property-management/monetized-properties</span><br /><p>ROC|Bridge has a predetermined holding period of between 3 &#8211; 4 years for its properties...</p>");
  }

  var newPage = "news updates ROC is pleased to announce the acquisition of a high quality commercial office property in Denver, Colorado Twelve-story Corporate Center (238k SF) 50% leased and three Campus buildings 355k SF 100 leased what when where Glendale, Colorado Premium office retail district of Denver Cherry Creek Surrounded by exclusive residential neighborhoods High-traffic corridor Riverwalk environment why estimanted return strong fundamental donaldson hartman dean allara robert morse wing fai ng dan stranger paul hutchinson ceo coo ecm  cio chmn md salt lake city san francisco hong kong".toLowerCase()
  if (newPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/news/roc-acquires-opportunistic-asset\">Acquires Opportunistic Asset</a><br /><span>http://roc-development/news/roc-acquires-opportunistic-asset</span><br /><p>ROC is pleased to announce the acquisition of a high quality commercial<br /> office property in Denver, Colorado...</p>");
  }

  var strategyPage = "roc strategy for value addimplement comprehensive capital improvement strategy consisting of significiant improvements to common areas, lobby, amenities and parking. Install new property management and leasing teams to operate the property and vitalize leasing efforts. Work with local partners. affiliates and city officials to reposition the development site as a high density multifamily residential use. Directly adjacent to this property is a very high end residential tower with over 100 units per acre density, currently 95 leased. ROC has received initial interest from credible prospective buyers to buy this property for development as a high end residential property. Market the Campus buildings for sale, once development and parking structure are approved.Use the sale proceeds from the Campus and or the development land to construct a parking structure to add a covered parking element to the Corporate Center while maintaining the 4 per 1,000 parking ratio Lease the Corporate Center to 90 stabilized occupancy by the 3rd year, and will look to exit this final Tower of the Cherry Creek complex in year 4 to 5.".toLowerCase()
  if (strategyPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/news/roc-strategy-of-value-add\">Strategy for Value Add</a><br /><span>http://roc-development/news/roc-strategy-of-value-add</span><br /><p>Implement comprehensive capital improvement strategy consisting of<br /> significiant improvements to common areas, lobby, amenities and parking...</p>");
  }

  var participantPage = "participant in conferences Robert Morse Key Note Panel PERE Asia 2012 Conrad Hotel, HK Robert Morse: Panelist 10th Annual REIW Asia 2011 Marina Bay Sands, Singapore Robert Morse: Key Note Speaker PERE Asia 2011 Four Seasons Hotel, HK".toLowerCase()
  if (participantPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/news/participation-in-conferences\">Participation In Conferences</a><br /><span>http://roc-development/news/participation-in-conferences</span><br /><p>Robert Morse: Key Note Panel &#8211; PERE Asia 2012...</p>");
  }

  var legalPage = "legal page".toLowerCase()
  if (legalPage.search(searchValue) != -1){
    $(".search_wrapper").append("<a href=\"/legal\">Legal</a><br /><span>http://roc-development/legal</span><br /><p>By entering our website, you acknowledge your agreement with and understanding of the following Terms of Use ...</p>");
  }

   if ($.cookie("searchCookie") != null){
    $.cookie("searchCookie", null)
  }
  
})
