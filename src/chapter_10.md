# Introduction to Tree-sitter

Tree-sitter is a parsing library that improves code syntax highlighting in Neovim.
Tree sitter comes built-in to Neovim, and is relatively easy to configure.

## Installing nvim-treesitter

The Neovim core team provide an official plugin which helps make using tree-sitter
within Neovim a lot easier.

To install [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter), add the following line of code to your lazy setup.

```lua
{"nvim-treesitter/nvim-treesitter", lazy = false, build = ":TSUpdate"}
```

## Configuring Tree-sitter

For tree-sitter, there are many different modules you may wish to use or enable.
Two of the most important options to set are `ensure-installed` and `highlight`.

Tree-sitter **does not** enable syntax highlighting by default. You need to explicitly
enable it in your configuration. Here is an example configuration.

```lua
require("nvim-treesitter.configs").setup({
  ensure_installed = { "c", "lua", "vim", "vimdoc", "query" },
  highlight = {
      enable = true
  }
})
```

Replace the languages in ensure_installed with the relevant languages you need. The full list of languages and additional configuration options are available [here](https://github.com/nvim-treesitter/nvim-treesitter).

> 🚨 **Help! My code still looks the same!**
>
> Sometimes you won’t see any noticeable difference in your syntax highlighting until you install a language server (which we will do in the LSP section).

## Tree-sitter and colorschemes

When picking a Neovim colorscheme, you may want to install a theme which is tree-sitter supported/compatible — Awesome Neovim provides a [list of themes](https://github.com/rockerBOO/awesome-neovim#colorscheme) which you can use.
