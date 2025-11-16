# HDSkin: How I 10x'd Daily Orders by Fixing What Marketing Couldn't

## The Problem They Thought They Had vs. The Problem They Actually Had

**What the client believed:**
"We need more ads. Better branding. A UI redesign."

**What the data showed:**
- 13-second page load time (users bouncing before seeing products)
- 50% cart abandonment (friction destroying conversions)
- Users forced to guess which products solved their skin concerns
- Complex checkout flow with unnecessary fields
- Payment friction (gateway fees discouraging purchases)

**The real problem:** User journey was broken at every touchpoint.

More ads would just send more people to a broken experience.

---

## Project Overview

**Client:** HDSkin - Skincare retail brand (US, Korean, European brands)  
**Market:** Nigeria  
**Role:** Product Manager (Contractor)  
**Duration:** 12 months  
**Team:** 7 (Developers, Marketing, HR)  
**Stack:** WordPress (customized), PHP, Hostinger  

---

## The Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Monthly Traffic** | 2,000 | 6,000-8,000 | **3-4x growth** |
| **Cart-to-Purchase** | ~40% | 60% | **50% improvement** |
| **Cart Abandonment** | 50% | 5% | **90% reduction** |
| **Daily Orders** | 5 | 10-50 | **2-10x growth** |
| **Page Load Time** | 9 seconds | 2 seconds | **78% faster** |
| **Review Completion** | Unknown | 95% | **Industry-leading** |

**Bottom line:** 10x'd order volume by fixing the user journey, not by spending more on ads.

---

## What I Did: The Three-Language Approach

### 🔧 ENGINEERING LANGUAGE: Technical Decisions That Mattered

**1. Performance Optimization (9s → 2s load time)**

Most PMs would say: "Make the site faster."

I said: "Here's what's slow and here's the fix priority:"
- Optimized WordPress plugins (removed bloat)
- Optimized theme (stripped unnecessary code)
- Frontend optimization (image compression, lazy loading)
- Backend optimization (database queries, caching)
- **Result:** 78% load time reduction

**Why this mattered:** Every second of load time = 7% conversion loss. We gained back ~50% of bouncing users.

---

**2. Smart Search Implementation**

**The tradeoff:**
- Option A: Expensive search solution ($$$, fast implementation)
- Option B: Custom AJAX search (no extra cost, more dev time)

**My decision:** Build custom AJAX search.

**Why:** We had development capacity. Time was cheaper than cash at that stage. The team could build exactly what we needed.

**Result:** Context-aware search that understood skin concerns, not just product names.

---

**3. Cloudflare vs Google reCAPTCHA**

**The decision:** Most sites use Google reCAPTCHA (free, easy).

**The problem:** "Click all the traffic lights" adds friction at checkout.

**My choice:** Cloudflare Turnstile (one-click verification).

**Why:** Reducing checkout friction was worth the integration effort.

**Result:** Less abandoned carts at verification step.

---

**4. Payment Options: Cards + Bank Transfers**

**The insight:** Payment gateway charges 1.5-2% in Nigeria.

**The decision:** Offer direct bank transfer as alternative.

**The implementation:** Automated verification system (not manual).

**The result:** 25% of customers chose bank transfer (no fees = better margins + happier customers).

---

### 💰 BUSINESS LANGUAGE: Decisions That Drove Revenue

**The $100K Question Framework in Action:**

Before building anything, I asked: "Would you pay $100K for this, or would you rather have the cash?"

**Features I Said NO To:**

❌ **Pop-up reviews during checkout**
- Marketing wanted: "Social proof at point of purchase"
- I said no: "This disrupts the buying decision at the worst moment"
- **Saved:** 2 weeks dev time, prevented conversion drop

❌ **Category pages**
- Standard e-commerce has: Browse → Category → Product
- I said: "Users don't care about categories, they care about skin concerns"
- **Instead:** Linked categories to products, focused on concern-based navigation
- **Result:** Users found products faster

❌ **Complex user profiles**
- Could have built: Avatar uploads, bio, preferences, wishlists, order history details
- I built: Name, email, shipping address, password
- **Why:** Users barely visit profiles. They want to buy and leave.
- **Saved:** 4 weeks dev time, redirected to revenue features

✅ **Features Worth $100K:**

**1. Concern-Based Shopping**
- **Problem:** Users didn't know which products solved their acne/hyperpigmentation/dryness
- **Solution:** Let them shop by skin concern, not by product category
- **Impact:** This single feature drove the traffic growth (2K → 6-8K)

**2. Simplified Checkout**
- **Before:** 50% cart abandonment
- **After:** 5% cart abandonment
- Flow: Cart → Checkout → Shipping (saved addresses) → Payment → Success → Tracking
- **Why it worked:** Only asked for information needed to deliver the product

**3. Post-Purchase Engagement (95% review completion)**
- **When:** 2-5 days after delivery
- **How:** Email + WhatsApp
- **What we asked:** "Is the product solving your skin concern?"
  - If YES → Request review
  - If NO → Offer free consultation
- **Why this worked:** We didn't just ask for reviews, we showed we cared about outcomes
- **Result:** 95% completion rate, massive social proof, repeat purchases

---

### 🚀 PRODUCT LANGUAGE: User Journey Optimization

**The insight:** Beautiful UI doesn't matter if the user flow is broken.

