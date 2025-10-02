# Setting up `lazy`

There are many different plugin managers in the Neovim ecosystem. This book will use [lazy.nvim](https://github.com/folke/lazy.nvim).

To configure lazy, add the following code to start of your `init.lua` file.

```lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
    vim.fn.system({
        "git",
        "clone",
        "--filter=blob:none",
        "https://github.com/folke/lazy.nvim.git",
        "--branch=stable", -- latest stable release
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)
```

### Breaking Down The Code

Here's a step-by-step breakdown of what this code does:


1. Line 1 creates a path to the Neovim data directory:

2. Line 2 checks whether that path exists (i.e. checks whether or not you already have lazy installed)

3. Lines 3 - 9 clones the repo if it doesn't exist on your system (in other words, installs lazy)

4. Line 10 adds lazy to Neovim’s runtimepath

> **lazy is a plugin manager and a plugin itself** - lazy adds *itself* to the runtimepath, so it loads every time Neovim is opened. In turn, it will manage the plugins you install.

Directly after this code, the plugin manager is bootstrapped and now needs to be setup with the following line of code:

```lua
require("lazy").setup({})
```

Keep in mind that `require` is a Lua concept, not a Neovim concept. 

While the first code snippet *installs* the plugin manager, this one *runs* it.

Congratulations!

You now have your very own Neovim plugin manager setup. Now it's time to install some plugins.
