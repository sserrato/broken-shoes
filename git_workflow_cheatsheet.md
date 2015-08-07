# Git Workflow Cheatsheet

***Git & GitHub Help for WDI 17!***

## Resources

- [Slides for the lesson on branching][branching-deck]

Articles and tutorials on branching and workflows in Git:

- [Git Branching][atlassian-branches]
- [Common Git Workflows][atlassian-workflows]
- [Merging vs Rebasing Workflows][atlassian-merge-rebase] ('Conceptual Overiew' section)
- [In-depth Discussion of a Workflow][in-depth-workflow]
- ['Reset Demystified'][git-scm-blog-reset] (helps to understand the structures of Git)
- **[A Git Branching visualization game!][git-viz-game]**

## Commands

#### Creating Repos

- **`$ git init`** — Initializes a new local repository and begins version
  tracking. Creates a hidden directory that tracks info about the repository,
  including remote repositories.
- **`$ git clone <ssh_or_http_url>`** — Clones a remote repository as a new local
  repository with the given connection format (SSH or HTTPS).
- **`$ git remote add <remote_name> <ssh_or_http_url>`** — Connects your repo to
  a new remote at the given URL, via the given connection format
  (SSH or HTTPS), and names it with the given name.

#### Working on Repos

##### Branching and Merging

- `$ git branch <branch_name>` — Creates a new branch with the given name.
- `$ git checkout <branch_name>` — Moves you to the branch (or commit in
  history) with the given name.
- `$ git checkout - b <branch_name>` — Creates a new branch and checks it
  out, all in one!
- `$ git merge <branch_name>` — Merges the branch cwith the given name into
  the current branch.

##### Staging Changes

- `$ git add .` — Adds all changes (creating, updating and removing files),
  to files in this directory and sub-directories, to the staging area.
- `$ git add -A` — Adds all changes (creating, updating and removing files),
  in all files, to the staging area.
- `$ git add -p` — Adds updates in all staged files to the staging area,
  but runs you through all the changes step by step.

##### Committing Snapshots

- `$ git commit -m "awesome commit message"` — Saves a snapshot of the
  filesystem including any changes that have been added/staged as a commit.
  It saves the commit with a simple description, or *message*, given after
  `-m`.
- `$ git commit` — Commits as above, but takes you to a text editor (`nano`)
  to edit the commit's *message*.

##### Exploring Repos

- `$ git status` — Prints out the current "tracking state" of the repo. The
  state includes information about changes, additions and deletions of
  files, whether or not these changes have been added/stages, and sometimes
  even any merge conflicts.
- `$ git log` — Prints out the commit history of the current branch of the
  current repo.
- `$ git branch` & `$ git branch -v` — Prints out a list of all available
  branches in the repo.
- `$ git remote` & `$ git remote -v` — Prints out a list of all available
  bremotes connected to the repo.
- `$ git diff <branch_or_commit_name>` — Prints out information about
  *differences*, as insertions (in green) and deletions (in red), between
  the current commit and the given commit (or the most current commit in the
  given branch).

#### Collaborating with Other Repos (Remotes)

- `$ git push (-u) (<remote_name> <branch_name>)` — Push, or send, commits to
  remote at the given branch. `-u` saves the remote and branch names as
  default for future use.
- `$ git fetch <remote_name> <branch_name>` — Fetch, or receive, commits from
  a given remote at the given branch. Stores these commits in either the
  named commit, or in a special, new branch.
- `$ git pull <remote_name> <branch_name>` — Performs a `git fetch` into a new
  branch, then merges it into the current branch and removes the fetched
  branch.

## Our Workflow(s)

Within a collaborative project, there are two roles: programmer and manager.
Any given member of the project may be a programmer or a manager at any
moment! Programmers implement features, while managers integrate the work of
the members of the team into the application.

#### Create Repo Workflow

Manager:

1. Create a repo locally, using `git init`.
2. Create a remote version of this repo on GitHub.
3. Link the remote to the local repo, either using `git remote add` or
   `hub create`. The remote should be called `upstream`.

Programmer:

1. Identify the repo on GitHub.
2. Fork the repo to your own account.
3. Use `git clone` to copy **your account's repo** locally. This remote should
   be called `origin`.
4. Use `git add remote` to link your remote to the manager's repo. This remote
   should be called `upstream`.

#### Programming Workflow

1. Make changes to your files.
2. Stage a series of changes that go together using `git add`.
3. Take a snapshot of those changes with a meaningful description using
   `git commit`.

#### "Branching" Workflow

Programmer & Manager (when writing code):

1. [Create Repo Workflow]
2. Ensure you are on the `master` branch with `git checkout`. *Only
   pull when you are on `master`.*
3. Pull from `upstream/master`.  *You should never have a merge conflict.*
   If you do, **stop**, because something is wrong.
4. Create or `git checkout` the feature branch you want to work on.
5. [Programming Workflow]
6. Push the branch to `origin/<feature_branch_name>` (or
   `upstream/<feature_branch_name>` if you are the manager).
7. On GitHub, submit a pull request (PR) where the base is the manager's
   master branch (`upstream/master`) and the head is the feature branch.
8. Continue with #2.

Manager:

1. When you receive a pull request (PR), attempt to merge it on GitHub.
2. If you can not, follow GitHub's example code to `git fetch` and `git merge`
   it locally, and then push up to `upstream/master` (**the only time you
   ever push to `upstream/master`**).

<!-- Links -->

[branching-deck]:         https://docs.google.com/presentation/d/1tE0D8F-TNNG36tjCN-H1hzhjAb2rWknGcohEESaPW08/edit#slide=id.p
[atlassian-branches]:     https://www.atlassian.com/git/tutorials/using-branches
[atlassian-workflows]:    https://www.atlassian.com/git/tutorials/comparing-workflows
[atlassian-merge-rebase]: https://www.atlassian.com/git/tutorials/merging-vs-rebasing
[in-depth-workflow]:      http://nvie.com/posts/a-successful-git-branching-model
[git-scm-blog-reset]:     https://git-scm.com/blog/2011/07/11/reset.html
[git-viz-game]:           http://pcottle.github.io/learnGitBranching
