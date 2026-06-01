# How to Deploy Your Portfolio Website to Vercel for Free

Vercel is the creator of Next.js and offers a world-class, extremely fast hosting platform that is **100% free** for personal portfolios and hobby projects. It includes automated builds, global CDN delivery, secure HTTPS (SSL), and automatic deployment previews.

Follow these simple steps to deploy your website:

---

## Step 1: Push Your Project to GitHub

Vercel connects directly to your Git repository, meaning every time you push code changes to GitHub, Vercel will automatically rebuild and deploy your site in the background.

1. **Create a GitHub Account:**
   Go to [github.com](https://github.com/) and sign up for a free account if you don't have one.

2. **Create a New Repository:**
   * Click the **"+"** icon in the top-right corner of GitHub and select **"New repository"**.
   * Give it a name (e.g., `portfolio-website`).
   * Choose **Private** (recommended to keep your personal contact config private) or **Public**.
   * **Do NOT** check "Add a README file", "Add .gitignore", or "Choose a license" (your project already has these).
   * Click **"Create repository"**.

3. **Initialize Git and Push Your Project:**
   Open your terminal (PowerShell, Command Prompt, or VS Code terminal) in your project directory (`C:\Users\Invisible\Desktop\Portfolio Website`) and run the following commands:

   ```bash
   # Initialize git in the folder
   git init

   # Add all files to the staging area
   git add .

   # Commit the changes locally
   git commit -m "Initial commit of portfolio website"

   # Rename the default branch to 'main'
   git branch -M main

   # Add your GitHub repository as the remote origin
   # (Replace '<your-github-repo-url>' with the URL shown on your GitHub repository page)
   git remote add origin <your-github-repo-url>

   # Push your code to GitHub
   git push -u origin main
   ```

---

## Step 2: Import Your Project to Vercel

1. **Sign Up on Vercel:**
   Go to [vercel.com](https://vercel.com/) and click **"Sign Up"**. Select **"Continue with GitHub"** to automatically link your accounts.

2. **Create a New Project:**
   * In your Vercel Dashboard, click **"Add New"** in the top right and choose **"Project"**.
   * Under **"Import Git Repository"**, you will see a list of your GitHub projects. Find your repository (e.g., `portfolio-website`) and click **"Import"**.

---

## Step 3: Configure and Deploy

1. **Configure Settings:**
   * Vercel will automatically detect that your project is built with **Next.js** and preset all build commands (`npm run build`) and output settings perfectly. You do **not** need to change any default settings.
   * You do **not** need to add any environment variables since your entire configurations live inside your [siteConfig.ts](file:///c:/Users/Invisible/Desktop/Portfolio%20Website/src/data/siteConfig.ts) file!

2. **Deploy:**
   * Click the **"Deploy"** button at the bottom of the card.
   * Vercel will start compiling, bundling, and optimization processes. This takes about **1–2 minutes**.

3. **Success! 🎉**
   Once compilation is done, you will see a congratulations screen with a screenshot of your live website! Click the preview card to open your new live website under a free secure address (e.g., `https://portfolio-website-username.vercel.app`).

---

## How to Make Updates in the Future

Once your website is deployed, updating it is incredibly easy:
1. Make any change you want locally (e.g., edit text in [siteConfig.ts](file:///c:/Users/Invisible/Desktop/Portfolio%20Website/src/data/siteConfig.ts)).
2. Push your changes to GitHub using these commands in your terminal:
   ```bash
   git add .
   git commit -m "Update portfolio description"
   git push
   ```
3. Vercel will automatically detect the new commit, rebuild your portfolio in the background, and push it live in seconds **with zero downtime**!
