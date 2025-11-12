## Goal
Connect the local project at `c:\Users\KALAM\Desktop\mobilegadgets` to the GitHub repository `https://github.com/ITGuruSolutions/mobilegadgetsworld-2025`, set `main` as the default branch, and push code.

## What I Will Do
1. Detect if the folder is already a Git repository.
2. If not, initialize Git with `main` as the default branch and create an initial commit.
3. Add the GitHub remote as `origin`.
4. Push the `main` branch to GitHub and set upstream tracking.
5. Verify remote and branch configuration.

## Commands I Will Run (PowerShell)
### If the folder is NOT a Git repo yet
- `cd "c:\Users\KALAM\Desktop\mobilegadgets"`
- `git init -b main`  (or `git init` then `git checkout -b main` if needed)
- `git add .`
- `git commit -m "Initial commit"`
- `git remote add origin https://github.com/ITGuruSolutions/mobilegadgetsworld-2025.git`
- `git push -u origin main`

### If the folder is ALREADY a Git repo (no remote yet)
- `cd "c:\Users\KALAM\Desktop\mobilegadgets"`
- `git branch -M main`  (ensures the branch is named `main`)
- `git remote add origin https://github.com/ITGuruSolutions/mobilegadgetsworld-2025.git`
- `git push -u origin main`

### If the remote has existing history you want to keep
- `cd "c:\Users\KALAM\Desktop\mobilegadgets"`
- `git branch -M main`
- `git remote add origin https://github.com/ITGuruSolutions/mobilegadgetsworld-2025.git`  (or `git remote set-url origin ...` if it already exists)
- `git fetch origin`
- `git merge --allow-unrelated-histories origin/main`  (or `git rebase origin/main`)
- Resolve any conflicts
- `git push -u origin main`

## Verification
- `git remote -v` shows `origin` pointing to the GitHub URL
- `git status` is clean
- `git log -n 1` shows the latest commit on `main`

## Notes
- Ensure you have GitHub credentials; HTTPS pushes prompt for a Personal Access Token.
- I will avoid force pushes unless you explicitly request replacing the remote history.
- `.gitignore` already exists; it will be respected during the initial commit.

Please confirm, and I will execute these steps.