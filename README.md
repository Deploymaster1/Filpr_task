# ConsultPro - Professional Business & Marketing Platform

Namaste! 🙏 This is my project, **ConsultPro**. I made this to help small or medium businesses show their professional side to the world. It’s not just a simple website; it’s a proper platform where you can show your work, get client feedback, and catch new business leads very easily.

I have used **React.js** for building the website because it is fast, and for the database, I chose **Supabase** because it is very easy to handle and stores everything securely. The design is called "Glassmorphism", which makes the site look very premium and modern.

---

## What all is inside this project? (Features)

I have tried to include everything that a real business needs:

- **Home Page (The First Impression)**: 
  - A big hero section with a nice background.
  - A "Quick Quote" form right at the top so clients don't have to search for it.
  - A "Why Choose Us" section where we show our ROI, Design, and Marketing strengths with high-quality images.
  - A "Ready to Scale" banner at the bottom to encourage people.

- **Project Gallery (Portfolio)**: 
  - Here we show all the past work we have done.
  - Each project has a nice image and a description.
  - It also has a "Statistics" section at the top (like 150+ projects done) to show we are experts.

- **Testimonials (Client Voices)**: 
  - Real feedback from our happy clients. 
  - Each feedback shows the client's name, their company role, and their photo.
  - I also added a "Trusted by Industry Leaders" section with some global logos to make it look authoritative.

- **Contact Page**: 
  - If someone wants to talk to us, they can fill the form here.
  - I've also listed our office address, phone number, and support email.
  - The form is "sticky," so it stays on screen while you scroll.

- **Newsletter Bar**: 
  - In the footer, there is a long bar for subscribing to our newsletter. It’s very prominent so people don't miss it.

---

##  The Admin Dashboard (Management Portal)

This is the most important part for the business owner. You don't need to change code to update the site!

1. **Login First**: Go to `/login`. Use these details:
   - **Email**: `admin@example.com`
   - **Password**: `admin123`
2. **Manage Projects**: You can add a new project, edit an old one, or delete something you don't need anymore.
3. **Manage Clients**: Update testimonials or add new client photos very easily.
4. **See Inquiries**: Every time someone fills a form on the Home or Contact page, you will see their details (Name, Email, Mobile, City) right here in the dashboard!
5. **Newsletter List**: You can see everyone who subscribed to your newsletter.

---

## 🛠️ How to start this on your computer?

It is very simple, just follow these steps:

1. **Clone it**: Download the project folder to your PC.
2. **Install things**: Open your terminal in that folder and type `npm install`. Wait for some time until it finishes.
3. **Setup Database**: 
   - Go to [Supabase](https://supabase.com/) and create a free project.
   - Run the SQL queries (I've provided those in a separate file if you need them) to create the tables for projects, clients, contacts, and newsletter.
4. **Environment Variables**: 
   - Look for a file named `.env.example`. 
   - Rename it to `.env`.
   - Put your own `SUPABASE_URL` and `SUPABASE_ANON_KEY` there. (Don't share this key with anyone!)
5. **Run it**: Type `npm run dev` in the terminal. It will give you a link (like `localhost:5173`). Open it in Chrome and enjoy!

---

##  Tech Stack & Design

- **Frontend**: React (Vite) - It's super fast!
- **Styling**: Pure CSS - No heavy libraries like Bootstrap, just clean custom CSS for the glass look.
- **Backend/DB**: Supabase (PostgreSQL) - Very reliable.
- **Icons**: Minimal SVG icons for that clean professional feel.
- **Images**: High-quality professional images from Unsplash.

##  Project Structure for Developers

If you want to change something, look here:
- `src/pages`: This is where all the main screens are kept.
- `src/components`: Common things like the Navbar, Footer, and the new Logo.
- `src/App.css`: All the colors, fonts, and "glass" effects are defined here.
- `src/supabase.js`: This is the bridge between our React app and the Supabase database.

