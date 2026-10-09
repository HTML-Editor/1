// NOTE: the GitHub Pages site does NOT use this backend (the contact form posts to
// formsubmit.co from Contact.jsx). server.js is not in the repo, so this folder cannot run
// as-is. GitHub Pages cannot host Node servers; use e.g. Render if you want it later.

node server/server.js
run this for backend  and also run the frontend using npm run dev 

for email we are using nodemailer to change it to hpcl id enable 2 step verificationa and genertae a password 


Gmail Setup:
   - Enable 2FA on Gmail
   - Generate App Password
   - Use it in place of 'your_app_password'



Enable 2-Step Verification
Generate an App Password
Use that here:
pass: 'your_app_password'


   or use chatgpt 