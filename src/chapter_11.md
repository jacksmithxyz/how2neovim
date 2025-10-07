# Introduction to LSP

The LSP is what you can use to give Neovim extra features when coding that you might associate with VSCode or other ide-like code/text editors.

LSP stands for **Language Server Protocol**. Neovim comes with a built-in LSP **client**, and it uses the language server protocol to communicate with these different **servers** for each language.

These servers make it possible to get features such as go-to-definition, auto-complete and syntax errors (like if you spell something wrong or miss a semi-colon — so you don’t rip your hair out trying to find it).

While Neovim provides a built-in LSP client, you will need to install the
servers yourself. 
