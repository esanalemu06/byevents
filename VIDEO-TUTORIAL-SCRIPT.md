# 📹 Netlify Forms Setup - Video Tutorial Script

Follow along with this step-by-step guide. Perfect for screen recording or training your team!

---

## 🎬 Part 1: Deploy Your Site (5 minutes)

### Scene 1: Organize Files

**What to show:**
```
Screen: File Explorer showing folder structure

SAY: "First, make sure your files are organized like this..."

SHOW: 
besorah-yeshua/
├── contact.html (highlight this)
├── thank-you.html (highlight this)
├── index.html
├── Other HTML files...
├── styles/style.css
└── scripts/main.js

SAY: "Notice the new files: contact.html is updated with Netlify Forms, 
and thank-you.html is our success page."
```

### Scene 2: Push to GitHub

**What to show:**
```
Screen: Terminal or GitHub Desktop

SAY: "Now let's push our files to GitHub..."

TYPE (in terminal):
git add .
git commit -m "Add Netlify Forms integration"
git push

SAY: "This uploads all our files to GitHub, which Netlify will use."
```

### Scene 3: Deploy on Netlify

**What to show:**
```
Screen: Netlify Dashboard (netlify.com)

SAY: "Log in to Netlify and click 'Add new site'"

CLICK: "Import an existing project"

CLICK: "GitHub"

SAY: "Select your besorah-yeshua repository"

CLICK: Repository name

SAY: "Leave the build settings as default and click Deploy"

WAIT: Show deployment progress

SAY: "Great! Our site is now deploying. This takes about 30 seconds."
```

---

## 🎬 Part 2: Verify Form Setup (3 minutes)

### Scene 4: Check Form Detection

**What to show:**
```
Screen: Netlify Dashboard after deployment

SAY: "Now let's verify our form was detected..."

CLICK: Your site name

CLICK: "Forms" tab in sidebar

SAY: "Perfect! We can see our 'contact' form here. 
If you don't see it, you may need to redeploy."

SHOW: Forms list with "contact" form

SAY: "The form shows 0 submissions right now. That will change soon!"
```

---

## 🎬 Part 3: Set Up Email Notifications (4 minutes)

### Scene 5: Configure Notifications

**What to show:**
```
Screen: Still in Forms section

SAY: "Let's set up email notifications so we get notified of new messages."

CLICK: "Form notifications" at top

CLICK: "Add notification" button

SELECT: "Email notification"

SAY: "Choose 'Email notification' from the options"

FILL IN:
- Form: "contact" (from dropdown)
- Event: "New form submission"
- Email: info@besorahyeshua.org (type your email)

SAY: "Enter the email address where you want to receive notifications.
You can add multiple addresses separated by commas."

CLICK: "Save"

SAY: "Perfect! Now we'll get an email every time someone submits the form."
```

### Scene 6: Customize Email (Optional)

**What to show:**
```
Screen: Email notification settings

SAY: "Optionally, you can customize the email template..."

SHOW: Template editor with:
Subject: New Contact from {{ name }}
Body: 
  Name: {{ name }}
  Email: {{ email }}
  Subject: {{ subject }}
  Message: {{ message }}

SAY: "You can personalize how the notification looks. 
I'll leave it as default for now."
```

---

## 🎬 Part 4: Test Everything (5 minutes)

### Scene 7: Submit Test Form

**What to show:**
```
Screen: Your live website contact page

SAY: "Now for the most important part - testing!"

NAVIGATE TO: https://your-site.netlify.app/contact.html

SAY: "Let's fill out the form with test data..."

FILL IN:
- Name: "Test User"
- Email: "test@example.com"
- Phone: "123-456-7890"
- Subject: "General Inquiry"
- Message: "This is a test message to verify the form works correctly."

SAY: "Make sure to fill in all required fields marked with asterisk."

CLICK: "Send Message" button

WAIT: Page redirects

SAY: "Excellent! We're redirected to the thank you page. 
This means the form submitted successfully."
```

### Scene 8: Check Email

**What to show:**
```
Screen: Email inbox

SAY: "Now let's check if we received the email notification..."

OPEN: Email inbox

SHOW: Email from Netlify with subject "New form submission from contact"

CLICK: Email to open

SAY: "Perfect! Here's our notification with all the form data.
If you don't see it, check your spam folder."

SHOW: Email content with form data

SAY: "Notice it includes everything: name, email, phone, subject, and message."
```

### Scene 9: Verify in Dashboard

**What to show:**
```
Screen: Back to Netlify Dashboard

NAVIGATE TO: Forms → contact

SAY: "Let's also check the Netlify dashboard..."

SHOW: Submissions list with 1 submission

CLICK: First submission

SAY: "Here's our test submission with all the details. 
You can always access past submissions here."

SHOW: Full submission details

SAY: "You can also export all submissions to a CSV file for your records."

CLICK: "Export submissions" button (don't actually export)
```

---

## 🎬 Part 5: Mobile Test (2 minutes)

### Scene 10: Test on Mobile

**What to show:**
```
Screen: Mobile phone or browser dev tools mobile view

SAY: "It's crucial to test on mobile since many visitors will use phones..."

OPEN: Contact page on mobile device

SAY: "The form looks great on mobile - nice and responsive."

SCROLL: Show form fields

FILL: One or two fields

SAY: "All fields are easy to tap and fill out. 
The keyboard pops up correctly for each field type."

SHOW: Submit button

SAY: "Perfect! Everything works smoothly on mobile."
```

