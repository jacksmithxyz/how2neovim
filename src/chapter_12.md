# LSP Configuration

As mentioned in the previous chapter, Neovim comes with an LSP client, but
requires users to install the servers for the languages they want to use. 

Each language server has different instructions for installation. 

For example, the language servers for HTML/CSS/JS are provided by Microsoft, and are installed via `npm`. Whereas the language server for Rust might be managed by `rustup`.

These can be installed manually, but in this guide we will use a plugin called
Mason to automatically handle the installation and configuration of LSP servers.

> **Having the right package managers**
>
> You will need to have the relevant package manager installed based on what language servers you need. For example, if you want to use the HTML/CSS/JS language servers, you will need to have `npm` installed on your system.
>
> Microsoft keeps a [list of LSP servers](https://microsoft.github.io/language-server-protocol/implementors/servers/) where you can check the repositories to see which package manager (if any) you will need to install it.

## Setting up Mason

Add the following lines of code in your `lazy` setup: 

```lua
{ "williamboman/mason.nvim", opts = {} },
{ "williamboman/mason-lspconfig.nvim", opts = {} }
```

## Installing LSP servers

From within Neovim, you can run `:Mason` to get a list of language servers. You
can scroll through them using standard Vim keybinds, and install the servers you want with `I`.

Once installed, you don't need to do any further setup. Mason will automatically
attach the LSP client with an appropriate language server when you open up a
project.

> **Troubleshooting**
>
> If you load up a file and aren’t seeing any syntax errors or warnings come up where they should be, there’s a couple things you can do:
>
> Project Structure — The LSP client only attaches to a buffer in certain scenarios. For example with Rust, you have to be in a cargo project for the LSP to work. If you try and create a single main.rs file, the LSP won’t attach. 
>
> Use the LSP commands — You can check this with `:LspInfo` which will tell you whether you have a client attached or not. You can also run `:LspStart` to attach it yourself.
