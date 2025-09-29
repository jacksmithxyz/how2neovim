# Introduction to Plugins

The plugin ecosystem is one of the many reasons people decide to use Neovim.

Plugins are **user created**, and add extra functionality to Neovim outside of what is possible with base program.

## Plugin Managers

Plugins are usually installed and managed by a **plugin manager**, which is a bit like a package manager for your desktop system.

It saves you the trouble of having to dig through GitHub repositories, manually download the code for the plugin you want, make sure the scripts are in the correct place for Neovim to use, and periodically check for any new updates. Plugin managers do this for you auto-magically. 🪄

Historically, Neovim users have used third-party plugin managers developed by members of the community. 

More recently, Neovim has added a built-in plugin manager called `vim.pack` which is still in early development. In this book, we will focus on the plugin manager [lazy](https://lazy.folke.io/) until the built-in plugin manager is out of nightly build.
