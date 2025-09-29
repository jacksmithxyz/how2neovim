# Setting a Leader Key

Creating custom keymaps is common in Neovim, as many users want to download plugins with additional functionality for their editor.

Users can then use their own custom keybinds to map plugin commands to something memorable.

In Vim and Neovim, there is a special key which is intented for custom user commands called the **leader key**.

### Remapping the Leader Key

By default, the leader is set to backslash (`\`). To many, this doesn't often feel very intuitive.

It is often remapped to the `space` key for ease of use, and because it doesn't clash with any of the default keys used in Vim's normal mode.

To remap the leader key to `space`, simply add the following line of code to your `init.lua` file:

```lua
vim.g.mapleader = " "
```

If you do decide to remap the leader key to something other than `space`, it may be worth looking up the [default keys](https://neovim.io/doc/user/quickref.html) used in Neovim.
