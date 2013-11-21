
# Setting up your Mac for Development

These instructions work for OS X 10.8. You might need to google around for certain steps if you have an older version.


### Xcode

Download from the Apple App Store.
This will take a while, 1.5 gb.  
When Xcode has finished, go to Xcode Preferences

* Choose the Downloads pane

* Hit install for "Command Line Tools"

  * This installs various compilers that allow your computer to build software from source code.


### Sublime Text 2

Sublime is a popular text editor that has many easily configurable packages to help you find your ideal workflow.
It will prompt you to pay for a license often but never forces you to pay.

* Install from http://www.sublimetext.com/2

* Then install package control for Sublime

  * Install from http://wbond.net/sublime_packages/package_control
	
  * To install packages, use Sublime's Command Pallete (shift-command-p)

Useful packages:

* Dayle Rees Color Schemes
  * more color schemes to choose from
  
* Bracket Highlighter

* Sublime Linter
  * Will find most of your errors and style mistakes

* Git Gutter
  * Displays modified/added/modified next to the line number for git tracked files


### HomeBrew

Homebrew is a package manager for OS X. It allows you to install various software bundles easily from the command line.

* Install @ http://mxcl.github.io/homebrew/  

Run this in the terminal

    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"


### git

Git is a version control system for software.
If you're going to collaborate with anyone you'll likely be using this software.

Use HomeBrew to install git.

Run this in the terminal

    brew install git

* Allow the command line to use your keychain. You won't be prompted for a username and password while using git.

		# run this in the terminal
		git config --global credential.helper osxkeychain

* Make an education account to get free private repos

  * Sign up @ https://github.com/edu

* update your gitconfig

  * https://github.com/edu


* OPTIONAL: Download and install the GitHub GUI.

  * Install @ http://mac.github.com/


### Oh-my-zshell

Zsh is an alternative to bash. It offers auto completion and easily configurable command prompts.
[More information](https://github.com/robbyrussell/oh-my-zsh)

Run this in the terminal

    curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh

Add a command prompt syntax highlighter.  
This shows you if the command line utility you're trying to use is installed on your computer by highlighting it as green or red.

Ran this in the terminal

    git clone git://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting

In your .zshrc, add zsh-syntax-highlighting to the plugins

    

## Extras

###Increase your key-repeat rate and Remap your capslock key

Install @ http://pqrs.org/macosx/keyremap4macbook/

* Lower the "Delay to Key Repeat" and "Key Repeat", test it and figure out what's comfortable to you.

Install @ http://pqrs.org/macosx/keyremap4macbook/pckeyboardhack.html.en

* Remap your ESC to capslock if you want to, very helpful if you are a vim user.
