# Fearhim
Full-stack fashion-tech capstone powered by JS

FEARHIM – Capstone Project (PERN Stack)

1. Landing Page
Path: / Purpose: Visual intro with spinning gothic logo and ambient music.
Stack & Tools:
* React + Vite – SPA rendering
* Framer Motion – Logo animation
* Tailwind CSS – UI styling
* Howler.js or Web Audio API – Music control
* useState / useEffect – Click handler, state control
Functionality:
* Animated spinning “FEARHIM” logo
* Ambient music (play, pause, skip)
* On click → Navigate to /login or /signup

2. Login / Signup Page
Paths: /login, /signup Purpose: User authentication using JWT.
Stack & Tools:
* React – Form UI
* shadcn/ui + Tailwind CSS – Styling + inputs
* Node.js + Express – Auth API
* PostgreSQL + Prisma – User data persistence
* JWT – Token-based authentication
* useContext / useState – Auth context

3. User Dashboard
Path: /dashboard Purpose: User hub for style board uploads, AI outfit generation, profile access.
Stack & Tools:
* Cloudinary – Image upload & CDN
* React Dropzone / <input type="file"> – Upload interface
* Tailwind UI – Responsive layout
* Express + Node.js API:
    * /api/analyze-style → Sends image to your own backend or third-party cloud AI API
    * /api/classify-niche → Routes image tags to OpenAI (via REST fetch)
Functionality:
* Grid view of uploaded style boards
* Button → “Generate Outfit” (AI powered)
* Modal → View outfit + product suggestions

4. AI Outfit Suggestions Page
Path: /outfits Purpose: Presents recommended outfits based on style/image analysis.
Stack & Tools:
* OpenAI API – For fashion niche classification (e.g., vintage, techwear)
* 3rd-Party JS-Compatible Fashion APIs (Lyst, Klarna, SSENSE) – Product feeds via fetch
* React – Carousel or grid
* Tailwind CSS – Layout
* useEffect / useState – API fetch + display logic
Optional:
* Save favorite outfits to user profile (POST to /api/favorites)

5. Saved Looks / Favorites Page
Path: /favorites Purpose: Display saved outfits for logged-in users.
Stack & Tools:
* React – Outfit card layout
* Express + Prisma – Fetch saved looks from PostgreSQL
* React Query / SWR – Efficient client-side data fetching
* Tailwind CSS – Grid layout

6. Fashion News Page
Path: /news Purpose: Display curated fashion articles.
Stack & Tools:
* React + useEffect – Pull articles from external APIs or RSS feeds
* Tailwind CSS – UI layout
* RSS Parser (JS) – Optional support for fashion blogs
Optional:
* Add your own CMS (e.g., Sanity.io or a custom Express backend)

7. Live Chatrooms
Path: /chat Purpose: Niche-based real-time discussion areas.
Stack & Tools:
* Socket.io + Express – WebSocket server
* React – Chat UI + live message updates
* Tailwind CSS – UI styling
Features:
* Filter chat by fashion niche or live events
* Realtime text updates with typing indicator

8. Settings / Profile Page
Path: /settings Purpose: Account and profile management.
Stack & Tools:
* React + shadcn/ui – Forms
* Tailwind CSS – UI styling
* Express API – Endpoints for:
    * Update username/email/password
    * Delete account
* JWT Auth – Route protection
* Prisma + PostgreSQL – Data persistence

9. Embedded Recommendation Script (B2B Integration)
File: fearhim-recommendation.js Purpose: Personalize product grids on external e-commerce websites.
Stack & Tools:
* Vanilla JavaScript (or wrap as NPM module)
* API Endpoint: h CopyEdit   GET https://fearhim.app/api/users/:id/tags
*   
* Filters the host site’s product grid using matching tags
* Easy integration via <script> + class selectors

Final Summary
Page	Functionality	Tech Focus
/	Spinning logo, music intro	React, Framer, Howler.js
/login	JWT auth, form UI	Express, JWT, PostgreSQL
/dashboard	Uploads, AI pipeline, generate outfits	Cloudinary, OpenAI API
/outfits	Outfit suggestions from niche + APIs	Lyst/Klarna APIs, React grid
/favorites	View + persist saved outfits	PostgreSQL, SWR, React Query
/news	Curated feeds, blogs	RSS Parser, Fashion APIs
/chat	Realtime, niche-based chatrooms	Socket.io, React, Express
/settings	Edit or delete user account	Prisma, JWT, secure routes
fearhim-recommendation.js	External B2B fashion tag filtering	Vanilla JS + REST API



