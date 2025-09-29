# Writing an initial configuration

Neovim has numerous built-in options for changing the default behaviour of Neovim.

Let’s start by creating some very simple settings that you might want for your Lua configuration. We'll then go over the configuration line by line, and explain what the settings do.

Open up your `init.lua` file and add the following code:

```lua
vim.opt.cursorline = true
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.termguicolors = true
```
You can save and quit with `:wq` and re-open Neovim, and you should notice some changes to your editor.

This code:
- Sets a cursorline (highlights your currently selected line)
- Adds line numbers on the left-hand side of your editor window
- Sets the line numbers to be relative (this will make more sense later)
- Uses true colors for the terminal

# Where's the rest of it?

In many configurations you will copy from online, there will be a *lot* more options set. But what some of these users don't realize is that Neovim comes with a set of [sensible defaults](https://neovim.io/doc/user/vim_diff.html#nvim-defaults), meaning a lot of the typical settings you might need are already set internally.

If you want to add any other configuration options yourself, it's worth looking through this list to see if they are already enabled/disabled by default first.

# Optional: Refactor your code

If you want to shorten each line of code, you *could* set up a variable to map `vim.opt` to a variable called `opt` to make each line shorter.

This is completely optional, and only affects the aesthetics of your configuration.

```lua
local opt = vim.opt

opt.cursorline = true
opt.number = true
opt.relativenumber = true
opt.termguicolors = true
```
