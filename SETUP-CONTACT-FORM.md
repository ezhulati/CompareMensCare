# Contact Form Setup Instructions

The contact form uses [Resend](https://resend.com) to send email notifications. Follow these steps to configure it.

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. The free tier includes 100 emails/day and 3,000 emails/month (more than enough for a contact form)

## 2. Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** in the left sidebar
3. Click **Create API Key**
4. Name it "CompareMensCare Contact Form"
5. Select **Full Access** permission
6. Copy the API key (it starts with `re_`)

⚠️ **IMPORTANT:** Save this key immediately - you won't be able to see it again!

## 3. Add Domain (Optional but Recommended)

To send emails from your own domain instead of `onboarding@resend.dev`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `comparemenscare.com`
4. Add the DNS records shown to your domain's DNS settings (in Vercel or your domain registrar)
5. Wait for verification (usually 5-10 minutes)

Once verified, update line 32 in `/src/pages/api/contact.ts`:

```typescript
from: 'CompareMensCare <contact@comparemenscare.com>',
```

If you don't add a domain, emails will come from `onboarding@resend.dev` (which still works fine).

## 4. Configure Environment Variable in Vercel

### For Production (Vercel Dashboard)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
   - **Environments:** Select **Production**, **Preview**, and **Development**
4. Click **Save**
5. Redeploy your site for changes to take effect

### For Local Development (Optional)

1. Create a `.env` file in the project root (it's already in .gitignore)
2. Add your API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
3. Restart your dev server

## 5. Update Email Address (Already Done)

The contact form is already configured to send to **enrizhulati@gmail.com**.

If you need to change it later, edit line 31 in `/src/pages/api/contact.ts`:

```typescript
to: ['enrizhulati@gmail.com'],
```

You can add multiple recipients by adding more email addresses:

```typescript
to: ['enrizhulati@gmail.com', 'support@comparemenscare.com'],
```

## 6. Test the Contact Form

1. Deploy to Vercel with the environment variable configured
2. Visit `https://comparemenscare.com/contact`
3. Fill out and submit the form
4. Check your email at enrizhulati@gmail.com

## Troubleshooting

### "Email service not configured" error
- Make sure `RESEND_API_KEY` environment variable is set in Vercel
- Redeploy your site after adding the variable

### Emails not arriving
- Check your spam folder
- Verify the API key is correct in Vercel dashboard
- Check Resend dashboard → Logs to see if the email was sent
- Verify you haven't exceeded the free tier limit (100 emails/day)

### "Invalid API key" error
- Make sure you copied the entire API key (starts with `re_`)
- The key should have **Full Access** permission

## Email Format

Submitted forms will arrive at enrizhulati@gmail.com with:
- **Subject:** "Contact Form: [subject selected by user]"
- **From:** "CompareMensCare <contact@comparemenscare.com>" (or onboarding@resend.dev if domain not verified)
- **Reply-To:** User's email address (so you can reply directly)
- **Body:** Formatted HTML email with:
  - User's name
  - User's email (clickable)
  - Subject category
  - Full message

## Free Tier Limits

Resend free tier includes:
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Unlimited domains
- ✅ Email logs

This is more than sufficient for a contact form.

## Support

If you need help:
- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
- Check Resend dashboard for email delivery logs
