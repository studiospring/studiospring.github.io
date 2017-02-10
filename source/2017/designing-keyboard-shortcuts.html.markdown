---
title: Designing keyboard shortcuts
date: 2017-02-10
tags: keyboard, shortcuts, input
layout: article
published: true
---

<aside>
Despite the proliferation of new input methods, the humble keyboard still gets a good workout and offers features that have not been superseded by the new guard. Here I look at the various factors of ergonomics, speed, reconsiderability, findability, hints, error rates, internationalisation, habituation and collisions that should be considered when designing keyboard shortcuts.
</aside>

READMORE

The use of keyboards don't get a lot of attention these days when designing interfaces, with all these newer input methods like touch, stylus, voice and gesture. Although [in decline for web usage, it still accounts for about 50% of all web traffic](http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide). The fact that tablets have evolved in to 2-in-1 devices also suggests that people still find physical keyboards better for some tasks, most likely for digital creation rather than consumption. As a heavy keyboard user who even minimises trackpad usage, I notice the absence and presence of good keyboard commands aka shortcuts and can see a lot of room for improvement.

Before discussing design considerations and principles, the first question to ask is "Should we use keyboard shortcuts?" And if so, why and when? Unfortunately, there is not a great deal of research dealing with comparison of input methods relating to keyboard shortcuts. Secondly, the relative merits depend on so many variables that sweeping statements are difficult to make. Instead, I will touch on it <a href="#where-shortcuts-excel">later</a>.

##Ergonomics##
Reducing frequent (and especially unnatural) movements is important in reducing repetitive strain injuries. One such movement is between keyboard and mouse. For keyboard shortcuts, keeping fingers on or near the home row and reducing the use of pinky fingers and finger gymnastics is considered ergonomic.

