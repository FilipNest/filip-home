---

title: Tiger Territory game
tags: code music
image: /images/tigerterritorygame.jpg
featured: true
description: A top-down, two-mode (adventure/arcade) game made for the Zoological Society of London.

---

Ti­ger Ter­rit­ory is a two-mode top-down ad­ven­ture/​ar­cade game fo­cused on the life of a Sumat­ran ti­ger in In­done­sia. I made it us­ing Im­pactJS (with art­work and an­im­a­tion by my col­league Alas­dair Dav­ies). I made a bit of mu­sic for it as well.

[Play the game](http://apps.zsl.org/topdowntiger/)

The game is full screen, hope­fully works on most desktop and tab­let browsers and can be con­trolled with keys, mouse and touch. I’m still work­ing on a prop­erly small-screen mo­bile friendly ver­sion as it does­n’t scale down that far yet very well.

As with most such things I would have prob­ably done a lot of things dif­fer­ently if start­ing today (it’s been a gi­ant learn­ing ex­per­i­ence) but the game has quite a few fun fea­tures.
Features

Mouse, key­board or touch joy­stick con­trolled ti­ger (I made my own simple touch joy­stick us­ing Mi­crosoft’s new pointer events stand­ard and hand.js as a filler for non­sup­port­ing browsers)

Ti­ger move­ments in­clude run­ning (with en­ergy bar), walk­ing, prowl­ing, swim­ming, sleep­ing and sniff­ing

Ti­ger can hide from prey un­der trees (al­most in­vis­ible to prey when prowl­ing)

Prey is ta­pir, deer and boar and each have their own little AI per­son­al­ity traits in­clud­ing sight range/​angle, hear­ing range and speed.

The world also in­cludes snares which can catch ti­gers, cam­era traps which take pho­tos of them and elec­tric fences which hurt.

Ad­ven­ture mode con­tains 12 achieve­ments the player has to un­lock.

Spoiler: On ad­ven­ture mode you can find an­other ti­ger that fol­lows you around.

Ar­cade mode is a race against time to get as many points as pos­sible. Mostly through 14 bo­nus/​combo types. There’s a Mon­goDB powered score­board for this too.

There are two maps, one ri­dicu­lously huge one for desktop and one smal­ler one for tab­lets.

Every game activ­ity is logged us­ing Google Ana­lyt­ics events so we can track ex­actly what’s work­ing and what is­n’t and hope­fully do some live visu­al­isa­tions even­tu­ally.
