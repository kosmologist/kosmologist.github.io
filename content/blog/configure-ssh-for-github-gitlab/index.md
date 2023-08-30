---
title: How to configure SSH for GitHub and Gitlab
date: "2023-30-30T05:17:00.000Z"
description: "Step by Step instructions to configure SSH for GitHub/Gitlab on Mac"
---

We can use SSH protocol to securely communicate with Git, When we are using SSH keys to authenticate to GitHub or 
Gitlab remote servers, we don't need to supply username or password with every request. 

### Prerequisites
To continue in the document, you must have the following:
1. GitHub or Gitlab account
2. OpenSSH client which comes pre-installed in linux and mac. You can verify using following: `ssh --V`

### Configuring SSH on macOS
1. Create a new directory named `.ssh` in home directory
2. Navigate to `~/.ssh` and generate a new SSH key using the following. 
```
ssh-keygen -t ed25519 -C "$(git config user@example.com)" -f qasim
```
3. You should be able to see two files `qasim` and `qasim.pub`. One of them (`qasim.pub`) is the public key which we can 
safely upload to remote servers and the other one `qasim` is the private key which we can't share with anyone.
4. Create a file named `config` if not already there in `~/.ssh` to configure known hosts. (e.g in our case, known hosts are
github.com or gitlab.com)
5. To configure GitHub as known host, we need to paste the following in `~/.ssh/config`:
```
 Host github.com  
   PreferredAuthentications publickey  
   IdentityFile ~/.ssh/qasim`
```

6. Or if we have to configure gitlab, we can use the following in `~/.ssh/config`. We can append multiple hosts in single config file as well.
```
Host github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/qasim
```

7. Now we need to add these keys to ssh-agent for which run the following:
```
eval "$(ssh-agent -s)"
```
8. Add the private key we just generated in previous step to ssh-agent using following command
```
ssh-add qasim
```
### Adding public key to GitHub/Gitlab
Now we need to put this public ssh key on Gitlab and GitHub account, once added, we can use ssh to do remote git operations.
I used the same key for both GitHub and Gitlab, with no passphrase for the sake of this guide.


### Verifying setup
You can verify if everything is working fine by using the following:

```
> ssh -T git@github.com
> Welcome to GitLab, @qasim!
> ssh -T git@gitlab.com
> Hi Qasim! You've successfully authenticated, but GitHub does not provide shell access.
```