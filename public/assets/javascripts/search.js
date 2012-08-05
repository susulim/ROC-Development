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
      
      robertMorse.search(searchTarget)
      if (robertMorse.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/robert-morse" class="search_result_link">Robert Morse</a>');
      };
      
      donaldsonHartman.search(searchTarget)
      if (donaldsonHartman.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/donaldson-l-hartman" class="search_result_link">Donaldson L. Hartman</a>');
      };
      
      christianYoung.search(searchTarget)
      if (christianYoung.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/christian-v-young" class="search_result_link">Christian V. Young</a>');
      };
      
      danuelStanger.search(searchTarget)
      if (danuelStanger.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/danuel-r-stanger" class="search_result_link">Danuel R. Stanger</a>');
      };
      
      deanAllara.search(searchTarget)
      if (deanAllara.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/dean-a-allara" class="search_result_link">Dean A. Allara</a>');
      };
      
      russellMinnick.search(searchTarget)
      if (russellMinnick.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/d-russell-minnick" class="search_result_link">D. Russell Minnick</a>');
      };
      
      jonathanSlager.search(searchTarget)
      if (jonathanSlager.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/jonathan-slager" class="search_result_link">Jonathan Slager</a>');
      };
      
      richardStayner.search(searchTarget)
      if (richardStayner.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/richard-w-stayner" class="search_result_link">Richard W. Stayner</a>');
      };
      
      winstonChiu.search(searchTarget)
      if (winstonChiu.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/winston-chiu" class="search_result_link">Winston Chiu</a>');
      };
      
      robertHallock.search(searchTarget)
      if (robertHallock.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/robert-hallock" class="search_result_link">Robert Hallock</a>');
      };
      
      KelleyHansen.search(searchTarget)
      if (KelleyHansen.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/kelley-hansen" class="search_result_link">Kelley Hansen</a>');
      };
      
      johnPennington.search(searchTarget)
      if (johnPennington.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/john-s-pennington" class="search_result_link">John S. Pennington</a>');
      };
      
      chadBriggs.search(searchTarget)
      if (chadBriggs.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/chad-briggs" class="search_result_link">Chad Briggs</a>');
      };
      
      adamFarrell.search(searchTarget)
      if (adamFarrell.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/adam-o-farrell" class="search_result_link">Adam O\'\Farrell</a>');
      };
      
      paulHutchinson.search(searchTarget)
      if (paulHutchinson.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/paul-hutchinson" class="search_result_link">Paul Hutchinson</a>');
      };
      
      richardAndrus.search(searchTarget)
      if (richardAndrus.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/richard-g-andrus" class="search_result_link">Richard G. Andrus</a>');
      };
      
      deGraw.search(searchTarget)
      if (deGraw.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/matthew-degraw" class="search_result_link">Matthew DeGraw</a>');
      };
      
      matthewJensen.search(searchTarget)
      if (matthewJensen.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/matthew-jensen" class="search_result_link">Matthew Jensen</a>');
      };
      
      daleSmetana.search(searchTarget)
      if (daleSmetana.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/dale-smetana-nelson" class="search_result_link">Dale Smetana-Nelson</a>');
      };
      
      douglasAnderson.search(searchTarget)
      if (douglasAnderson.search(searchTarget) != -1) {  
         $('.search_results').append('<a href="/about-roc-bridge-partners/the-team/douglas-anderson" class="search_result_link">Douglas Anderson</a>');
      };

      if ($('.search_results').text().length == 0 ) {
        $('.search_results').html('<div class="no_result">' + 'No result for ' + searchTarget + '</div>');
      };
        
    };
  });
  
  var douglasAnderson =
    "Douglas Anderson Principal Mr. Anderson brings more than 25 years of extensive specialized experience with the Pacific Group of Companies (www.PGC.us) in the construction, development financing in commercial, retail, institutional, residential and resort industries. With in-depth planning, development, financing, construction and management knowledge, he has applied his skills to for numerous successful projects ranging from resort, urban high-rise, custom and multi-family residential to office, retail, commercial, industrial and land development. Mr. Anderson and companies have immense experience in large master planned communities throughout the United States and Canada. Through his expertise and leadership, he has built several large development and construction companies into market leaders throughout the western US and Canada. Additional specific accomplishments include: Supervised all aspects of development, planning and construction for several billion dollars in real estate assets to date, over 2,000 projects. Directed development services for projects encompassing more than 20 million square feet including luxury residential units. Design/build military-base family housing projects throughout the U.S. Founder of the USCIS approved New Hampshire EB-5 Regional Center. EB-5 Ski Resort Project; Multiple Projects; Multiple Phases Mr. Anderson received his undergraduate degree from The University of Utah and his MBA from the University of Phoenix. His BS degree is in Consumer Studies and Design (with additional architectural emphasis) from the University of Utah. Mr. Anderson attended Harvard Business school for a two (2) year Advanced Management degree (OPM). His education, combined with his in-depth experience and leadership, provides comprehensive knowledge to execute a wide range of development projects.".toLowerCase()
  
  var daleSmetana =
    "Dale Smetana-Nelson Vice President â€“ Property Management Ms. Nelson is a seasoned commercial office professional holding a real estate brokerage license with 25 years of experience. Ms. Nelson oversees the commercial officeside of the business handling office product for ROC|Bridge Partners, the ROC Fund, as well as outside fee management business totaling over 1.6 million square feet currently under asset management. Prior to joining Bridge Property Management in 2003, Ms. Nelson had worked for Equity Office Properties, Cornerstone, William Wilson & Associates and Dillingham Development. Ms. Nelson has been an active member since 1985 of the Utah Chapter of NAIOP, a development trade organization headquartered in Washington, DC. Ms. Nelson current serves as Chapter Treasurer and had previously served as Chapter President, along with numerous committees including the award winning Utah Commercial Real Estate Symposium. Ms. Nelson has also taken an active role with NAIOP nationally serving as a Past Chair of the Business Development Committee, past Executive Committee member and currently serving a three year term as a member of the national Board of Directors.".toLowerCase()
  
  var matthewJensen =
    "Matthew Jensen Vice President – Fund Operations Mr. Jensen has been involved with many phases of the firm's development since inception of ROC|Bridge. Mr. Jensen began his finance career at Bridge Investment Group (a ROC|Bridge affiliate) in 2006 where he was engaged principally in the firm's acquisitions, dispositions and development business. During his career to date, he has been responsible for due diligence and analysis of more than $400 million in real estate debt and equity transactions across the multifamily, commercial office, retail and hospitality sectors. He takes a leading role in the financial management functions of ROC|Bridge’s funds. Mr. Jensen holds a BA, cum laude from the University of Utah where he served on Academic Senate and was a Theodore Presser and President's Scholar. Mr. Jensen is a Certified Commercial Investment Member (CCIM).".toLowerCase()
  
  var deGraw =
    "Matthew DeGraw Vice President – Property Management Mr. DeGraw is in charge of property management operations throughout the property portfolio. He has over 14 years of extensive property management experience in the multi-family, affordable housing, student housing and retail sectors. His experience has included: Rehabilitation of large scale multi-family apartment properties and has helped guide many of the investment assets through to successful dispositions. He has also been in charge of managing the marketing processes for the properties and establishing the strict quality standards that are adhered to when renovating properties within the portfolio. Mr. DeGraw is an executive board member of the Utah Apartment Association.".toLowerCase()
  
  var richardAndrus =
    "Richard G. Andrus Director — Acquisitions and Dispositions, Bridge Stabilized Apartment Investments, LLC Mr. Andrus has filled a number of key roles within the ROC|Bridge group since joining in 2001. Prior to taking on his current role in 2007, Mr. Andrus was previously an Analyst and Portfolio Manager for ROC|Bridgeâ€™s property management operations. Mr. Andrusâ€™ real estate career began in 1980 as an acquisitions analyst for Equitec Financial Group in the San Francisco Bay Area. He subsequently moved into Equitecâ€™s lending group ultimately becoming its Director. Mr. Andrus continued his career as Senior Vice-President of Fitech Financial, where he created and managed the commercial and multifamily lending division. Prior to joining ROC|Bridge, Mr. Andrus was Vice-President of Cal America where he headed the commercial loan resolution group.".toLowerCase()
  
  var paulHutchinson =
    "Paul Hutchinson Director – Business Development Mr. Hutchinson has 16 years of real estate investment, fund management and capital markets experience. Over the years, he has developed excellent relationships with regional and national loan and real estate brokers. His experience has included: Managing Partner of Bridge Loan Capital Fund LP, which provided short-term lending backed by commercial property, development land, late-stage entitlements and other real property, where he has been involved in all phases of the investment decision-making process and managed investor relations. Founder, President, and CEO of Midwest Center LLC, a company engaged in the direct response industry providing clients with sales, customer service, quality assurance, customer retention, and employee management. Mr. Hutchinson completed two years of pre-med undergraduate studies at the University of Utah before finding his calling as an entrepreneur and expert in marketing principles and practices. He is a frequent key-note speaker at business events on the topics of financial management, business development, training, and organizational leadership.".toLowerCase()
  
  var adamFarrell =
    "Adam O'Farrell General Counsel Mr. O’Farrell has more than 11 years of experience as a real estate investment management attorney. He has significant private equity, REIT and tax experience as well as broad transactional legal background acquired while working at top international law firms and as in-house counsel. His experience has included: Senior counsel at Foley & Lardner LLP where he was a member of the private equity/venture capital and transactions and securities practice groups. Prior to that, Mr. O’Farrell worked at Morrison & Foerster LLP as senior associate and a member of the private equity fund formation group. In 2005 and 2006, Mr. O’Farrell acted as regional counsel for KB Home, with responsibility for all division legal matters, with a focus on real estate acquisition, land use and entitlement issues, financing, joint ventures and litigation management. From 2000 to 2005, Mr. O’Farrell was an associate and member of the internationally-recognized tax department of Latham & Watkins LLP. Mr. O’Farrell earned his Juris Doctor degree in 2000 from the J. Reuben Clark Law School, Brigham Young University, Magna Cum Laude and Order of the Coif and was senior editor of BYU Law Review. Mr. O’Farrell earned his Bachelor of Science and Master of Accountancy degrees with an emphasis in Taxation from the Marriott School of Management at Brigham Young University. Mr. O’Farrell is a member of the California and San Diego County bar associations. Mr. O’Farrell also reads, writes and speaks the Korean language.".toLowerCase()
  
  var chadBriggs =
    "Chad Briggs Chief Financial Officer Mr. Briggs is responsible for all treasury and financial functions of ROC|Bridge. Mr. Briggs brings 25 years of experience in accounting, finance, M&A, public offerings, SEC compliance, and human resources. He served as Vice President and CFO for 5 years of Digital Draw Network, a national provider of residential construction and commercial real estate inspection services. Prior to Digital Draw, Mr. Briggs spent 10 years as VP/CFO of TheraTech Inc., a public company. Mr. Briggs earned his B.S. in accounting from the University of Utah in 1985, and has been a Certified Public Accountant since 1986.".toLowerCase()
  
  var johnPennington =
    "John S. Pennington Chief Compliance Officer Since the inception of ROC|Bridge, Mr. Pennington has been integrally involved in SEC filings, compliance, administration, coordination of legal counsel, and auditor relationships and is a member of the ROC I investment management committee. He has 23 years of experience in real estate finance, corporate formations, international regulatory, fund management and administration, asset acquisition, real estate loan underwriting and SEC financial reporting & compliance. His experience has included: Prior to 2008, Mr. Pennington was the Managing Director, CFO and Co-Founder of Bridge Loan Capital Fund, LP, a mezzanine fund focused on the acquisition and origination of real estate-backed debt. His responsibilities included, capital raising, coordinating bank relationships, budgets, audits, and financial reports, SEC filings, fund formation matters, compliance, administration, coordination of legal counsel, annual audits, and collection of loans and dispositions. From 1989 to 2005, he was Co-Founder and President of USAT Inc., an import/export company, which transacted business in over 17 countries, subsequently Mr. Pennington was the Co-Founder/Co-Owner of businesses located in Spain, Canada, Germany and Puerto Rico. From 1997 through 1999, he was Chief Operating Officer /Co-Owner of a publicly held company with 140 employees. He was responsible for audits, SEC reporting, and international sales. This led to his co-ownership, acquisition and subsequent successful sale of a foreclosed, real estate distressed housing development, including a full service golf course and country club. He is a former a member of the National Association of Securities Dealers and is currently registered with the U.S. Securities and Exchange Commission as the Chief Compliance Officer Mr. Pennington earned his Bachelor of Science degree in Economics from the University of Utah in 1988. Mr. Pennington has served on the Advisory Board of the Westminster College School of Business in Salt Lake City, Utah, and as the director of fund raising for the Utah Special Olympics program a charitable organization for special needs children.".toLowerCase()
  
  var KelleyHansen =
    "Kelley Hansen Senior Vice President – Property Acquisitions Mr. Hansen has 24 years of experience in real estate management, development, and marketing. He is responsible for screening and underwriting acquisition opportunities, and for on-site due diligence during the asset acquisition phase. He is the primary liaison with governmental agencies, CMBS providers and special loan servicer, and is typically the first screener of potential acquisitions for ROC|Bridge. His experience has included: Co-founder of Habro LLC, a real estate acquisition and development company, responsible for analyzing, acquiring, entitling and marketing real estate development projects. President of Impact Development LLC, oversaw the acquisition and completion of over 60 real estate projects throughout the western U.S. President of Protective Technologies International, PTI. Provided residential, commercial buildings and hotel properties with new technology in communications, life safety, and security. Mr. Hansen studied Business Management and Finance at Brigham Young University before pursuing his career first as a licensed stockbroker for Paine Webber and then as an entrepreneur and real estate investor.".toLowerCase()
  
  var robertHallock =
    "Robert Hallock Senior Vice President – Property Acquisitions Mr. Hallock is responsible for screening and underwriting acquisition opportunities, and for on-site due diligence during the asset acquisition phase, and for assisting in property-level capital expenditure budget design, implementation, and the subsequent monitoring of value-add programs. Mr. Hallock has over 32 years of experience in real estate due diligence, underwriting, analysis, management, and performing value-add improvements. He has held the following senior positions: CFO and General Partner for 4S Ranch, a large land development project in San Diego. Oversaw financing and construction. COO of Chelsea Development, obtained financing for and led projects that include small and large office buildings, hotels, industrial buildings, build-to-suits leases, restaurants, self-storage units and athletic clubs. Managing Director of Border Communities Capital Company. Negotiated a $50 million New Market Tax Credit (“NMTC”) allocation award. Actively investigated, reviewed and implemented qualifying NMTC investments. Senior project manager and acquisition consultant for developments and low-income housing projects in Southern California. Responsible for property acquisitions, entitlements, permanent financing, and tax credits. Coordinated construction and property management. Mr. Hallock earned his Bachelor of Science degree in Business Administration & Accounting, California State University, 1969. He has been a Certified Public Accountant (CPA) since 1971.".toLowerCase()
  
  var winstonChiu =
    "Winston Chiu Director – Financial Reporting & Investor Relations, Investment Management Committee Member Mr. Chiu is a seasoned investment manager, CPA and financial analyst with 17 years of experience in investment banking, corporate strategy, mergers and acquisitions and private equity. He is instrumental in the formation process, and in driving and coordinating the fund management functions with counsel, auditors and fund administrators. His experience has included: Director in HSBC Corporate Strategy department where he oversaw acquisitions for HSBC for the Asia Pacific region. Mr. Chiu led transactions for HSBC worth over US$2.0 billion in China, India, Taiwan, Korea, Indonesia and Vietnam. Mr. Chiu was previously with Salomon Smith Barney and JP MorganÂ´s investment banking departments based in Hong Kong. Mr. Chiu earned a Masters in Business Administration (MBA) from Columbia Business School in 1997, an M.Phil. in Economic Development from the University of Cambridge in 1995, and a Bachelor of Science degree in Economic Development from De La Salle University in 1990. Mr. Chiu topped the Philippine CPA exam in 1990 and received the Elijah Watt Sells Award from the American Institute of Certified Public Accountants (AICPA) in 1992.".toLowerCase()
  
  var richardStayner =
    "Richard W. Stayner, President, Property Management As head of the ROC|Bridge’s property management company, Mr. Stayner oversees all property management processes, personnel and operations on a day-to-day basis along with reporting procedures for institutional clients, joint venture partners, lenders, governmental entities and housing authorities. Mr. Morse brings 30 years of experience in commercial and investment banking and private equity fund management. Since inception of ROC|Bridge, Mr. Morse has been integrally involved in the formation, management, strategy and capitalization of the group. His experience has included: Mr. Stayner has over 25 years of extensive multi-family property management experience including both large-scale conventional and affordable housing apartment projects along with condominium properties with Prowswood Companies, Boston Financial and Lend-Lease. Mr. Stayner has been instrumental in the underwriting and due diligence process of ROC|Bridge’s portfolio, in addition to being responsible for the on-site, value add improvements that have allowed ROC|Bridge to extract significant value from properties and to deliver strong returns to investors. As a principal with Lend-Lease Real Estate Investments division, Mr. Stayner had responsibility for its multifamily apartment assets in 11 western U.S. states along with asset acquisitions, and market and operational analysis. He also developed Lend-Lease’s operational procedures for their management of the U.S. military housing privatization project. Mr. Stayner has a Certified Property Management designation and is a past board member of the Salt Lake Apartment Association as well as a past president of the Utah Chapter of the Institute of Real Estate Management.".toLowerCase()
  
  var jonathanSlager =
    "Jonathan Slager Managing Director – Asset Management Group and Investment Management Committee Member Mr. Slager has 29 years of experience in the real estate, finance, and software industries. Mr. Slager has been involved in underwriting, acquiring and managing all of ROC|Bridge’s investments, and has been a key driver of asset execution and returns. His experience has included: From 2005 to 2009, Mr. Slager was with The Pacific Group USA, Inc., and with Bridge Loan Capital Fund. He was responsible for major acquisitions, development, and entitlements and financing of major real estate projects. For nearly a decade prior to that, Mr. Slager worked at The Koll Company and then Wells Fargo Bank. At these leading institutions he was responsible for the acquisition, development, asset management and disposition of commercial real estate assets. Mr. Slager played the leading role on large institutional commercial real estate projects ranging from resort, residential, office, industrial and retail projects. There, he: negotiated purchase agreements, performed feasibility analyses, coordinated resolution of zoning and entitlement issues, arranged debt financing, oversaw construction, managed assets, and performed leasing and marketing services. acquired land and buildings valued in excess of US$700 million. managed multiple development projects of over 1.6 million square feet of commercial office, industrial, retail, residential, and resort real estate. formed joint ventures with private and institutional partners, such as Aetna and John Hancock. marketed and sold over US$1 billion in real estate assets. Mr. Slager earned his MBA in Finance and Marketing from New York University in 1985. He earned his BA in English, Phi Beta Kappa cum laude, from the University of Utah in 1981.".toLowerCase()
  
  var russellMinnick =
    "D. Russell Minnick Chief Executive Officer & President, Bridge Stabilized Apartment Investments, LLC. Mr. Minnick multifamily/commercial office acquisitions, dispositions, property management, leasing and construction experience spans 30 years. He has primary responsibility for ROC|Bridge joint venture activities. Mr. Minnick is a principal of Bridge Investment Group (a ROC|Bridge affiliate). Mr. Minnick initially created the construction, property and asset management division (Bridge Property Management, LLC) in 2000. He has primary responsibility for overseeing Bridge acquisition, negotiations, underwriting, due diligence, and disposition activities Prior to joining Bridge Investment Group, Mr. Minnick was employed by Prowswood Companies (Salt Lake Cityâ€™s leading commercial investment development and management firm) from 1979 with increasing responsibilities in construction, development, asset and property management. In 1997, he joined Boston Financial with responsibility for its Western US multifamily portfolio, which exceeded 20,000 units. He also spent four years as Chief Operating Officer for Mount Olympus Builders from 1993 -1997, a construction/ landscape company specializing in property rehabilitation, commercial maintenance and low-income housing. Mr. Minnick well-rounded career also includes two years in commercial office property management and leasing with Prowswood Companies (1992 1994). He is a past president of the Utah Apartment Association, past Board of Directors member of the Homebuilder Association of Greater Salt Lake, current member of the national Young Presidents Organization and has earned the CCIM certification.".toLowerCase()
  
  var deanAllara =
    "Dean A. Allara Chief Operations Officer, Investment Management Committee Member and Executive Committee Member Mr. Allara has 25 years of experience in the real estate investment process including analyzing, raising capital, acquiring, financing, developing, managing, improving and selling properties. Mr. Allara is responsible for capital raising, investment analysis and investor relations. His experience has included: Directly responsibility for investing in over US$700 million dollars in real estate assets. Property types include multifamily and single family residential, commercial, resort golf properties, hotel, and retail properties. Mr. Allara, along with Mr. Stanger, is primarily responsible for Bridge’s track record which includes significant double digit returns even in difficult time periods. Mr. Allara was with Bridge Investment Group (a ROC|Bridge affiliate) from 1995 to 2009. In Bridge, he was involved in raising capital from high net worth individuals, family office and institutional partners in addition to responsibilities related to ownership, investment analysis, development, asset management, investor relations, and legal & tax issues. Real property development including permits and zoning, master planning, debt financing, insurance, construction management, home owners’ association management, marketing and residential sales. Previous experience includes a ten-year career with Trace Digital, a leading global supplier of software manufacturing equipment, where he rose from a Regional Sales Manager to President and CEO. Mr. Allara earned his Bachelor of Science degree in Business Administration from the St. Mary’s College in 1984, which included one year at Loyola University of Rome, Italy. He also earned his Masters of Business Administration (MBA) from Santa Clara University in 1986 with a semester at the Tokyo University studying Business Law.".toLowerCase()
  
  var danuelStanger =
    "Danuel R. Stanger Chief Investment Officer, Investment Management Committee Member and Executive Committee Member Mr. Stanger has 28 years of experience in every phase of the real estate investment process including finding, analyzing, acquiring, financing, developing, managing, improving and selling properties. He has been directly responsible for investing in over US$1 billion dollars in real estate assets including investments in multi and single family residential properties, commercial offices, resort golf properties, hotel, and retail properties. This track record includes significant double-digit returns even in difficult time periods. Since the inception of ROC|Bridge, Mr. Stanger has focused his full-time efforts on the remarkable acquisitions available to ROC|Bridge that presented themselves as a result of the global financial crisis. He has been the primary driver of acquisitions, management and disposition of all ROC|Bridge investments. Mr. Stanger was CEO of Bridge Investment Group (a ROC|Bridge affiliate) until March 2009. He was involved in all phases of developments and investments since inception; approved all commitments, and was responsible for day-to-day management of investment activities. In particular, he was responsible for market and individual investment analysis, transaction structuring and planning, development and joint venture equity partner relationships. Mr. Stanger began his real estate career in 1988, on the heels of a banking career with Prudential Federal and American Savings, directing credit restructuring, workouts, management and disposition of all commercial investment real estate and corporate lending foreclosures at American Savings from 1985 through 1988. He left Prudential Federal and American Savings in 1988 to found Strategic Management and Consulting, which focused on property management and the resolution of distressed commercial properties including retail, office warehouse, medical office, hospitality and residential real estate. Mr. Stanger merged this company into Prowswood Companies in 1990, where he became Vice-President and Managing Director of the Equity Investment Division. He left Prowswood in 1997 to form CDS Investments, Inc. the predecessor company to Bridge Investment Group. He has been a member of many community organizations, and served on the Board of Neighborhood Housing Services, and as a Founding Member of the Utah Community Reinvestment Corporation, an organization established by the banking community to invest funds in residential and commercial communities. Mr. Stanger is a Certified Commercial Investment Member (CCIM), and was the chair of the Utah Association of Realtors Governmental Affairs Committee, and served on the National Committee for CCIM.".toLowerCase()
  
  var christianYoung =
    "Christian V. Young Chairman , Bridge Stabilized Apartment Investments, LLC (“BSAI”) Mr. Young is involved in all phases of BSAI’s development and investments since its inception and approves all the company’s commitments. In particular, Mr. Young focuses on capital development, investor relationships, transaction structuring, real estate tax/legal issues, corporate finance and administration, asset management and strategic planning. Mr. Young is the Co-Founder and Chairman of Bridge Investment Group, LLC, a commercial investment real estate services company and original founder of BSAI. In 1997, Mr. Young co-founded CDS Investments, Inc., the predecessor company to Bridge Investment Group, LLC. From 1992 to 1997, Mr. Young was the President of Acorn Development, which successfully invested syndicated equity capital into commercial investment real estate projects in the Western United States exclusively identified, financed, managed and sold by the predecessors of CDS Investments, Inc Mr. Young currently serves as the a general partner, manager or director of over 100 partnerships, limited liability companies and limited partnerships owning commercial investment real estate. From 1982 to 1997, Mr. Young was an executive with AT&T and Lucent Technologies, Inc. with increasing responsibilities in their business services and international groups. Mr. Young graduated cum laude from the University of Utah with a degree in Business Management. He is a member of the National Multi-Housing Council and serves as a board member of RBP Capital Holdings, LLC.".toLowerCase()
  
  var donaldsonHartman =
    "Donaldson L. Hartman Chief Executive Officer, Investment Management Committee Member and Executive Committee Member Mr. Hartman has 22 years of experience in mergers and acquisitions, investment banking, commercial banking and private equity fund management. Mr Hartman oversees capital raising, the establishment and implementation of all fund investment strategies, policies and procedures. His experience has included: COO of Bridge Loan Capital Fund LP, a mezzanine fund focused on the acquisition and extension of real estate-backed debt. He managed bank relationships and due diligence efforts, including site inspections. He was responsible for setting and managing operating policies and procedures. Prior to that, he managed private funds invested in distressed Asian financial institutions equities and real estate backed notes and assets. From 1994 to 2002, Mr. Hartman resided in Asia, where he acted as Deputy Head and then Director of Asia Pacific region’s Financial Institutions Group of Citigroup – Salomon Smith Barney. He played a leading role in the completion of billions of dollars of public offerings during the Asian financial crisis of the late 90s. He also advised central banks in Asia on financial system restructuring and regulatory policies, including “bailout plans” in a few countries that nationalized and disposed of non-performing loans from banks and other financial institutions. In the early 1990s, he became a highly ranked regional banks analyst in Asia – for UBS Warburg and then Salomon Brothers – as a specialist in predictive credit cycle analysis and asset valuation analysis. Over the years, Mr. Hartman has been interviewed and quoted by numerous financial television programs, such as CNBC, Bloomberg and CNN, and by financial publications such as the Economist, Asiamoney, South China Morning Post, Asian Wall Street Journal, and Financial Times. He reads, writes, and speaks the Thai and Lao languages, as well as maintains conversational capability in other languages. Mr. Hartman earned his MBA from Northwestern University, Kellogg School of Management in 1994; with majors in Finance, International Business, and Marketing. He earned his Bachelor of Science degree in Economics from Brigham Young University in 1989.".toLowerCase()
  
  var robertMorse =
    "robert morse chairman investment management committee Mr. Morse brings 30 years of experience in commercial and investment banking and private equity fund management. Since the inception of ROC|Bridge, Mr. Morse has been integrally involved in the formation, management, strategy and capitalization of the group. His experience has included: CEO of Citigroup's Asia Institutional Clients Group from 2004-2008. Citigroup's Asian institutional businesses included corporate banking, investment banking, markets and transaction services in 17 countries employing over 14,000 employees. During Mr. Morse's tenure, Citigroup was awarded the 'Best Bank in Asia' award annually by FinanceAsia, EuroMoney and The Asset magazines and client surveys. From 2004 through 2007, Citigroup's institutional revenue in Asia increased from US$3.4 billion to US$6.5 billion, and net income from US$1.3 billion to US$2.6 billion. Prior to his position as CEO of Citigroup's Asia Institutional Client's Group, Mr. Morse served as the Head of Global Investment Banking for Citigroup, based in New York. Mr. Morse provided management oversight of Citigroup's US$5 billion of Asian based proprietary capital, which earned an annual return of approximately 30%, after firm-imposed capital charges. Additionally, Mr. Morse was a co-founder of SSB Capital Partners, a 2000 vintage US$400 million private equity fund which to-date has returned 2.6X, at a CAR of 38%. Mr. Morse is a 1977 graduate of Yale College, Phi Beta Kappa and magna cum laude, and a 1981 graduate of the Harvard Graduate School of Business Administration and the Harvard Law School. Mr. Morse also serves on a variety of charitable organization boards, including the Yale President's Council on International Activities, The Nature Conservancy Asian Council, the Asia Society and the Asian Cultural Council.".toLowerCase()
  
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