I prefer shortcuts pressed by the left hand. This way you can keep your hand on the mouse more, unless you are one of the those [people who uses the mouse with your left hand](http://www.dailyinfographic.com/left-handed-facts-and-statistics-infographic).

Another problem here is that not everyone uses a qwerty keyboard. Some people deliberately change their layout to [Dvorak](https://en.wikipedia.org/wiki/Dvorak_Simplified_Keyboard), [Colemak](https://en.wikipedia.org/wiki/Keyboard_layout#Colemak) or other for precisely ergonomic reasons, others use localised keyboards. Some crazies, like myself, customise the layout even further. This means you won't know exactly where all users' keys are. I discuss a solution to this problem of various set ups in the [next article](/2017/future-of-keyboard-shortcuts.html).

##Speed##
In reducing movement, particularly between [mouse and keyboard](https://ux.stackexchange.com/questions/16155/is-there-any-research-into-the-cost-of-switching-between-using-a-keyboard-and-a), and use of mice there tends to be a corresponding [increase in speed](https://ux.stackexchange.com/questions/30682/are-there-any-recent-studies-of-the-keyboard-vs-mouse-issue). How much of a difference will depend on [Fitts's law](https://en.wikipedia.org/wiki/Fitts's_law). However, this speed comes at the cost of the dreaded learning curve, which I will cover later.

##Reconsiderability##
The flip side of speed is that you do not have time to think through your actions in the same way you do when using a mouse. This is different from undoability. What I call reconsiderability is the chance to reconsider and change your command before you complete it. Confirmation dialogue boxes are a janky way to do this. Keyboard shortcuts are at the extreme since you do not even have to hit return. This makes undo functionality all the more important.

##Findability##
I have broken the cognitive effort of keyboard commands in to findability, learnability and habituation. [Findability](https://en.wikipedia.org/wiki/Findability) tends not to refer to the ease of finding commands within interfaces, because it is usually taken for granted that interfaces can be found. But not so for keyboard shortcuts! Most people do not read the fine manual, so we need some other way of informing them of the presence and value of keyboard shortcuts. People may not even be aware that shortcuts exist for a particular application. For example, did you know that many [popular sites like Facebook and YouTube have shortcuts](https://blog.hubspot.com/marketing/keyboard-shortcuts-facebook-twitter)?

Speaking from personal experience, I often only look for shortcuts after I get frustrated by repeated, tiresome mouse interactions. Shortcuts are only worth the effort of learning in these situations, but wouldn't the experience be more pleasant if I discovered them before getting frustrated?

##Learnability##
Keyboard shortcuts are difficult to learn because they must be remembered and recalled, unlike icons or menus, which can be recognised. It is well known that recall is harder than recognition. 

Standardisation across applications arguably makes the biggest difference to learnability, though it can be a liability to progress in other areas of usability (the qwerty keyboard being a prime example of poor ergonomics).

##Habituation##
One under-appreciated roadblock is the power of habit in conditioning people from using shortcuts. Once you have learnt to use a GUI command method, it takes conscious effort to break the habit. Therefore, it may be worth educating users of the benefits and existence of shortcuts before mouse commands become a habit.

##Hints##
keyboard shortcuts generally provide fewer hints about their actions than icons. Often if you hover over an icon, a tooltip will give you another hint about what the icon does. Some actions also show an error message if the command fails. More often than not, there are no hints provided before or after a shortcut is executed. Providing hints to shortcuts would reduce errors and cognitive load.

The needs of casual users and novices also needs to be considered. These users will initially or never need shortcuts, so shortcut hints should not be intrusive. One possible solution is to detect the "density" of command invocation, that is how frequently a command is invoked within a given time frame and only suggest the shortcut when the user is "ready".

##Error rate##
Reducing cognitive and to a lesser degree typing errors is a consideration in designing keyboard shortcuts. Cognitive errors include misremembering the keys to press or misunderstanding what a command actually does. If the cognitive load of shortcuts cannot be reduced, for example through hints or feedback, it is especially important to be able to easily undo an action.

##I18n##
Keyboard shortcuts are also harder to internationalise than icons or menus (though these can be difficult too). Mnemonics like "S" for save may not make sense. There may be a case to be made for localising keyboard shortcuts. Some salient points are raised on this <a href="https://stackoverflow.com/questions/484174/strategies-for-localising-keyboard-shortcuts">StackOverflow thread</a>.

#Keyboard collisions##
Various layers of software from operating system, application, to plugin have different shortcuts and conventions. Obviously, when choosing a keyboard shortcut, you usually don't want to override an existing shortcut on another software layer (although, sometimes you do!). Another problem is that you probably won't know what operating system or applications a user is running. Wikipedia has a comprehensive, though unwieldy, [table of keyboard shortcuts](https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts) for common desktop environments and text editors.

Most UX designers are probably not familiar with [Emacs](https://en.wikipedia.org/wiki/Emacs) or [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) and may be wondering why these are listed in the Wikipedia page. These text editors were and are used by the programmers and computer boffins who gave us GUIs and all the other magic that we use today<sup><a href="#footnotes">1</a></sup>. Therefore, it was natural and sensible for GUIs (and [TUIs](https://en.wikipedia.org/wiki/Text-based_user_interface)) to use the same shortcuts that these text editors use. These conventions based on text editors that most keyboard users no longer use may seem antiquated and ripe for reinvention, but their user base is large and these conventions have rooted themselves in more "modern" software. If you are wondering why something like Control-K cuts text without the need to select it first in some Mac applications, it comes from Emacs. One other thing to keep in mind is that most people only use one of these text editors and so are not that familiar with the other's shortcuts.
 
One partial solution is to assign specific modifier keys (like Apple's &#8984; or Windows key) to different software layers, for example, using the &#8984; key for OS level shortcuts and alt/option key for application specific shortcuts. This can work if the modifier key can be changed so that collisions between modifier keys can be avoided and the user can choose the key that best suits their circumstances. One minor issue is that this can create two different shortcuts for the same operation, e.g. undo for a desktop app and undo for a web app.

Another solution is modal commands. This is how Vim works and is somewhat similar to using the caps lock key, which changes the output of all subsequent key presses. Thus, for a graphics application, you could have a layers mode, so that subsequent keys controlled layers, a selection mode and so on.

Another issue here is users who rely on keyboards to navigate for accessibility reasons. Again, different applications use different shortcuts. Here are the shortcuts for some popular screen readers: 

* [Jaws](http://webaim.org/resources/shortcuts/jaws) 
* [VoiceOver](https://www.apple.com/voiceover/info/guide/_1131.html) 
* [NVDA](http://webaim.org/resources/shortcuts/nvda)

##Where shortcuts excel##
Keyboard shortcuts need to be memorised to be effective, so are most useful to "power users". However, computers are such a critical tool these days that most knowledge workers need to accept that they are "power users" of certain applications. As such, most computer users will benefit from keyboard shortcuts. They should be used where their benefits relative to other input methods of reduced injury and speed outweigh their relative disadvantages of cognitive load. This means frequently used commands are best suited to keyboard shortcuts.

Although most GUI keyboard shortcuts are single commands without options, in command line interfaces very complicated multi-argument commands are the norm. These may not fit in to the category of keyboard shortcuts, but they have many design elements that are worth stealing.

##Recommendations for shortcuts##
In designing shortcuts, we want to reduce its inherent weaknesses of cognitive load and improve its strengths of efficiency and ergonomics through the following (roughly in order of importance):

* Avoid collisions
* Be consistent with other conventions
* Choose mnemonic keys
* Choose ergonomic keys
* Provide hints before and during use
* Make sure shortcut commands can be easily undone
* Allow customisation (bonus points for providing an Emacs and Vim option)
* Provide a cheat sheet

##In Real Life##
Let's have a look at the popular cut-copy-paste command and see what happens to these design principles "in real life". The copy-paste name was invented by Larry Tesler, an early UX designer at Xerox PARC. He has written a great [personal
account of the motivations and context behind the design](http://worrydream.com/refs/Tesler%20-%20A%20Personal%20History%20of%20Modeless%20Text%20Editing%20and%20Cut-Copy-Paste.pdf) (pdf). However, the [shortcut keys for these commands were popularised by the Apple Lisa in 1983](https://en.wikipedia.org/wiki/Cut,_copy,_and_paste).

<figure>
  <a href="https://www.flickr.com/photos/blakespot/2385128334"><img src="/images/2017/apple_lisa_keyboard.jpg" alt="Apple Lisa keyboard and aluminium keyboard compared."></a>
  <figcaption>Figure 1: The Apple Lisa Keyboard. Photo credits: <a href="https://www.flickr.com/photos/blakespot/">Blake Patterson</a> <a href="https://creativecommons.org/licenses/by/2.0/"><img class="cc-logo-text" src="/images/shared/cc.svg" alt="Creative Commons Attribution 2.0"></a></figcaption>
</figure>

At that point, Emacs and vi already had keyboard commands for copy pasting, but Apple being Apple (and the Emacs/vi commands not being so intuitive), they decided to do things differently. Collisions have obviously been avoided, most particularly with "P" for print. Although there is a mnemonic with &#8984;-C, the other keys seem to have been clustered together for ergonomic reasons since the commands are used together. With so many competing needs, choosing a key is clearly a fine balancing act, even for something as important as copy-paste and even so early in computing history.

##Conclusions##
Designing the perfect keyboard shortcut seems all but impossible. There are so many variables regarding the users, their work space and work flow, so you are almost guaranteed to produce an unsatisfactory solution for some users. Furthermore, the user base is probably a minority. However, there is an answer that neatly side-steps a lot of the issues I have raised. In my [next post](/2017/future-of-keyboard-shortcuts.html), I will look at this solution that is gaining popularity and how it can be improved even further.

##Footnotes##
<ol id="footnotes">
  <li>
    Vim is the spiritual successor to <a href="https://en.wikipedia.org/wiki/Vi">vi</a>, which originally developed modal editing and much other goodness.
  </li>
</ol>
