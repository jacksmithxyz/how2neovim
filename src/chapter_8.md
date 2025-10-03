# Installing a Colorscheme

The first thing you might want to do upon customization of your Neovim instance
is to add a custom theme.

Most users will install themes using their plugin manager, and as it's just a
set of colors, it works for a simple example for a first installation of a
plugin.


## Finding a Colorscheme

You can find a colorscheme you like on lists like [Awesome Neovim](), or
[Dotfyle]().

If you're planning to write code, you will likely want a **tree-sitter
compatible** theme (which will be explained later).


## Installing a Colorscheme

Once you find a colorscheme you like, there should be instructions in the GitHub
repository on how to install the theme using your plugin manager (in this case,
lazy).

For example, here is the line of code used to install the [Catppuccin](https://github.com/catppuccin/nvim) theme.

```lua
{ "catppuccin/nvim", name = "catppuccin", priority = 1000 }
```

This, along with any other plugins, are added to a `spec` table within the `setup({})` brackets of the line `require("lazy").setup({})` in your `init.lua` file.

For example:

```lua
require("lazy").setup({
  spec = {
    { "catppuccin/nvim", name = "catppuccin", priority = 1000 }
  },
})
```
## Setting the colorscheme

Once you've installed a colorscheme, you can set it using the `colorscheme`
command.

Add the following line of code to your `init.lua` file:

```lua
vim.cmd.colorscheme("catppuccin-mocha")
```

Some themes may have variants, and the documentation for each theme should walk you throught the appropriate name to use to set the theme.

## Setting and using multiple colorschemes

You first need to install multiple colorschemes, e.g.

```lua
{ "catppuccin/nvim", name = "catppuccin", priority = 1000 },
{ "neanias/everforest-nvim", priority = 1000 }
```

You can then set up keybinds to enable switching between them:

```lua
vim.keymap.set("n", "<leader>cc", "<cmd>colorscheme catppuccin-mocha<cr>")
vim.keymap.set("n", "<leader>ce", "<cmd>colorscheme everforest<cr>")
```

This is a simple and minimal way to switch themes, but you may want to explore
other methods, or third-party plugins.
