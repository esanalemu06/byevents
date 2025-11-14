# Quick Start Guide - Besorah Yeshua Website

Get your website up and running in 15 minutes!

## 🚀 Super Quick Deployment (3 Steps)

### Step 1: Organize Your Files (2 minutes)

Create this folder structure:

```
besorah-yeshua/
├── index.html
├── about.html
├── events.html
├── partnership.html
├── contact.html
├── donate.html
├── _redirects
├── netlify.toml
├── styles/
│   └── style.css
└── scripts/
    └── main.js
```

### Step 2: Upload to GitHub (5 minutes)

1. Go to https://github.com/new
2. Name: `besorah-yeshua-website`
3. Click "Create repository"
4. Download [GitHub Desktop](https://desktop.github.com/) or use command line:

```bash
cd besorah-yeshua
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/besorah-yeshua-website.git
git push -u origin main
```

### Step 3: Deploy on Netlify (8 minutes)

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Click "GitHub" and select your repository
4. Click "Deploy site"
5. **Done!** Your site is live 🎉

Your site will be at: `https://YOUR-SITE-NAME.netlify.app`

## 📝 Essential Customizations (Before Sharing)

### 1. Update Contact Info (3 locations)

**In the footer of EVERY page**, change:
```html
<li><i class="fas fa-envelope"></i> YOUR_EMAIL@besorahyeshua.org</li>
<li><i class="fas fa-phone"></i> +251 YOUR PHONE NUMBER</li>
```

### 2. Update Social Media Links (All pages)

```html
<a href="YOUR_FACEBOOK_URL"><i class="fab fa-facebook-f"></i></a>
<a href="YOUR_INSTAGRAM_URL"><i class="fab fa-instagram"></i></a>
<a href="YOUR_YOUTUBE_URL"><i class="fab fa-youtube"></i></a>
<a href="YOUR_TWITTER_URL"><i class="fab fa-twitter"></i></a>
```

### 3. Enable Contact Form

**In `contact.html`**, add this attribute to the form tag:

```html
<form id="contactForm" class="contact-form" data-netlify="true" name="contact">
    <!-- Add this hidden input -->
    <input type="hidden" name="form-name" value="contact">
    <!-- rest of form -->
</form>
```

Then redeploy by pushing to GitHub:
```bash
git add contact.html
git commit -m "Enable contact form"
git push
```

## 💳 Enable Donations (Optional - 10 minutes)

### Get PayPal Client ID:

1. Go to https://developer.paypal.com/
2. Log in with your PayPal account
3. Go to "My Apps & Credentials"
4. Create an app → Get "Client ID"

### Update donate.html:

Replace this line:
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
```

With:
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_ACTUAL_CLIENT_ID&currency=USD"></script>
```

## 🎨 Brand Colors Used

- **Primary Blue**: `#205782`
- **Secondary Orange**: `#f2842f`

To change colors, edit `styles/style.css` at the top:
```css
:root {
    --primary-color: #205782;    /* Change this */
    --secondary-color: #f2842f;   /* Change this */
}
```

## 📱 Testing Checklist

Before sharing your site:

- [ ] Open site on your phone
- [ ] Click all navigation links
- [ ] Submit the contact form (test it!)
- [ ] Check donate page (if using PayPal)
- [ ] Verify all phone numbers and emails are correct
- [ ] Test on Chrome, Firefox, and Safari

## 🔄 Making Updates

### Update Content:

1. Edit the HTML files locally
2. Save changes
3. Push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Netlify will automatically rebuild your site!

## 📞 Getting Help

**Contact form not working?**
- Did you add `data-netlify="true"`?
- Check Netlify dashboard → Forms

**PayPal not working?**
- Is your Client ID correct?
- Check browser console (F12) for errors

**Styles look broken?**
- Check that `styles/style.css` is in the right folder
- Clear your browser cache (Ctrl+Shift+R)

## 🎯 Next Steps

1. **Add your custom domain** (optional)
   - Netlify Dashboard → Domain settings → Add custom domain
   
2. **Set up email notifications**
   - Netlify Dashboard → Forms → Form notifications
   
3. **Add Google Analytics** (optional)
   - Get tracking code from Google Analytics
   - Add to bottom of each HTML page before `</body>`

4. **Keep content updated**
   - Regular event updates
   - Add testimonials
   - Share impact stories

## 📊 Monitoring Your Site

### Check form submissions:
Netlify Dashboard → Forms → Submissions

### View site analytics:
Netlify Dashboard → Analytics (may require paid plan)

### Check if site is up:
- https://uptimerobot.com/ (free monitoring)

## 🎉 Launch Checklist

- [ ] Test all pages
- [ ] Update all contact info
- [ ] Test contact form
- [ ] Review all content
- [ ] Check on mobile
- [ ] Share with team for feedback
- [ ] Announce on social media!

---

## 💡 Pro Tips

1. **Make small changes frequently** rather than big updates
2. **Test on your phone** - most visitors will be mobile
3. **Keep it simple** - don't overcomplicate
4. **Update regularly** - fresh content keeps people coming back
5. **Ask for feedback** - your users will tell you what needs improving

---

**Need more details?** Check the full `README.md` and `DEPLOYMENT-CHECKLIST.md` files.

**Ready to launch?** You got this! 🚀