---

## 🎬 Part 6: Team Training (3 minutes)

### Scene 11: How to Check Submissions

**What to show:**
```
Screen: Netlify Dashboard

SAY: "Let me show you how your team can check for new messages..."

LOG IN: Netlify account

NAVIGATE: Site → Forms → contact

SAY: "Anyone with access to the Netlify dashboard can see submissions here."

SHOW: List of submissions

SAY: "You can see the date, name, and email at a glance."

CLICK: One submission

SAY: "Click any submission to see the full message and details."
```

### Scene 12: Export and Respond

**What to show:**
```
Screen: Still in submissions view

SAY: "To export all messages for your records..."

CLICK: "Export submissions"

SELECT: Date range

CLICK: "Export CSV"

SAY: "This downloads a spreadsheet with all your submissions."

SHOW: Downloaded CSV file

SAY: "Open it in Excel or Google Sheets to manage responses."

SAY: "To respond, simply copy the person's email and reply from your email client."
```

---

## 🎬 Part 7: Troubleshooting Common Issues (2 minutes)

### Scene 13: What If Form Doesn't Appear?

**What to show:**
```
Screen: Split screen - Code editor and Netlify

SAY: "If your form doesn't show up in Netlify, check these three things..."

SHOW: contact.html in editor

HIGHLIGHT: <form name="contact" method="POST" data-netlify="true">

SAY: "First: Make sure these three attributes are present - 
name, method, and data-netlify."

HIGHLIGHT: <input type="hidden" name="form-name" value="contact">

SAY: "Second: Check the hidden field matches your form name exactly."

SHOW: Terminal

TYPE: git commit --allow-empty -m "Trigger rebuild"
      git push

SAY: "Third: Trigger a redeployment to let Netlify detect the form again."
```

### Scene 14: Email Not Arriving

**What to show:**
```
Screen: Email settings in Netlify

SAY: "If you're not receiving email notifications..."

SHOW: Spam folder

SAY: "First, check your spam or junk folder. 
Netlify emails sometimes end up there initially."

SHOW: Notification settings

SAY: "Second, verify your email address is correct in the settings."

SAY: "Third, try adding another email address to test if it's your email provider."

SHOW: Whitelist instructions

SAY: "Finally, add team@netlify.com to your contacts to whitelist Netlify emails."
```

---

## 🎬 Conclusion (1 minute)

### Scene 15: Wrap Up

**What to show:**
```
Screen: Your beautiful live website

SAY: "And that's it! Your contact form is now fully functional."

SHOW: Contact page

SAY: "Visitors can reach you easily..."

SHOW: Thank you page

SAY: "They get immediate confirmation..."

SHOW: Email notification

SAY: "You receive instant notifications..."

SHOW: Dashboard

SAY: "And everything is tracked in your dashboard."

SHOW: Mobile view

SAY: "It works perfectly on all devices..."

FINAL SCREEN: Show complete website

SAY: "Your Besorah Yeshua website is now ready to receive messages 
and connect with people across Ethiopia and beyond!"

SAY: "If you have any questions, check the documentation files 
or reach out to Netlify support. God bless your ministry!"
```

---

## 📝 Recording Tips

### Before Recording:
- [ ] Clear browser cache and cookies
- [ ] Close unnecessary browser tabs
- [ ] Use incognito mode to show fresh experience
- [ ] Prepare test data ahead of time
- [ ] Check audio levels
- [ ] Use zoom for important details

### During Recording:
- [ ] Speak clearly and not too fast
- [ ] Pause after each action
- [ ] Use cursor highlighting
- [ ] Zoom in on important parts
- [ ] Show both success and troubleshooting

### After Recording:
- [ ] Add captions/subtitles
- [ ] Add timestamps in description
- [ ] Include links to documentation
- [ ] Test video before sharing

---

## 🎯 Video Chapters (for YouTube)

```
0:00 Introduction
0:30 Part 1: Deploy Your Site
5:30 Part 2: Verify Form Setup
8:30 Part 3: Set Up Email Notifications
12:30 Part 4: Test Everything
17:30 Part 5: Mobile Testing
19:30 Part 6: Team Training
22:30 Part 7: Troubleshooting
24:30 Conclusion
```

---

## 📄 Video Description Template

```
Learn how to set up Netlify Forms for your church or ministry website. 
This step-by-step tutorial covers everything from deployment to testing.

🔗 Files & Documentation:
- GitHub Repository: [Your URL]
- Setup Guide: [Link to NETLIFY-FORMS-SETUP.md]
- Quick Checklist: [Link to FORMS-QUICK-CHECKLIST.md]

⏱️ Timestamps:
0:00 Introduction
0:30 Deploy to Netlify
5:30 Verify Form Detection
8:30 Email Notifications
12:30 Testing the Form
17:30 Mobile Testing
19:30 Team Training
22:30 Troubleshooting
24:30 Conclusion

📧 Need Help?
- Netlify Docs: https://docs.netlify.com/forms
- Netlify Forum: https://answers.netlify.com

🙏 Besorah Yeshua International Ministry
Spreading the Gospel to Ethiopia and beyond.
Website: [Your URL]
```

---

**Good luck with your recording! Keep it simple, clear, and encouraging!** 🎥