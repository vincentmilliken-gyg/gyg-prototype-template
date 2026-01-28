# GYG Prototype Template

A interactive prototype template for building and showcasing mobile app designs. This template provides a phone frame mockup with customizable settings, making it perfect for creating interactive prototypes and demos.

## What's Inside

This project includes:
- 📱 **Phone Frame Mockup** - A realistic phone interface to display your designs
- 🎨 **Live Settings Panel** - Adjust theme, animations, and features in real-time
- ⚡ **Hot Reload** - See your changes instantly as you work
- 🚀 **Built with Next.js** - Fast, modern web framework
- 🎭 **Motion Animations** - Smooth, professional animations built-in

---

## Prerequisites (What You Need First)

Before getting started, make sure you have these installed on your computer:

### 1. Node.js (Required)
Node.js allows you to run this project on your computer.

**Check if you have it:**
```bash
node --version
```

**If you need to install it:**
- Download from [nodejs.org](https://nodejs.org/)
- Choose the **LTS version** (recommended for most users)
- Follow the installer instructions

### 2. A Code Editor (Recommended)
You'll need a code editor to make changes. We recommend:
- [Visual Studio Code](https://code.visualstudio.com/) (Most popular, great for beginners)
- [Cursor](https://cursor.sh/) (AI-powered editor)

### 3. Git (Optional but Recommended)
Git helps you track changes and collaborate with others.

**Check if you have it:**
```bash
git --version
```

**If you need to install it:**
- Download from [git-scm.com](https://git-scm.com/)

---

## Getting Started - Step by Step

### Step 1: Download the Project

**Option A: Using Git (Recommended)**
```bash
git clone <your-repository-url>
cd adp-options-api
```

**Option B: Download ZIP**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to your desired location
4. Open Terminal (Mac) or Command Prompt (Windows)
5. Navigate to the folder:
   ```bash
   cd path/to/adp-options-api
   ```

### Step 2: Install Dependencies

Dependencies are packages of code that this project needs to run. Install them with:

```bash
npm install
```

This will take a few minutes the first time. You'll see a lot of text scroll by - that's normal!

**What's happening?** This command reads the `package.json` file and downloads all the necessary code packages.

### Step 3: Start the Development Server

Now let's run the project on your computer:

```bash
npm run dev
```

You should see something like:
```
▲ Next.js 16.1.5
- Local:        http://localhost:3000
- Ready in 2.3s
```

### Step 4: View Your Prototype

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to: [http://localhost:3000](http://localhost:3000)
3. You should see your prototype with a phone mockup and settings panel!

🎉 **Success!** Your prototype is now running locally.

### Step 5: Make Changes

The project will automatically reload when you save changes. Try editing these files:

- `app/components/PrototypeScreen.tsx` - The main content inside the phone
- `app/components/Sidebar.tsx` - The settings panel
- `app/components/PhoneFrame.tsx` - The phone frame design

**Tip:** Keep the terminal window open while you work. If you see errors, they'll appear here.

---

## Project Structure

Here's what each folder and file does:

```
adp-options-api/
├── app/                          # Main application folder
│   ├── components/               # Reusable UI components
│   │   ├── PhoneFrame.tsx       # The phone mockup frame
│   │   ├── PrototypeScreen.tsx  # Content inside the phone
│   │   └── Sidebar.tsx          # Settings panel on the right
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Page wrapper/layout
│   └── page.tsx                 # Home page (main entry point)
├── public/                       # Static files (images, icons)
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file!
```

---

## Common Tasks

### Starting the Project
```bash
npm run dev
```
Opens the prototype at [http://localhost:3000](http://localhost:3000)

### Stopping the Project
Press `Ctrl + C` in the terminal window

### Installing a New Package
```bash
npm install package-name
```

### Checking for Errors
```bash
npm run lint
```

### Building for Production
```bash
npm run build
npm start
```

---

## Deploying to Vercel (Making Your Prototype Public)

Vercel is a platform that hosts your prototype online, making it easy to share with your team.

### Method 1: Deploy via GitHub (Recommended)

This method automatically deploys your prototype whenever you push changes to GitHub.

#### Step 1: Push Your Code to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin <your-github-repo-url>
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in
2. Click "Add New Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Vercel will auto-detect it's a Next.js project - just click "Deploy"!

**That's it!** Vercel will:
- Build your project
- Assign a URL (e.g., `your-project.vercel.app`)
- Automatically deploy updates when you push to GitHub

#### Step 3: Share Your Prototype

Once deployed, you'll get a URL like: `https://your-project.vercel.app`

Share this link with anyone to show them your prototype!

### Method 2: Deploy via Vercel CLI

If you prefer to deploy from your terminal:

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts. Vercel will ask:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **What's your project's name?** → Enter a name or press Enter
- **In which directory is your code located?** → `./` (press Enter)

After deployment, you'll get a URL to your live prototype!

#### Step 4: Deploy Updates
Whenever you want to deploy changes:
```bash
vercel --prod
```

### Vercel Dashboard Features

After deploying, visit your [Vercel Dashboard](https://vercel.com/dashboard) to:
- 📊 View deployment history
- 🔗 Manage custom domains
- ⚙️ Configure environment variables
- 📈 See analytics and performance metrics
- 🔄 Roll back to previous versions

---

## Troubleshooting

### "npm: command not found"
**Solution:** Node.js isn't installed. Follow the [Prerequisites](#prerequisites-what-you-need-first) section.

### "Port 3000 is already in use"
**Solution:** Another application is using port 3000.
- Stop the other application, or
- Use a different port:
  ```bash
  PORT=3001 npm run dev
  ```

### "Module not found" errors
**Solution:** Dependencies aren't installed. Run:
```bash
npm install
```

### Changes aren't showing up
**Solution:** 
1. Check the terminal for errors
2. Try refreshing your browser with `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
3. Stop the server (`Ctrl + C`) and restart it (`npm run dev`)

### Build fails on Vercel
**Solution:**
1. Check that your code works locally first (`npm run build`)
2. Make sure all your files are committed to Git
3. Check the build logs in the Vercel dashboard for specific errors

---

## Need Help?

- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Motion Library:** [motion.dev/docs](https://motion.dev/docs)

---

## Tips for Designers

1. **Start with `PrototypeScreen.tsx`** - This is where you'll spend most of your time
2. **Use the sidebar** - Test different themes and settings without changing code
3. **Hot reload is your friend** - Save your file and instantly see changes
4. **Don't worry about breaking things** - You can always undo changes with Git
5. **Deploy early and often** - Share your work-in-progress to get feedback quickly

Happy prototyping! 🎨✨
