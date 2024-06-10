import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/website-screenshot.png",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://scripts.withcabin.com/hello.js",
            async: true,
            defer: true,
          },
        },
      ],
      title: "how2neovim",
      social: {
        github: "https://github.com/finnala/",
      },
      favicon: "/favicon.ico",
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              link: "/getting-started/what-is-neovim/",
            },
            {
              label: "Installing Neovim",
              link: "/getting-started/installing-neovim/",
            },
            {
              label: "Entering Neovim",
              link: "/getting-started/your-first-steps/",
            },
          ],
        },
        {
          label: "Configuration",
          items: [
            {
              label: "The init.lua file",
              link: "/configuring-neovim/init-lua",
            },
            {
              label: "Writing an Initial Configuration",
              link: "/configuring-neovim/writing-an-initial-configuration",
            },
            {
              label: "The runtimepath",
              link: "/configuring-neovim/the-runtimepath",
            },
            {
              label: "Extending The Configuration",
              link: "/configuring-neovim/extending-the-configuration",
            },
            {
              label: "Custom Keymaps",
              link: "/configuring-neovim/keymaps",
            },
          ],
        },
        {
          label: "Plugins",
          items: [
            {
              label: "Introduction",
              link: "/plugins/introduction",
            },
            {
              label: "Setting up a Plugin Manager",
              link: "/plugins/setting-up-a-plugin-manager",
            },
            {
              label: "Installing Plugins",
              link: "/plugins/installing-plugins",
            },
            {
              label: "Colorschemes",
              link: "/plugins/colorschemes",
            },
          ],
        },
        {
          label: "Tree-sitter and LSP",
          items: [
            {
              label: "Tree-sitter",
              link: "/tree-sitter-and-lsp/tree-sitter",
            },
            {
              label: "Introduction to LSP",
              link: "/tree-sitter-and-lsp/introduction-to-lsp",
            },
            {
              label: "LSP Configuration",
              link: "/tree-sitter-and-lsp/lsp-configuration",
            },
            {
              label: "Diagnostics and Keybinds",
              link: "/tree-sitter-and-lsp/definitions-and-keybinds",
            },
          ],
        },
        {
          label: "Advanced",
          items: [
            {
              label: "Nested Configurations",
              link: "/advanced/nested-configurations",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
