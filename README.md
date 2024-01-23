# ImpossibleFox


--------

**Maybe try lite version: [https://github.com/Naezr/ImpossibleFoxLite](ImpossibleFoxLite)**

**A simple and fast one-line theme in vanilla Firefox style, as close as possible to the so-called "compact mode" of the Safari browser**

![wordart](https://github.com/Naezr/ImpossibleFox/assets/95460152/41d28042-f758-464f-9493-6fc1d04a0a98)



# Obstacles
 - Since it is impossible to implement an address bar embedded inside a tab on css alone, [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) is used to implement javascript code.
 - I've just started learning javascript, and don't fully understand the code I copied from a [thread](https://www.reddit.com/r/FirefoxCSS/comments/nv1lb6/url_on_the_tab_like_the_new_safari/) on Reddit, and therefore can't fix some of the bugs yet.
 - Search suggestions (hints based on the input query in a new tab) are not supported. It's possible that they can be hooked up somehow with javascript, but I'm not cool enough to implement it yet.


# Features
- ***One-line***  
   All browser controls are in one line, which saves a bunch of vertical space and gives it to websites.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/7edee538-caad-4d96-bf42-9f0f3b99a161)

- ***Multiline***  
   As contradictory as it sounds, this theme is both single-line and multi-line. Because if you open a lot of tabs or make a lot of bookmarks, they will be spread over several lines.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/5db4a487-700c-48c7-a56a-da950e311ac2)


- ***Urlbar***  
   The urlbar is built right into the active tab. It's such an incredible feature that except for some guy from reddit nobody could realize it and make a theme based on it. Thanks to the reddit guy.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/7e92e8ad-83d1-41e4-99f9-1c24b9da7c75)

- ***Compactness***  
   The maximum space of the only line of the browser interface is given to the most important thing - tabs. And the address bar is built into the active tab and does not take up such valuable space at all.

- ***Narrow window mode***  
   If the window width is too small, the tabs will disappear and a button with their list will appear.

   ![ia4OF3kXPM](https://github.com/Naezr/ImpossibleFox/assets/95460152/84af4c6a-0ed0-42c4-837c-19a73d47764c)


- ***Vanilla style***  
   This theme just intelligently moves the buttons without affecting the underlying design code of the browser.

- ***Customizability and openness***  
   If you want, you can edit the theme code however you want, move the buttons yourself, and suggest new ideas and fixes.



# Installation

First, you'll need to install [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig). Installation instructions can be found on the project page.

After that, go to the page `about:config` in your browser and change the following settings:
 - `toolkit.legacyUserProfileCustomizations.stylesheets` => `True`
 - `browser.urlbar.maxRichResults` => `0`

Remember to click the check mark when changing the numeric value and restart your browser.

Next, [download](https://github.com/Naezr/ImpossibleFox/releases) the latest version of *ImpossibleFox* and copy the files from the archive to `chrome` folder in your profile folder.

You can then customize the layout of the buttons, for example like this:

![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/c7863a53-24bb-4734-ab36-75ee3f4f92f6)

Don't leave any buttons on the navigation bar (it's the lowest one) and in the advanced menu, you can't see this bar anyway. The back, forward, extensions and menu buttons are scripted, so no matter how much you pull them, they will be back in place when you restart the browser.



# Customization
If you don't want the tabs to be centered, you can remove this by deleting the highlighted code in the file `userChrome.css`:

![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/883ed4a7-79b1-4acf-9436-23234b845262)

If you really want to move the scripted buttons, you can edit the script `buttons.uc.js`. We are interested in the highlighted part of the code:
 
![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/f766e1c3-cd85-440d-9242-30c469ffe59e)

Let's break it down in order. First, the "back" button is placed on the left, and the "forward" button after it. Then the " extensions" button is placed on the right and the "menu" button after it. The syntax is as follows: `ext.after(menu);`, i.e. we take the " extensions " button and put the " menu " button after it.

Warning! After editing any scripts you should clear the `startupCache` folder in the profile folder, otherwise the changes will be ignored and the old script will be loaded from the cache without your changes.

# Extensions

For extra style, you can use extension [Adaptive Tab Bar Colour](https://addons.mozilla.org/ru/firefox/addon/adaptive-tab-bar-colour/)  
To make it look clear, set the settings like this:

![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/360d0309-b46d-4081-a833-9a5db19ef5be)




# Known bugs

 - If you want to move the cursor in the address bar using the arrows on the keyboard, instead of the expected result, you will switch to the next tab. Sounds like nonsense, but just try clicking on the URL with your mouse and then on the keyboard arrows. I have no idea how to fix this at all, the only thing I've managed to figure out is that the problem lies in the `url.uc.js` script.

 - The empty navigation bar is still visible in a new tab and casts an ugly shadow. The shadow disappears when the Adaptive Tab Bar Color extension is installed, so it can be fixed with css, but I haven't figured out how.
 - If you create a new tab and don't do anything in it, the address bar will be shown all the time. You can just click on it first and then on the empty space to get everything back to normal. This doesn't seem to be a bug, but rather a standard browser feature that was inconvenient in this context.


----------



# Благодарность
 - [MrOtherGuy](https://github.com/MrOtherGuy)   Thanks for the fx-autoconfig and the repository with cool css's.  
 - [Firefox-Alpha](https://github.com/Tagggar/Firefox-Alpha)   This project inspired me to create this topic. There the address bar is also built into the tab, but it is less convenient.  
 - [Reddit guy](https://www.reddit.com/r/FirefoxCSS/comments/nv1lb6/url_on_the_tab_like_the_new_safari/)   Without his javascript code, nothing would work.  
