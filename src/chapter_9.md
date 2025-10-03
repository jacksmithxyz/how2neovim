# Installing Other Plugins

As mentioned in the previous chapter, to install plugins you typically need to include the name of the plugin inside of the curly brackets in your `lazy.setup({})` method.

Let's take a look at an exmaple of installing a plugin, and how to set up different types of plugins.

## Plugin Example: Installing Lualine

Here’s an example of how you would install the [lualine](https://github.com/nvim-lualine/lualine.nvim) plugin - a simple statusline for Neovim.

```lua
require("lazy").setup({
    { "nvim-lualine/lualine.nvim", dependencies = { 'nvim-tree/nvim-web-devicons' }, opts = {} }
})
```

Each plugin will have a different way to set it up, and there's a lot going on in this line of code.

The **dependencies** table specifies any other plugins lualine relies on. In this case, it relies on
[nvim-web-devicons](https://github.com/nvim-tree/nvim-web-devicons), which you can choose to install
here instead of separately.

The second part is an empty table assigned to the name `opts`.

What this essentially says, in terms of lazy, is "this plugin has no other options set, please set it up
automatically for me".

If this part `opts = {}` was removed from the individual plugin table, we instead would have to write a line of
code to set up the plugin manually, e.g. with:

```lua
require("lualine").setup()
```

Each plugin is slightly different to set up, and may have additional options you can configure inside of the `opts = {}` brackets.

## Finding Plugins

You can find curated lists of popular plugins on [Dotfyle](https://dotfyle.com) and at [Awesome Neovim](https://github.com/rockerBOO/awesome-neovim).
