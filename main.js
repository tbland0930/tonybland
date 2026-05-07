    const CASE_STUDIES = {

      americorps: {
        eyebrow: 'Case Study / Federal Government / LMS',
        content: `
          <h2 class="cs-title">AmeriCorps Learning Campus</h2>
          <p class="cs-subtitle">Rebuilding a federal learning platform from the ground up, with AI-powered search, personalized learning paths, and rigorous accessibility standards baked in from day one.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">Government</span>
            <span class="cs-meta-tag">LMS</span>
            <span class="cs-meta-tag">UX Research</span>
            <span class="cs-meta-tag">AI / ML</span>
            <span class="cs-meta-tag">WCAG 2.1 AA</span>
            <span class="cs-meta-tag">Accessibility</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">A Learning System That Had Outgrown Itself</h3>
          <p class="cs-text">AmeriCorps runs one of the country's largest national service networks, and their Learning Campus is the central hub where members, volunteers, and staff go to access training, resources, and continuing education. The existing platform was a legacy system that had been patched and extended well past its natural lifespan.</p>
          <p class="cs-text">Search was the breaking point. Users would type in something specific and get back results that had nothing to do with what they were looking for. Content was buried. Navigation made it hard to know what was even available. Staff spent real time fielding support questions that should have been answered by the platform itself.</p>
          <p class="cs-text">What started as a search improvement project grew into something bigger: a full LMS redesign with modern AI capabilities, built on current frontend technologies, and compliant with the federal accessibility mandate that applies to all government digital properties.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Listening Across a Diverse User Base</h3>
          <p class="cs-text">The research phase combined qualitative and quantitative methods across the full spectrum of platform users. That included one-on-one interviews, moderated usability sessions, surveys, and analysis of search query logs to understand what people were actually looking for versus what they were finding.</p>
          <p class="cs-text">Participants included active AmeriCorps members serving in the field, volunteers engaging with the platform on a part-time basis, program staff managing training requirements, and agency administrators overseeing content. Each group had distinct needs, and designing for one without considering the others would have created new problems while solving old ones.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Marcus Webb</div>
              <div class="cs-persona-role">AmeriCorps VISTA Member, Year 1</div>
              <p class="cs-persona-detail">Marcus is 24 and completing his first year of service in a rural community. He accesses the Learning Campus on his phone most of the time and needs to complete specific training modules tied to his service term. Finding the right content is frustrating and he often gives up and asks his program manager instead.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Diane Kowalski</div>
              <div class="cs-persona-role">Community Volunteer, Part-Time</div>
              <p class="cs-persona-detail">Diane is 58 and volunteers with an AmeriCorps-partnered nonprofit on weekends. She's not a frequent platform user and finds the interface confusing to navigate. She needs clear, simple paths to the specific resources relevant to her role without having to dig through categories that don't apply to her.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">What the Research Surfaced</h3>
          <p class="cs-text">Across all user groups, a few themes came up repeatedly. The platform wasn't meeting people where they were, and it wasn't doing enough to help them figure out where to go.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>Search returned results that were inconsistent, outdated, or completely unrelated to the query</li>
            <li><span class="cs-pain-dot"></span>No personalization meant every user saw the same content regardless of their role or service status</li>
            <li><span class="cs-pain-dot"></span>Screen reader compatibility was poor across key workflows, creating real barriers for users with disabilities</li>
            <li><span class="cs-pain-dot"></span>Color contrast ratios failed WCAG 2.1 AA thresholds in multiple areas of the interface</li>
            <li><span class="cs-pain-dot"></span>Mobile experience was broken in several places since the original platform was built for desktop only</li>
            <li><span class="cs-pain-dot"></span>Staff spent significant time redirecting users to content they couldn't find on their own</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Accessibility</div>
          <h3 class="cs-section-title">Compliance Was the Floor, Not the Goal</h3>
          <p class="cs-text">As a federal agency, AmeriCorps is required under Section 508 of the Rehabilitation Act and the Americans with Disabilities Act to maintain digital properties that are fully accessible. WCAG 2.1 Level AA compliance was a legal requirement, not a nice-to-have.</p>
          <p class="cs-text">We treated accessibility as a design constraint from the start rather than an audit to run at the end. That meant building with semantic HTML, ensuring full keyboard navigation across all interactive elements, maintaining a minimum 4.5:1 color contrast ratio throughout the UI, providing meaningful alt text and ARIA labels for all non-text content, and testing with screen readers including NVDA and VoiceOver at multiple points during the design and development process.</p>
          <p class="cs-text">The result was a platform that worked for everyone, including users relying on assistive technology, users on older devices with lower-resolution screens, and users in low-bandwidth environments that are common in rural service areas.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">A Modern LMS with Intelligence Built In</h3>
          <p class="cs-text">The redesigned Learning Campus was built on a modern frontend stack, fully responsive across all device types. The most significant improvements came from introducing AI capabilities that fundamentally changed how users interacted with the platform's content library.</p>
          <p class="cs-text"><strong>Natural Language Search (NLP)</strong> replaced the keyword-matching legacy search engine. Users could now type questions in plain language and receive relevant, ranked results. Search understood context and intent rather than just matching strings of text.</p>
          <p class="cs-text"><strong>Machine Learning Recommendations</strong> analyzed each user's role, service status, completion history, and behavior patterns to surface content that was actually relevant to them. The more someone used the platform, the more accurate their recommendations became.</p>
          <p class="cs-text"><strong>AI Chat Interface</strong> gave users a conversational way to navigate the platform, ask questions about their training requirements, and get directed to the right resources without having to know where to look. For users like Diane, who found traditional navigation confusing, this was a significant quality-of-life improvement.</p>
          <p class="cs-text"><strong>Personalized Learning Paths</strong> were generated based on each user's role and service requirements, giving members and volunteers a clear view of what they needed to complete, what they'd already done, and what was recommended next.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">A Platform Built to Scale With the Mission</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">4+</div>
              <div class="cs-outcome-lbl">Distinct user groups researched and designed for</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">AA</div>
              <div class="cs-outcome-lbl">Full WCAG 2.1 Level AA compliance achieved</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">5</div>
              <div class="cs-outcome-lbl">AI-powered features integrated into the platform</div>
            </div>
          </div>
          <p class="cs-text">The new Learning Campus gave AmeriCorps a platform that could grow alongside their network. Staff reported fewer support requests related to content discovery. Members could find what they needed faster and on whatever device they had available. And for the first time, the platform was genuinely accessible to users with disabilities, meeting the federal mandate while also being a better experience for everyone.</p>
        `
      },

      pure_encaps: {
        eyebrow: 'Case Study / E-Commerce / Health and Wellness',
        content: `
          <h2 class="cs-title">Pure Encapsulations</h2>
          <p class="cs-subtitle">Rebuilding a premium supplement storefront around the needs of health-conscious shoppers and the clinicians who recommend products to them, with a mobile-first approach to every design decision.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">E-Commerce</span>
            <span class="cs-meta-tag">Health and Wellness</span>
            <span class="cs-meta-tag">Mobile-First</span>
            <span class="cs-meta-tag">UX Research</span>
            <span class="cs-meta-tag">Conversion Optimization</span>
            <span class="cs-meta-tag">Personalization</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">A Trusted Brand With an Underperforming Digital Shelf</h3>
          <p class="cs-text">Pure Encapsulations has a strong reputation in the professional supplement space. Their products are recommended by healthcare providers and sought out by informed, health-focused consumers who take their wellness seriously. The problem was that the website experience did not reflect that level of care.</p>
          <p class="cs-text">Shoppers were arriving but not converting. Drop-off rates during checkout were a consistent problem. The product catalog was difficult to navigate for someone who did not already know exactly what they were looking for. On mobile, the experience was fragmented enough that shoppers reaching the site from a phone were far less likely to complete a purchase than those on desktop.</p>
          <p class="cs-text">A thorough gap analysis against competitors in the premium supplement space made the shortcomings concrete and gave the project a clear direction.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Two Very Different Audiences, One Shared Experience</h3>
          <p class="cs-text">What made this project distinct from a typical e-commerce redesign was the dual audience. Pure Encapsulations serves both direct consumers and healthcare professionals who recommend products to patients. Both groups use the site, but they come to it with very different needs, different levels of product knowledge, and different purchasing motivations.</p>
          <p class="cs-text">Research included moderated usability sessions with consumers and clinicians separately, quantitative funnel analysis to identify drop-off patterns, cart abandonment surveys, and a detailed review of session recordings to understand where shoppers were getting stuck. The gap analysis layered on what competitors were doing that Pure Encapsulations was not.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Alicia Brennan</div>
              <div class="cs-persona-role">Health-Focused Consumer, 38</div>
              <p class="cs-persona-detail">Alicia was referred to Pure Encapsulations by her naturopath and buys regularly. She shops mostly on her phone and gets frustrated when checkout takes too long or asks for information more than once. She wants to know her order will arrive on time and she reads reviews before trying anything new.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Dr. Kevin Marsh</div>
              <div class="cs-persona-role">Functional Medicine Practitioner, 51</div>
              <p class="cs-persona-detail">Dr. Marsh recommends Pure Encapsulations products to his patients and occasionally orders directly through the site. He needs clinical credibility signals, detailed ingredient information, and a fast way to find specific products without wading through consumer-facing content.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">Where the Experience Was Breaking Down</h3>
          <p class="cs-text">Across both user groups, the research surfaced a consistent set of problems. Some were checkout-specific. Others were earlier in the funnel, affecting whether shoppers could find what they needed in the first place.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>No subscribe and save option despite repeat purchase being a core behavior among loyal customers</li>
            <li><span class="cs-pain-dot"></span>Product detail pages lacked ratings, reviews, and related product recommendations</li>
            <li><span class="cs-pain-dot"></span>Checkout required excessive manual input with no address auto-complete or field intelligence</li>
            <li><span class="cs-pain-dot"></span>Form validation only triggered on submission, creating friction loops that caused abandonment</li>
            <li><span class="cs-pain-dot"></span>Mobile checkout was limited to standard card entry with no accelerated payment options</li>
            <li><span class="cs-pain-dot"></span>Delivery estimates were absent or vague, leaving shoppers uncertain about when orders would arrive</li>
            <li><span class="cs-pain-dot"></span>Navigation was structured around internal categories rather than how shoppers actually search for supplements</li>
            <li><span class="cs-pain-dot"></span>No personalization meant repeat visitors saw the same generic experience every time</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">Mobile-First, Trust-First, Conversion-First</h3>
          <p class="cs-text">The redesign was built mobile-first. Given how much traffic was coming from phones and how poorly that audience was converting, every design decision started from the smallest screen and scaled up.</p>
          <p class="cs-text"><strong>Subscribe and Save</strong> was introduced as a primary purchase option on every product page, giving repeat buyers a convenient reason to commit long-term to a brand built around daily wellness routines.</p>
          <p class="cs-text"><strong>Ratings, Reviews, and Recommendations</strong> addressed the trust gap on product pages. For first-time buyers and for patients arriving on a clinician's recommendation, social proof was doing real work in the conversion decision.</p>
          <p class="cs-text"><strong>Smart Checkout</strong> reduced the steps required to complete a purchase. Address auto-complete, inline validation that caught errors as shoppers typed, and a streamlined form structure made the flow feel faster and more forgiving than before.</p>
          <p class="cs-text"><strong>Accelerated Mobile Payments</strong> added Apple Pay and Google Pay so mobile shoppers could complete a purchase without typing a card number at all, which proved significant for a high-mobile audience.</p>
          <p class="cs-text"><strong>Shipping Transparency</strong> gave shoppers clear delivery windows early in the purchase flow, removing one of the most common reasons for last-minute cart abandonment.</p>
          <p class="cs-text"><strong>Personalization and Navigation</strong> were rebuilt to reflect how people actually look for supplements, with smarter category structures, better filtering, and returning-visitor personalization that surfaced relevant content based on prior behavior.</p>
          <p class="cs-text">The entire visual experience was also redesigned, giving Pure Encapsulations a cleaner, more credible aesthetic that matched the brand's premium clinical positioning across every device.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Process</div>
          <h3 class="cs-section-title">From Sketches to a Scalable Design System</h3>
          <p class="cs-text">Early in the design process, wireframes were used to validate information architecture and page structure before any visual decisions were made. The homepage wireframe went through several rounds of iteration based on usability feedback, ensuring the content hierarchy matched how shoppers actually scanned the page. You can view the homepage wireframe in the screen viewer above.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">A Platform Built for How Shoppers Actually Behave</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">2x</div>
              <div class="cs-outcome-lbl">Distinct audiences designed for simultaneously</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">8+</div>
              <div class="cs-outcome-lbl">Checkout and conversion improvements shipped</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">100%</div>
              <div class="cs-outcome-lbl">Mobile-first design approach across all pages</div>
            </div>
          </div>
          <p class="cs-text">The redesigned site gave both audiences what they needed: consumers got a faster, more trustworthy shopping experience on any device, and clinicians got the credibility signals and detailed product information they relied on. The work resulted in a platform the brand could confidently grow on.</p>
        `
      },

            nescafe: {
        eyebrow: 'Case Study / E-Commerce / Consumer Brand',
        content: `
          <h2 class="cs-title">NESCAFÉ</h2>
          <p class="cs-subtitle">A full e-commerce redesign focused on reducing friction, improving conversion, and giving one of the world's most recognized coffee brands a digital experience worthy of its reputation.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">E-Commerce</span>
            <span class="cs-meta-tag">Consumer Brand</span>
            <span class="cs-meta-tag">UX Research</span>
            <span class="cs-meta-tag">Conversion Optimization</span>
            <span class="cs-meta-tag">Personalization</span>
            <span class="cs-meta-tag">Mobile-First</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">A Brand Shoppers Loved, and a Site That Was Losing Them</h3>
          <p class="cs-text">NESCAFÉ carries enormous brand recognition globally, but their digital storefront wasn't converting at the level the brand deserved. Shoppers were arriving, browsing, and leaving without buying. Drop-off rates during checkout were high. Click-through rates from product listings to product pages were underperforming. And the overall site experience felt dated relative to where consumer expectations had moved.</p>
          <p class="cs-text">The project started with a clear mandate: find where the e-commerce experience was losing people, fix those problems, and redesign the site to match the quality of the brand behind it.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Understanding Where and Why People Were Dropping Off</h3>
          <p class="cs-text">The research combined qualitative and quantitative methods to get a complete picture. On the quantitative side, we analyzed session recordings, funnel drop-off data, heatmaps, and checkout abandonment patterns to identify exactly where users were leaving and what they were doing before they did. On the qualitative side, we ran moderated usability sessions, intercept surveys, and in-depth interviews with coffee buyers across multiple segments.</p>
          <p class="cs-text">A gap analysis compared the NESCAFÉ experience against direct competitors and broader e-commerce benchmarks. Several features that shoppers had come to expect as standard were either missing entirely or implemented poorly enough that they weren't doing their job.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Rachel Torres</div>
              <div class="cs-persona-role">Loyal Repeat Buyer, 34</div>
              <p class="cs-persona-detail">Rachel buys NESCAFÉ regularly and would happily set up automatic deliveries if the option existed. She browses on her phone during her commute and abandons purchases when checkout feels like too many steps. She wants speed, convenience, and to know exactly when her order will arrive.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">David Park</div>
              <div class="cs-persona-role">Consideration-Stage Shopper, 41</div>
              <p class="cs-persona-detail">David is comparing NESCAFÉ against other options. He relies heavily on reviews and ratings before committing to a product. If the product page doesn't give him enough social proof or information, he goes somewhere else. He found out about NESCAFÉ through an ad and landed on the site for the first time.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">What the Research and Gap Analysis Revealed</h3>
          <p class="cs-text">The problems fell into a few clear categories: features that should have been there but weren't, checkout friction that was costing conversions, and an overall design that wasn't meeting modern standards.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>No subscribe and save option, which competitors were offering and shoppers were actively looking for</li>
            <li><span class="cs-pain-dot"></span>Product pages had no ratings, reviews, or recommendations, leaving consideration-stage shoppers without the social proof they needed</li>
            <li><span class="cs-pain-dot"></span>Checkout required too many manual inputs with no address auto-complete or form intelligence</li>
            <li><span class="cs-pain-dot"></span>Form errors only appeared after submission, creating a frustrating back-and-forth for users</li>
            <li><span class="cs-pain-dot"></span>Payment options were limited and the checkout flow was not optimized for mobile</li>
            <li><span class="cs-pain-dot"></span>Shipping timelines were vague, making buyers hesitant to complete a purchase</li>
            <li><span class="cs-pain-dot"></span>Navigation made it difficult to find specific product types quickly</li>
            <li><span class="cs-pain-dot"></span>The visual design felt inconsistent with the premium positioning of the brand</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">Reducing Every Point of Friction Between Intent and Purchase</h3>
          <p class="cs-text">The redesign addressed every problem the research surfaced. Features were prioritized by their projected impact on conversion and drop-off rates, then designed and tested iteratively before launch.</p>
          <p class="cs-text"><strong>Subscribe and Save</strong> was introduced as a first-class feature, giving repeat buyers like Rachel a reason to commit to the brand long-term. It was surfaced prominently on product pages rather than hidden in account settings.</p>
          <p class="cs-text"><strong>Ratings, Reviews, and Recommendations</strong> were added to every product detail page. For shoppers in the consideration phase, this was the difference between buying and bouncing. Contextual product recommendations encouraged larger basket sizes and helped users discover products they hadn't searched for.</p>
          <p class="cs-text"><strong>Smarter Forms and Checkout</strong> reduced the manual work required to complete a purchase. Address auto-complete cut down on input errors and time spent typing. Inline validation flagged problems as users filled out fields rather than waiting until they hit submit. The result was a checkout flow that felt fast and forgiving rather than slow and punishing.</p>
          <p class="cs-text"><strong>Accelerated and Mobile-First Payments</strong> added support for Apple Pay, Google Pay, and other accelerated payment methods that let mobile shoppers complete a purchase in seconds rather than minutes. The entire checkout flow was re-architected with mobile as the primary context.</p>
          <p class="cs-text"><strong>Shipping Transparency</strong> gave shoppers clear, specific delivery estimates on product pages and throughout checkout. Removing that uncertainty made a measurable difference in completion rates.</p>
          <p class="cs-text"><strong>Navigation and Personalization</strong> were updated to make product discovery faster and more relevant. Returning shoppers saw content and recommendations tailored to their browsing and purchase history. New visitors were guided more effectively toward the products most likely to match their needs.</p>
          <p class="cs-text">All of this was delivered inside a completely redesigned visual experience that finally matched the quality of the NESCAFÉ brand, with a modern aesthetic, cleaner typography, and a design system built to scale across markets.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">Results Measured Within the First 3 Months</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">15%</div>
              <div class="cs-outcome-lbl">Increase in click-through rates</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">20%</div>
              <div class="cs-outcome-lbl">Reduction in drop-off rates</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">3mo</div>
              <div class="cs-outcome-lbl">Time to measurable results post-launch</div>
            </div>
          </div>
          <p class="cs-text">Both headline metrics moved in the right direction within the first quarter of launch. The 15% lift in click-through rates reflected how much the updated product pages and navigation changes improved the path from browsing to buying. The 20% reduction in drop-off rates was a direct result of the checkout improvements reducing friction at the moments when shoppers were most likely to give up. The work gave NESCAFÉ an e-commerce experience that held up to the brand's global standing.</p>
        `
      },


      pet_perks: {
        eyebrow: 'Case Study / Mobile / Consumer Loyalty',
        content: `
          <h2 class="cs-title">MyPurina Pet Perks</h2>
          <p class="cs-subtitle">Building a brand-new loyalty rewards platform from scratch for one of the world's largest pet care brands, closing a competitive gap that had been leaving pet owners with fewer reasons to stay loyal to Purina.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">Mobile</span>
            <span class="cs-meta-tag">iOS / Android</span>
            <span class="cs-meta-tag">Loyalty Platform</span>
            <span class="cs-meta-tag">0 to 1</span>
            <span class="cs-meta-tag">Consumer</span>
            <span class="cs-meta-tag">UX Research</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">A Gap Competitors Had Already Filled</h3>
          <p class="cs-text">Purina had the brand recognition, the product quality, and the customer base. What they didn't have was a loyalty program. Competing pet care brands had already built reward ecosystems that gave shoppers tangible reasons to keep coming back. Purina customers were loyal by preference, but there was nothing reinforcing that loyalty or making it feel rewarding.</p>
          <p class="cs-text">This was a 0-to-1 initiative. There was no existing platform to redesign or improve. The entire product had to be conceived, researched, and built from the ground up, which meant every decision about what to include, how it should work, and how it should feel was made fresh.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Understanding What Pet Owners Actually Want From a Loyalty App</h3>
          <p class="cs-text">Because there was no existing Purina loyalty product to evaluate, the research focused on two things: understanding the behavior and expectations of Purina's existing customers, and studying what was working in the loyalty programs pet care competitors had already launched.</p>
          <p class="cs-text">We ran surveys, conducted moderated usability sessions using competitor loyalty apps as reference points, and held in-depth interviews with pet owners across different household types. The goal was to understand what motivated repeat purchases, what made loyalty programs feel worth engaging with, and where existing programs in the category were falling short.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Jasmine Cole</div>
              <div class="cs-persona-role">Millennial Dog Owner, 31</div>
              <p class="cs-persona-detail">Jasmine has two dogs and buys Purina Pro Plan consistently. She's active on her phone and already uses loyalty apps for coffee and groceries. She would engage with a Purina rewards app if the earn-and-redeem experience felt genuinely worthwhile, not just like a discount coupon dressed up as a program.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Robert Haines</div>
              <div class="cs-persona-role">Cat Owner, 58</div>
              <p class="cs-persona-detail">Robert has been buying Fancy Feast for years and is not a big app user. He would try a loyalty app if getting started was simple and the benefits were clear upfront. A complicated signup or an app that requires too much maintenance would lose him immediately.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">What the Research Revealed</h3>
          <p class="cs-text">Even without an existing Purina app to evaluate, the research surfaced clear expectations and known failure modes from the category.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>Purina had no loyalty mechanism to reward repeat purchasers, creating zero switching cost for customers who might try a competitor's product</li>
            <li><span class="cs-pain-dot"></span>Competitor loyalty apps were seen as overly complicated by less tech-savvy pet owners, with too many steps to earn and redeem</li>
            <li><span class="cs-pain-dot"></span>Users wanted their pets to feel central to the experience, not just their shopping cart</li>
            <li><span class="cs-pain-dot"></span>Receipt scanning was cited as the preferred way to earn points, but only if it worked reliably and confirmed quickly</li>
            <li><span class="cs-pain-dot"></span>Generic reward catalogs felt impersonal; pet owners wanted offers that made sense for their specific animal and the products they actually bought</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">A Pet-First Loyalty Experience Built Around the Relationship, Not Just the Transaction</h3>
          <p class="cs-text">The core design principle was that the app should feel like it's for pet owners first and a loyalty program second. The pet profile feature made that tangible: users set up profiles for their individual pets, which then shaped what content, offers, and recommendations they saw throughout the app.</p>
          <p class="cs-text"><strong>Points and Receipt Scanning</strong> gave users an easy path to earning. Scanning a receipt from any retailer that sold Purina products earned 10 points per dollar. The confirmation flow was designed to be fast and reassuring, since uncertainty about whether a scan worked was a top frustration with competitor apps.</p>
          <p class="cs-text"><strong>Rewards Catalog</strong> offered a range of redemption options from product coupons to partner experiences like cat sitting discounts through Meowtel and streaming access through DOGTV. The range gave both the Jasmines and the Roberts of the user base something worth working toward.</p>
          <p class="cs-text"><strong>Discover Section</strong> surfaced personalized content based on each user's pet profile, including tips, articles, challenges, and bonus point opportunities. This gave users a reason to open the app even when they weren't actively shopping.</p>
          <p class="cs-text"><strong>Simplified Onboarding</strong> was a deliberate priority. The first-time experience was designed to get users to their first earned points as quickly as possible, with pet profile setup structured as an optional but rewarding step rather than a mandatory gate.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">Closing the Gap on a Category-Wide Expectation</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">0→1</div>
              <div class="cs-outcome-lbl">Full product built from concept to launch</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">5</div>
              <div class="cs-outcome-lbl">Core app sections designed and shipped</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">2x</div>
              <div class="cs-outcome-lbl">Distinct user types designed for simultaneously</div>
            </div>
          </div>
          <p class="cs-text">MyPurina Pet Perks gave the brand its first direct digital relationship with its customers. Where Purina previously had no mechanism to reward loyalty, they now had a platform built around the thing that actually motivates pet owners: the bond with their animals. The app closed a meaningful competitive gap and gave Purina a foundation to build a genuine loyalty ecosystem on top of.</p>
        `
      },

      landstar_one: {
        eyebrow: 'Case Study / Mobile / Enterprise Logistics',
        content: `
          <h2 class="cs-title">Landstar One</h2>
          <p class="cs-subtitle">A new mobile platform that put fuel savings, load discovery, trip planning, and road intelligence into a single app for Landstar drivers who were previously managing all of it across disconnected tools or not at all from their phone.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">Mobile</span>
            <span class="cs-meta-tag">iOS / Android</span>
            <span class="cs-meta-tag">Enterprise</span>
            <span class="cs-meta-tag">Logistics</span>
            <span class="cs-meta-tag">0 to 1</span>
            <span class="cs-meta-tag">UX Research</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">Too Much to Manage, No Single Place to Do It</h3>
          <p class="cs-text">Landstar owner operators run independent businesses on the road. On any given day they need to find and claim loads, locate fuel stops with Landstar discount pricing, track their fuel spend over time, navigate routes, and find truck stops that have the specific amenities they need. Before Landstar One, none of this existed in a unified mobile product.</p>
          <p class="cs-text">Drivers were cobbling together a mix of desktop tools, third-party apps, and phone calls to accomplish tasks that should have been accessible from one place on the device already in their hand. The opportunity was clear: consolidate the most critical driver workflows into a single mobile experience built around how drivers actually work.</p>
          <p class="cs-text">The same adoption challenge from the desktop Available Loads redesign was present here too. Some drivers are comfortable adopting new technology quickly. Others are skeptical of change and need an experience that proves its value without demanding a steep learning curve.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Designing for a Cab, Not a Conference Room</h3>
          <p class="cs-text">Research for Landstar One built on insights gathered during the desktop Available Loads redesign, including conversations with owner operators at Landstar's BCO Appreciation Event. For the mobile product, additional focus was placed on understanding the in-cab context: how drivers interact with their phone while managing a route, when they need information most urgently, and what interrupts their workflow when apps don't work the way they expect.</p>
          <p class="cs-text">The dual user type pattern held here as well. Tech-comfortable drivers wanted depth and control. Less tech-comfortable drivers wanted clarity and minimal steps to accomplish the task in front of them.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Marcus Tate</div>
              <div class="cs-persona-role">Tech-Savvy BCO, 8 Years</div>
              <p class="cs-persona-detail">Marcus runs a tight operation and wants as much data and control at his fingertips as possible. He's already using several apps to manage different parts of his day and would consolidate into one if it was powerful enough. He wants fuel analytics he can actually act on and a load board that works well on a small screen.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Gary Pruitt</div>
              <div class="cs-persona-role">Non-Tech BCO, 14 Years</div>
              <p class="cs-persona-detail">Gary has been driving for Landstar for over a decade and prefers a phone call to an app when he has the choice. He'll use a mobile tool if it solves a specific problem faster than the alternative, but he has no patience for apps that hide what he needs behind too many taps or unfamiliar patterns.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">What Drivers Were Missing</h3>
          <p class="cs-text">The research made it clear that drivers weren't just underserved by the existing tools. They were actively working around the gaps every day, which cost them time and money.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>No mobile way to find fuel stops with Landstar discount pricing displayed, forcing drivers to estimate or call ahead</li>
            <li><span class="cs-pain-dot"></span>No fuel analytics to track spending patterns and identify savings opportunities over time</li>
            <li><span class="cs-pain-dot"></span>Available loads were only accessible on desktop, making it impossible to find and claim freight from the road without a laptop</li>
            <li><span class="cs-pain-dot"></span>No map or geo tool built around truck-specific routes and stopping points</li>
            <li><span class="cs-pain-dot"></span>Finding truck stops with specific amenities required checking multiple sources with no guarantee of accurate information</li>
            <li><span class="cs-pain-dot"></span>Less tech-savvy drivers were unlikely to adopt a mobile tool unless the first-use experience was immediately intuitive</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">One App for Everything That Matters on the Road</h3>
          <p class="cs-text">Landstar One was designed around a simple navigation structure that gave drivers fast access to the four core functions without requiring them to dig through menus or learn new patterns.</p>
          <p class="cs-text"><strong>Find a Load</strong> brought the Available Loads experience to mobile in a format optimized for a phone screen. List and map views let drivers see what was available near them, with filters for equipment type, distance, and pickup timing. The same clarity improvements made in the desktop redesign were carried through to the mobile version.</p>
          <p class="cs-text"><strong>Find Fuel Stops</strong> was the feature that generated the most immediate enthusiasm during testing. Drivers could see nearby fuel stations on a map with Landstar discount pricing displayed in real time, compared against the pump price so the savings were immediately visible. Station detail pages showed amenities, hours, and directions.</p>
          <p class="cs-text"><strong>Fuel Analytics</strong> gave drivers a view of their fuel spending over time, with breakdowns by trip and location. For drivers like Marcus who were already tracking this manually, it replaced a spreadsheet. For drivers like Gary, it surfaced information they never had easy access to before.</p>
          <p class="cs-text"><strong>Map and Navigation</strong> provided geo-aware context across the app, surfacing relevant stops and load opportunities based on where the driver actually was and where they were headed.</p>
          <p class="cs-text">Onboarding was designed to be low-friction, with a guest access option that let skeptical drivers explore the app before committing to a login. The navigation structure was tested with both user types until both could complete core tasks without instruction.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">A Mobile Command Center for Owner Operators</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">0→1</div>
              <div class="cs-outcome-lbl">Complete mobile product built from scratch</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">4</div>
              <div class="cs-outcome-lbl">Core feature modules shipped at launch</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">2x</div>
              <div class="cs-outcome-lbl">User types accommodated in a single navigation model</div>
            </div>
          </div>
          <p class="cs-text">Landstar One gave owner operators a mobile product that was genuinely useful from day one. Drivers who had been calling dispatchers to find fuel discounts could now see them on a map in seconds. Drivers who had never been able to access the load board from their phone could do it from the cab of their truck. The app turned a collection of disconnected workarounds into a single, coherent tool built for the way drivers actually spend their days.</p>
        `
      },

      nestle_hub: {
        eyebrow: 'Case Study / Mobile / Healthcare B2B',
        content: `
          <h2 class="cs-title">Nestlé Health Science Medical Hub</h2>
          <p class="cs-subtitle">Consolidating multiple separate mobile applications and non-mobile features into one unified app for healthcare professionals, giving clinicians a single place to find everything they need from Nestlé Health Science.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">Mobile</span>
            <span class="cs-meta-tag">iOS / Android</span>
            <span class="cs-meta-tag">Healthcare</span>
            <span class="cs-meta-tag">B2B</span>
            <span class="cs-meta-tag">0 to 1</span>
            <span class="cs-meta-tag">Clinical UX</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">Multiple Apps Where There Should Have Been One</h3>
          <p class="cs-text">Nestlé Health Science serves healthcare professionals with a broad portfolio of clinical nutrition products, continuing education resources, peer-reviewed publications, patient support materials, sample ordering, and reimbursement guidance. Before the Medical Hub, these capabilities were scattered across separate mobile applications, desktop-only tools, and in some cases had no mobile presence at all.</p>
          <p class="cs-text">For a busy clinician, this fragmentation was a real problem. Finding product information meant opening one app. Accessing continuing education meant going somewhere else. Ordering samples required a desktop. The cognitive cost of knowing which resource lived where was friction that often led clinicians to simply reach out to a sales rep instead, which wasn't efficient for anyone.</p>
          <p class="cs-text">The initiative was clear: build a single mobile application that consolidated everything a healthcare professional needed from Nestlé Health Science into one coherent, credible, easy-to-navigate experience.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Understanding How Clinicians Actually Access Information</h3>
          <p class="cs-text">Research for the Medical Hub focused on the specific context in which healthcare professionals use mobile tools at work. Clinicians are time-constrained in ways most users aren't. A dietitian reaching for their phone between patient appointments needs to find what they're looking for in seconds, not navigate through an unfamiliar interface under time pressure.</p>
          <p class="cs-text">We conducted interviews with registered dietitians, physicians, nurses, and clinical pharmacists. We looked at how they currently accessed clinical nutrition information, what their existing mobile habits were, and what would make a Nestlé Health Science app genuinely worth keeping on their phone rather than deleting after one use.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Dr. Priya Nair</div>
              <div class="cs-persona-role">Internal Medicine Physician, 44</div>
              <p class="cs-persona-detail">Dr. Nair recommends Nestlé products to patients with specific nutritional needs and wants fast access to formulation details and clinical evidence. She has no patience for apps that feel designed for consumers rather than clinicians. If the information isn't credible and quickly accessible, she'll go to a printed reference instead.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Sofia Reyes, RD</div>
              <div class="cs-persona-role">Registered Dietitian, 33</div>
              <p class="cs-persona-detail">Sofia uses Nestlé products frequently in her clinical practice and actively seeks out continuing education opportunities. She currently uses two separate apps and a desktop tool to access what she needs. She would value a unified app if it meant she could order samples and access CE credits without switching contexts repeatedly.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">Where the Fragmentation Was Costing Clinicians</h3>
          <p class="cs-text">The research confirmed what the product team suspected: the fragmented app landscape was creating real friction and, in some cases, causing clinicians to disengage from Nestlé Health Science resources entirely.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>Multiple separate apps meant multiple downloads, logins, and mental models to maintain</li>
            <li><span class="cs-pain-dot"></span>Continuing education and articles and publications had no mobile access, forcing clinicians to a desktop for content they wanted to read on the go</li>
            <li><span class="cs-pain-dot"></span>Sample ordering required a desktop workflow that felt incompatible with a clinical environment where mobile was the primary device</li>
            <li><span class="cs-pain-dot"></span>The product catalog in existing apps lacked the clinical depth that physicians and dietitians needed to make confident recommendations</li>
            <li><span class="cs-pain-dot"></span>Patient resources were not mobile-accessible, limiting the ability to share materials with patients during an appointment</li>
            <li><span class="cs-pain-dot"></span>Clinician tools such as reference charts and assessment instruments existed only as downloadable PDFs with no interactive or mobile-optimized version</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">One App, Every Resource, Built for Clinical Credibility</h3>
          <p class="cs-text">The Medical Hub was architected around a home screen grid that gave clinicians immediate visual access to every capability in the app. The structure was intentionally simple: seven clearly labeled sections, each opening into the relevant content or workflow, with no deep nesting or complex navigation to learn.</p>
          <p class="cs-text"><strong>Product Catalog</strong> consolidated 93 products across all Nestlé Health Science brands into a searchable, filterable catalog with clinical-depth product detail pages. Each product page included key benefits, nutrition facts, ingredient lists, allergen information, suitable diets, and DRI coverage, all in a format designed for a clinician rather than a consumer.</p>
          <p class="cs-text"><strong>Continuing Education</strong> brought CE content into the app for the first time, giving clinicians like Sofia access to accredited courses directly from their phone. This addressed one of the most frequently cited gaps from the research.</p>
          <p class="cs-text"><strong>Articles and Publications</strong> gave the clinical community access to peer-reviewed research and Nestlé-produced content, searchable and readable on mobile.</p>
          <p class="cs-text"><strong>Patient Resources</strong> gave clinicians shareable materials they could pull up during or after an appointment, removing the need to print or email documents separately.</p>
          <p class="cs-text"><strong>Clinician Tools</strong> digitized 19 reference tools and assessment instruments that previously existed only as static PDF downloads, making them interactive and mobile-accessible for the first time.</p>
          <p class="cs-text"><strong>Samples and Reimbursement Support</strong> rounded out the app with ordering and financial guidance workflows that clinicians previously had to complete on desktop. Having these in the app meant a complete Nestlé Health Science interaction could happen entirely from a phone.</p>
          <p class="cs-text">Throughout, the visual design maintained the clinical tone and credibility the Nestlé Health Science brand required. This was not a consumer wellness app. Every design decision reinforced the sense that the people who built it understood what healthcare professionals needed.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">One App That Replaced Several</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">7</div>
              <div class="cs-outcome-lbl">Feature modules consolidated into one app</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">93</div>
              <div class="cs-outcome-lbl">Products in the mobile catalog at launch</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">19</div>
              <div class="cs-outcome-lbl">Clinician tools digitized from static PDFs</div>
            </div>
          </div>
          <p class="cs-text">The Medical Hub gave Nestlé Health Science a single mobile presence worthy of the brand's clinical standing. For clinicians, it meant the end of jumping between apps and desktop tools to access information that should have always been in one place. The app became a genuine working tool for healthcare professionals, not just a marketing vehicle, which is the only standard that matters in clinical UX.</p>
        `
      },

      landstar_available: {
        eyebrow: 'Case Study — Enterprise UX',
        content: `
          <h2 class="cs-title">Landstar Available Loads</h2>
          <p class="cs-subtitle">Modernizing a legacy freight platform so owner operators can find and manage loads more safely, more efficiently, and without fighting the software to do it.</p>
          <div class="cs-meta-row">
            <span class="cs-meta-tag">Enterprise</span>
            <span class="cs-meta-tag">UX Research</span>
            <span class="cs-meta-tag">Web App</span>
            <span class="cs-meta-tag">Design System</span>
            <span class="cs-meta-tag">Logistics</span>
          </div>

          <div class="cs-section-label">The Problem</div>
          <h3 class="cs-section-title">A Critical Tool That Was Falling Behind</h3>
          <p class="cs-text">Landstar's Available Loads system is one of the most important tools in their operation. Owner operators rely on it daily to find and claim freight. The problem was that the existing system was a legacy application, not mobile friendly, and visually outdated. Competing platforms had started offering features that Landstar's system simply didn't have, and drivers were noticing.</p>
          <p class="cs-text">The ask was straightforward: redesign the platform to meet modern standards, close the gap on competitor features, and make it something drivers actually enjoy using.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Research</div>
          <h3 class="cs-section-title">Talking to the People Who Actually Drive</h3>
          <p class="cs-text">Before touching any designs, I spent time with owner operators directly. Landstar's annual BCO Appreciation Event was a great opportunity to have real conversations, and we also ran structured surveys to capture a broader picture. Two clear user types emerged pretty quickly.</p>

          <div class="cs-personas">
            <div class="cs-persona">
              <div class="cs-persona-name">Joey Jenkins</div>
              <div class="cs-persona-role">Expert BCO, 12 Years</div>
              <p class="cs-persona-detail">Joey and his wife run their operation together. She handles dispatch while he drives. He's comfortable with technology and wants more power from his tools. His concern is that competitors are offering capabilities Landstar isn't, and that gap costs him time and money.</p>
            </div>
            <div class="cs-persona">
              <div class="cs-persona-name">Franklin Richards</div>
              <div class="cs-persona-role">Intermediate BCO, 3 Years</div>
              <p class="cs-persona-detail">Franklin runs his business solo and handles everything from dispatch to driving. He's not a tech person and mainly uses his phone for calls. His concern is simple: when software requires too many steps to do something basic, he moves slower and that affects his income.</p>
            </div>
          </div>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Pain Points</div>
          <h3 class="cs-section-title">What Drivers Were Actually Asking For</h3>
          <p class="cs-text">Both user groups shared a core frustration: the current system wasn't built around how they actually work. Drivers are on the road for days at a time, often in motion, and the app wasn't built to support that reality.</p>
          <ul class="cs-pain-list">
            <li><span class="cs-pain-dot"></span>No alerts or reminders for upcoming pickup and drop-off windows</li>
            <li><span class="cs-pain-dot"></span>Making and receiving calls while driving was unnecessarily difficult</li>
            <li><span class="cs-pain-dot"></span>No way to locate nearby rest stops or see what amenities were available</li>
            <li><span class="cs-pain-dot"></span>No fuel finder showing stations with Landstar discount pricing</li>
            <li><span class="cs-pain-dot"></span>No vehicle diagnostics or alerts to catch issues before they become problems</li>
          </ul>

          <div class="cs-divider"></div>

          <div class="cs-section-label">The Solution</div>
          <h3 class="cs-section-title">Built Around the Drive, Not the Desk</h3>
          <p class="cs-text">The redesign prioritized the tasks drivers perform most often and moved everything else to secondary flows. A cleaner information architecture reduced the number of steps needed to find and claim a load. The new interface was built mobile-first with responsive breakpoints so it worked properly on the phones and tablets drivers use in their cabs.</p>
          <p class="cs-text">New features were added based directly on what drivers asked for during research: a fuel stop finder with Landstar discount pricing baked in, pickup and delivery alerts, and a streamlined load management experience that reduced cognitive load for drivers who are already managing a lot at once.</p>
          <p class="cs-text">Visual design followed Landstar's existing brand standards while introducing a more modern, readable UI with better hierarchy and contrast for use in varying light conditions on the road.</p>

          <div class="cs-divider"></div>

          <div class="cs-section-label">Outcome</div>
          <h3 class="cs-section-title">Where the Work Landed</h3>
          <div class="cs-outcomes">
            <div class="cs-outcome">
              <div class="cs-outcome-num">2</div>
              <div class="cs-outcome-lbl">Distinct user types researched and designed for</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">5+</div>
              <div class="cs-outcome-lbl">New features added based on direct driver feedback</div>
            </div>
            <div class="cs-outcome">
              <div class="cs-outcome-num">100%</div>
              <div class="cs-outcome-lbl">Mobile responsive, from legacy desktop-only system</div>
            </div>
          </div>
          <p class="cs-text">The redesigned system gave Landstar a platform they could be proud of putting in front of their driver network. For the drivers, it meant a tool that finally worked the way they needed it to, on the device they had in hand, without slowing them down.</p>
        `
      }

    };

    function openCs(key) {
      const cs = CASE_STUDIES[key];
      if (!cs) return;
      document.getElementById('cs-eyebrow').textContent = cs.eyebrow;
      document.getElementById('cs-body').innerHTML = cs.content;
      document.getElementById('cs-body').scrollTop = 0;
      document.getElementById('cs-lightbox').classList.add('open');
      document.body.classList.add('cs-open');
    }

    function closeCs() {
      document.getElementById('cs-lightbox').classList.remove('open');
      document.body.classList.remove('cs-open');
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('cs-lightbox').classList.contains('open')) {
        closeCs();
      }
    });
  </script>

  <script>
    // ═══════════════════════════════════════════════════
    // PROJECT SCREENS DATA
    // ═══════════════════════════════════════════════════
    const PROJECT_SCREENS = {
      americorps: {
        title: 'AmeriCorps Learning Campus',
        images: [
          'assets/americorps/screen1.jpg',
          'assets/americorps/screen2.jpg',
          'assets/americorps/screen3.jpg',
          'assets/americorps/wireframe.jpg'
        ],
        labels: ['Homepage', 'SCALER Tool', 'Search Results', 'Wireframe'],
        currentIdx: 0
      },
      nescafe: {
        title: 'NESCAFÉ',
        images: [
          'assets/nescafe/home.jpg',
          'assets/nescafe/sustainability.jpg',
          'assets/nescafe/plp.jpg',
          'assets/nescafe/wireframe.jpg'
        ],
        labels: ['Homepage', 'Sustainability', 'All Products', 'Wireframe'],
        currentIdx: 0
      },
      pureencaps: {
        title: 'Pure Encapsulations',
        images: [
          'assets/pure-encapsulations/home.jpg',
          'assets/pure-encapsulations/plp.jpg',
          'assets/pure-encapsulations/glossary.jpg',
          'assets/pure-encapsulations/wireframe.jpg'
        ],
        labels: ['Homepage', 'All Products', 'PureGlossary', 'Wireframe'],
        currentIdx: 0
      },
      landstar: {
        title: 'Landstar Available Loads',
        images: [
          'assets/landstar/new_load.jpg',
          'assets/landstar/results.jpg',
          'assets/landstar/menu_slide.jpg',
          'assets/landstar/wireframe.jpg'
        ],
        labels: ['Create New Load', 'Load Results', 'Menu View', 'Wireframe'],
        currentIdx: 0
      },
      purina: {
        title: 'MyPurina Pet Perks',
        images: [
          'assets/purina/home.jpg',
          'assets/purina/my_pets.jpg',
          'assets/purina/receipt.jpg',
          'assets/purina/rewards.jpg',
          'assets/purina/discover.jpg'
        ],
        labels: ['Home', 'My Pets', 'Upload Receipt', 'Rewards', 'Discover'],
        currentIdx: 0
      },
      nestle: {
        title: 'Nestlé Health Science Medical Hub',
        images: [
          'assets/nestle/home.jpg',
          'assets/nestle/catalog.jpg',
          'assets/nestle/pdp.jpg',
          'assets/nestle/clinician_tools.jpg'
        ],
        labels: ['Home', 'Product Catalog', 'Product Detail', 'Clinician Tools'],
        currentIdx: 0
      },
      landstarone: {
        title: 'Landstar One',
        images: [
          'assets/landstar-one/home.jpg',
          'assets/landstar-one/map.jpg',
          'assets/landstar-one/map_2.jpg',
          'assets/landstar-one/fuel.jpg',
          'assets/landstar-one/details.jpg',
          'assets/landstar-one/menu.jpg'
        ],
        labels: ['Home', 'Map', 'Map + List', 'Fuel Stops', 'Station Detail', 'Menu'],
        currentIdx: 0
      }
    };

    // ─── Phone screen thumbnail switcher ───
    function setPhoneScreen(projectKey, idx) {
      const p = PROJECT_SCREENS[projectKey];
      if (!p) return;
      p.currentIdx = idx;
      const imgEl    = document.getElementById(projectKey + '-img');
      const scrollEl = document.getElementById(projectKey + '-scroll');
      if (imgEl) {
        imgEl.classList.add('switching');
        setTimeout(() => {
          imgEl.src = p.images[idx];
          imgEl.onload = () => imgEl.classList.remove('switching');
        }, 150);
      }
      if (scrollEl) scrollEl.scrollTop = 0;
      document.querySelectorAll('[data-project="' + projectKey + '"].screen-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });
    }

    // ─── Thumbnail switcher ───
    function setScreen(projectKey, idx) {
      const p = PROJECT_SCREENS[projectKey];
      if (!p) return;
      p.currentIdx = idx;
      const imgEl = document.getElementById(projectKey + '-img');
      if (imgEl) {
        imgEl.classList.add('switching');
        setTimeout(() => {
          imgEl.src = p.images[idx];
          imgEl.onload = () => imgEl.classList.remove('switching');
        }, 150);
      }
      // Reset scroll to top on switch
      const scrollEl = document.getElementById(projectKey + '-scroll');
      if (scrollEl) scrollEl.scrollTop = 0;
      // Update active thumb
      document.querySelectorAll('[data-project="' + projectKey + '"].screen-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });
    }

    // ─── Lightbox ───
    let lbImages = [], lbIdx = 0, lbTitle = '';

    function openLb(projectKeyOrImages, startIdx, titleOverride) {
      let images, title;
      if (typeof projectKeyOrImages === 'string') {
        const p = PROJECT_SCREENS[projectKeyOrImages];
        images = p ? p.images : [projectKeyOrImages];
        title  = titleOverride || (p ? p.title : '');
        startIdx = startIdx !== undefined ? startIdx : (p ? p.currentIdx : 0);
      } else {
        images = projectKeyOrImages;
        title  = titleOverride || '';
      }
      lbImages = images;
      lbIdx    = startIdx || 0;
      lbTitle  = title;
      document.getElementById('lightbox').classList.add('open');
      document.body.classList.add('lb-open');
      document.body.style.overflow = 'hidden';
      renderLb();
    }

    function closeLb() {
      document.getElementById('lightbox').classList.remove('open');
      document.body.classList.remove('lb-open');
      document.body.style.overflow = '';
    }

    function renderLb() {
      const img     = document.getElementById('lb-img');
      const counter = document.getElementById('lb-counter');
      const titleEl = document.getElementById('lb-title');
      const footer  = document.getElementById('lb-footer');
      const body    = document.getElementById('lb-body');

      img.src = lbImages[lbIdx];
      titleEl.textContent  = lbTitle;
      counter.textContent  = lbImages.length > 1 ? `${lbIdx + 1} / ${lbImages.length}` : '';
      body.scrollTop = 0;

      if (lbImages.length > 1) {
        const p = Object.values(PROJECT_SCREENS).find(x => x.images === lbImages);
        const labels = p ? p.labels : [];
        footer.innerHTML = lbImages.map((src, i) =>
          `<div class="lb-thumb ${i === lbIdx ? 'active' : ''}" onclick="lbGoto(${i})">
            <img src="${src}" alt="${labels[i] || ''}">
          </div>`
        ).join('') +
        `<div class="lb-nav">
          <button onclick="prevLb()" title="Previous (←)">&#8592;</button>
          <button onclick="nextLb()" title="Next (→)">&#8594;</button>
        </div>`;
      } else {
        footer.innerHTML = '';
      }
    }

    function lbGoto(i) { lbIdx = i; renderLb(); }
    function prevLb()  { if (lbIdx > 0) { lbIdx--; renderLb(); } }
    function nextLb()  { if (lbIdx < lbImages.length - 1) { lbIdx++; renderLb(); } }

    document.addEventListener('keydown', e => {
      const lb = document.getElementById('lightbox');
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLb();
      if (e.key === 'ArrowLeft')   prevLb();
      if (e.key === 'ArrowRight')  nextLb();
    });

    // ═══════════════════════════════════════════════════
    // CURSOR
    // ═══════════════════════════════════════════════════
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');

    // Disable custom cursor on touch/pointer-coarse devices (iPad, mobile)
    const isTouch = window.matchMedia('(pointer: coarse)').matches
                 || ('ontouchstart' in window)
                 || (navigator.maxTouchPoints > 0);

    if (isTouch) {
      cursor.style.display = 'none';
      ring.style.display   = 'none';
      document.body.style.cursor = 'auto';
    } else {
      let mx = 0, my = 0, rx = 0, ry = 0;

      document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        // Use transform — GPU composited, no layout reflow
        cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      });

      (function animRing() {
        rx += (mx - rx) * 0.11;
        ry += (my - ry) * 0.11;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(animRing);
      })();

      document.querySelectorAll('a,button,.proj-card,.phone-item,.screen-thumb,.lb-thumb,.imac-view-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width = '18px'; cursor.style.height = '18px';
          ring.style.width = '64px';  ring.style.height = '64px';
          ring.style.borderColor = 'rgba(0,255,204,.8)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.width = '8px';  cursor.style.height = '8px';
          ring.style.width = '40px';   ring.style.height = '40px';
          ring.style.borderColor = 'rgba(0,255,204,.45)';
        });
      });
    }

    // ═══════════════════════════════════════════════════
    // NAV + PROGRESS + FULL PARALLAX
    // ═══════════════════════════════════════════════════
    const nav = document.getElementById('nav');
    const bar = document.getElementById('progress-bar');

    // Collect all parallax targets
    const parallaxImacs  = document.querySelectorAll('.parallax-imac');
    const parallaxPhones = document.querySelectorAll('.parallax-phone');
    const heroPhoto = document.getElementById('hero-photo');

    function getRelativeProgress(el) {
      const rect = el.getBoundingClientRect();
      const wh   = window.innerHeight;
      // 0 = element entering bottom, 1 = element leaving top
      return 1 - (rect.bottom / (wh + rect.height));
    }

    window.addEventListener('scroll', () => {
      const s   = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      bar.style.width = ((s / max) * 100) + '%';
      nav.classList.toggle('scrolled', s > 80);

      // ── Hero parallax ──
      if (s < window.innerHeight * 1.5) {
        const hc = document.getElementById('hero-content');
        if (hc) {
          hc.style.transform = `translateY(${s * 0.28}px)`;
          hc.style.opacity   = Math.max(0, 1 - s / (window.innerHeight * 0.8));
        }
        if (heroPhoto) {
          heroPhoto.style.transform = `translateY(${s * 0.11}px)`;
          heroPhoto.style.opacity   = Math.max(0, 1 - s / (window.innerHeight * 0.88));
        }
        document.getElementById('orb1').style.transform = `translateY(${s * 0.06}px)`;
        document.getElementById('orb2').style.transform = `translateY(${s * 0.10}px)`;
        document.getElementById('orb3').style.transform = `translateY(${s * 0.05}px)`;
      }

      // ── iMac parallax: rises as you scroll into view ──
      parallaxImacs.forEach(el => {
        const p = getRelativeProgress(el);
        if (p < -0.1 || p > 1.1) return; // out of view
        const lift = p * -55; // floats up to 55px as you scroll past
        el.style.transform = `translateY(${lift}px)`;
      });

      // ── Phone parallax: slightly different speed for visual interest ──
      parallaxPhones.forEach(el => {
        const p = getRelativeProgress(el);
        if (p < -0.1 || p > 1.1) return;
        const lift = p * -40;
        el.style.transform = `translateY(${lift}px)`;
      });

    }, { passive: true });

    // ═══════════════════════════════════════════════════
    // SCROLL REVEAL
    // ═══════════════════════════════════════════════════
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

    // ═══════════════════════════════════════════════════
    // SMOOTH NAV ANCHORS
    // ═══════════════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
    // ── AUTO-UPDATE COPYRIGHT YEAR ──
    document.getElementById('copy-year').textContent = new Date().getFullYear();
  </script>
