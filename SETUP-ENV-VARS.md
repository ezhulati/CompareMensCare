# Quick Setup: Environment Variables

⚠️ **IMPORTANT:** No environment variables are currently configured in production!

This means:
- ❌ Google Analytics is not tracking visitors
- ❌ Affiliate links are using default URLs (no commission tracking)

## Quick Setup (5 minutes)

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/ezhulatis-projects/compare-mens-care/settings/environment-variables

2. Add these variables one by one:

**Analytics:**
```
Name: PUBLIC_GA_ID
Value: G-XXXXXXXXXX (your Google Analytics 4 Measurement ID)
Environment: Production, Preview, Development
```

**Affiliate URLs:** For each brand, add:
```
Name: PUBLIC_HIMS_AFFILIATE_URL
Value: https://www.forhims.com/?ref=YOUR_AFFILIATE_ID
Environment: Production, Preview, Development
```

Repeat for all 12 brands (see full list in DEPLOYMENT.md)

3. After adding all variables, redeploy:
```bash
vercel --prod
```

### Option 2: Via CLI (Faster)

Run these commands in your terminal:

```bash
# Set Google Analytics
vercel env add PUBLIC_GA_ID production
# When prompted, enter: G-XXXXXXXXXX

# Set each affiliate URL
vercel env add PUBLIC_HIMS_AFFILIATE_URL production
# When prompted, enter: https://www.forhims.com/?ref=YOUR_ID

vercel env add PUBLIC_RO_AFFILIATE_URL production
# etc... for all 12 brands
```

After adding all variables:
```bash
vercel --prod  # Redeploy to apply changes
```

## Getting Your Affiliate IDs

### 1. Google Analytics ID
1. Go to https://analytics.google.com
2. Admin → Data Streams → Choose your web stream
3. Copy the "Measurement ID" (starts with G-)

### 2. Affiliate Program Links

You need to join each brand's affiliate program first:

| Brand | Affiliate Network | Apply URL |
|-------|------------------|-----------|
| Hims | Impact Radius | https://impact.com |
| Ro | ShareASale | https://www.shareasale.com |
| BlueChew | Direct | https://www.bluechew.com/affiliates |
| Keeps | Impact Radius | https://impact.com |
| Manual | Direct | Contact manual.co |
| Numan | Awin | https://www.awin.com |
| Hone Health | Direct | Contact honehealth.com |
| Vault Health | Direct | Contact vaulthealth.com |
| HealthyMale | Direct | Contact healthymale.com.au |
| BetterHelp | Impact Radius | https://impact.com |
| Talkspace | CJ Affiliate | https://www.cj.com |
| LetsGetChecked | ShareASale | https://www.shareasale.com |

**Note:** Affiliate program approval can take 1-3 business days. Use placeholder URLs until approved.

## Verification

After setting environment variables and redeploying:

1. **Test Analytics:**
   - Visit https://comparemenscare.com
   - Accept cookies
   - Check Google Analytics Real-Time report
   - You should see your visit

2. **Test Affiliate Links:**
   - Visit https://comparemenscare.com/hims
   - Click "Visit Hims" button
   - Verify you're redirected to your affiliate URL
   - Check URL contains your tracking parameters

## Current Status

Run this to check what's configured:
```bash
vercel env ls
```

Expected output after setup:
```
Name                              Value                    Environments
PUBLIC_GA_ID                      G-**********            Production, Preview, Development
PUBLIC_HIMS_AFFILIATE_URL         https://www.forhims...  Production, Preview, Development
PUBLIC_RO_AFFILIATE_URL           https://ro.co...        Production, Preview, Development
... (10 more)
```

## Priority Order

If you can't set all variables immediately, prioritize:

1. **PUBLIC_GA_ID** (Essential for tracking)
2. **PUBLIC_HIMS_AFFILIATE_URL** (Most popular brand)
3. **PUBLIC_RO_AFFILIATE_URL** (Second most popular)
4. **PUBLIC_BLUECHEW_AFFILIATE_URL** (High conversion)
5. Rest of the affiliate URLs

The site will work without these variables (using fallback URLs), but you won't earn commissions or track visitors.

---

**Need help?** Check DEPLOYMENT.md for full documentation.
