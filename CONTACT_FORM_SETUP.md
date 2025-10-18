# Contact Form Setup Guide - EmailJS

Your contact form is now integrated with EmailJS! Follow these steps to make it fully functional:

## 📧 EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Copy your **Service ID** (e.g., "service_abc123")

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}} - Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{from_email}}
```

4. Copy your **Template ID** (e.g., "template_xyz789")

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., "aBcD1234EfGh5678")

### Step 5: Update Your Code
Open `src/components/Contact.jsx` and replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

Find them around line 48-50 in the `handleSubmit` function.

## 🎯 Template Variables
The form sends these variables to EmailJS:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Email subject
- `message` - Message content
- `to_email` - Your email (adithyasharma2005@gmail.com)

## ✅ Testing
1. After updating the credentials, save the file
2. Fill out your contact form
3. Click "Send Message"
4. Check your email for the message
5. You should see a success message on the form

## 🔒 Security Note
Your credentials are safe to commit to GitHub as they're public keys designed for client-side use.

## 💡 Alternative: Direct Email Link
If you prefer not to set up EmailJS right now, visitors can still email you directly by clicking your email address in the contact info section.

## 📞 Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

---

Need help? The form will show an error message with your direct email if EmailJS isn't configured yet!
