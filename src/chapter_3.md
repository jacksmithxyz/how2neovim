Neovim, like a lot of other UNIX programs, is configured through a user’s [dotfiles](/reference/dotfiles).

By creating dotifles for Neovim, you can change the default settings, initialize plugins, set colorschemes, and more.

When you open Neovim, it will look for these dotfiles in order to load your configuration into Neovim. One of the most important files that Neovim will look for on startup is the `init.lua` file.


### Creating an `init.lua` file

Neovim will look for a file named `init.lua` stored in your **config** directory, which is `~/.config/nvim`.

If you don't already have one, create the directories needed with the following command:

```sh
mkdir ~/.config/nvim
```

And from your home directory, enter it with:

```sh
cd .config/nvim
```

From here, run `touch init.lua` to create your initial configuration file.


> If you want to learn more about how this works, open Neovim, type `:h lua-guide`, and scroll to `lua-guide-config`.

### Testing Your Initial Configuration File

Open up your new `init.lua` file with `nvim init.lua`.

Enter insert mode with `I` and type the following:

```lua
print("Hello World!")
```

Then go back to normal mode with `Esc`, and type `:wq` to save and quit the file.

Re-open the file with `nvim init.lua`, and you should see "Hello World!" at the bottom of your terminal.

If so, then congratulations! 🎉

You've just created your first custom Neovim configuration.