**What marketing wanted:** Redesign everything to look modern.

**What I did:** Kept UI simple, optimized user flow.

**The user journey I built:**

```
DISCOVERY
↓
Search by skin concern (not category)
↓
Find product (AJAX search, fast results)
↓
Add to cart (2-second load time = no frustration)
↓
Checkout (minimal fields, saved addresses)
↓
Payment (card or bank transfer, user chooses)
↓
Purchase (60% cart-to-purchase conversion)
↓
Tracking (automated updates)
↓
Post-delivery (2-5 days: concern check-in)
↓
Review (95% completion) OR Consultation (if product didn't work)
```

**Every touchpoint was intentional.**

No pop-ups. No friction. No unnecessary features.

**Result:** Less cognitive load = more purchases.

---

## The Key Insights

### 1. **Speed is a feature**
9-second load time killed conversions before users saw a single product.
Fixing this was more valuable than any new feature.

### 2. **Payment options = business strategy**
Bank transfer adoption (25%) improved margins and customer satisfaction.
Most PMs miss this because they don't understand local market dynamics.

### 3. **Post-purchase matters as much as pre-purchase**
95% review completion didn't happen by accident.
We earned it by caring about outcomes, not just sales.

### 4. **Saying NO is product management**
Pop-ups, category pages, complex profiles—all seemed reasonable.
All would have slowed us down and hurt conversion.

### 5. **User flow > UI design**
Marketing wanted beautiful design.
I delivered functional flow.
Orders 10x'd because users could actually complete purchases.

---

## What Made This Work

### Technical Credibility
- Optimized WordPress at every layer (theme, plugins, database, frontend)
- Made build vs. buy decisions with clear tradeoffs
- Chose appropriate tech (AJAX, Cloudflare, automated payment verification)

### Business Focus
- Identified real problem (user journey) vs. perceived problem (branding)
- Said NO to features that wouldn't drive revenue
- Prioritized ruthlessly (concern-based shopping > category pages)

### Execution Velocity
- Shipped within 12 months with measurable impact
- Made decisions with incomplete data (market-specific payment needs)
- Focused on outcomes (orders, conversion) not outputs (features shipped)

---

## The Technical PM Difference

**Most PMs would have:**
- Accepted the "we need more ads" narrative
- Built the beautiful UI marketing wanted
- Added pop-ups because "other sites do it"
- Focused on feature quantity over user flow quality

**What I did:**
- Diagnosed the real problem (technical + UX)
- Made technical tradeoffs that drove business outcomes
- Said NO to stakeholders when features would hurt conversion
- Optimized for revenue, not for resume

**The result:**
- Client didn't need to spend more on ads
- Engineering team shipped features that mattered
- Users could actually complete purchases
- Business grew 3-4x without increasing ad spend

---

## Lessons for Technical PMs

**1. Question the narrative**
"We need more ads" is often code for "our funnel is broken."
Fix the funnel before scaling traffic.

**2. Speed is product strategy**
9s → 2s load time was worth more than any feature.
Performance optimization is product management.

**3. Local market knowledge = competitive advantage**
Bank transfer adoption (25%) only happened because I understood Nigerian payment preferences.
Most PMs would force credit cards only.

**4. Post-purchase is product**
95% review completion wasn't marketing magic.
It was product design: care about outcomes, ask at the right time, offer help if product failed.

**5. Say NO to protect velocity**
Every "yes" to a mediocre feature is a "no" to something that drives revenue.
Pop-ups, category pages, complex profiles—all would have slowed us down.

---

## The Framework I Built From This

### "The User Journey Audit" Framework

Before building new features, audit every touchpoint:

**1. DISCOVERY (Search/Browse)**
- Can users find products in < 30 seconds?
- Are they searching by the right criteria?

**2. EVALUATION (Product Pages)**
- Is load time < 3 seconds?
- Can they understand if this solves their problem?

**3. DECISION (Cart/Checkout)**
- How many steps to purchase?
- What % abandon at each step?

**4. PAYMENT**
- What are local payment preferences?
- Are fees transparent?

**5. POST-PURCHASE**
- When do you follow up?
- Do you care about outcomes or just reviews?

**If any touchpoint has >20% drop-off → fix it before building new features.**

Most companies build features. I fixed funnels.

That's why orders 10x'd.

---

## Tech Stack & Tools

- **Platform:** WordPress (customized)
- **Backend:** PHP
- **Search:** Custom AJAX implementation
- **Security:** Cloudflare Turnstile
- **Payments:** Payment gateway + direct bank transfer
- **Hosting:** Hostinger
- **Engagement:** Email + WhatsApp automation
- **Analytics:** Custom conversion tracking

---

## Want to Work With Me?

If your company is:
- Building technical products (B2B SaaS, fintech, e-commerce)
- Frustrated with eng/product misalignment
- Shipping features that don't move metrics
- Looking for a PM who speaks engineering, product, AND business

**Let's talk.**

I help companies build products that ship faster and drive revenue by eliminating the translation layer between engineering, product, and business.

**Contact:** [Your Email] | [LinkedIn] | [Website]

---

*This case study demonstrates the three pillars of technical product management: Technical Credibility (WordPress optimization, AJAX, payment systems), Business Acumen ($100K Question, saying NO to features), and Execution Velocity (10x results in 12 months).*