---

title: Synthy
image: /images/metasynthy.jpg
tags: music code

---

Syn­thy is an on­line syn­thes­iser and se­quen­cer with live world out­put and col­ours made byFilip Hnízdo us­ing the Web Au­dio API, the live server is powered by socket.io and Node.js. The data­base of pat­terns pushed to syn­thy is powered by the won­der­ful NeDB.

[Visit synthy](http://synthy.io)

Syn­thy was ori­gin­ally star­ted, late in the sum­mer of 2014 with in­spir­a­tion provided by Fiona Ship­wright and has been ex­pan­ded since then. It may grow even more if you like it.

## Controls

Syn­thy has three os­cil­lat­ors which can be set to play sine waves, saw­tooth waves, square waves, tri­angle waves but can also be piped through to a source of white noise.

Syn­thy works in rows, much like a tracker. Each os­cil­lator can have sev­eral rows and each will be played after the pre­vi­ous row has fin­ished. Each os­cil­lator works in­de­pend­ently from the oth­ers but waits un­til the os­cil­lator with the longest pat­tern has fin­ished be­fore start­ing again.

You can set fre­quency for each os­cil­lator row (does’t work for white noise as the fre­quen­cies are all already there, some­where) us­ing Hz or typ­ing note val­ues with the note name fol­lowed by an octave num­ber.

You can set a gain/​volume for each os­cil­lator row us­ing a value between 0 and 1. There is a lim­iter in place for each os­cil­lator to stop things get­ting too loud and hurt­ing you.

You can set a cut off point and res­on­ance/​q factor for each os­cil­lator step. These are raw val­ues and can lead to un­pre­dict­able things.

You can ran­dom­ise the pitch and volume by us­ing two con­sec­ut­ive di­gits (for amount of ran­dom­ness fol­lowed by each other) 70 for very ran­dom fre­quency and reg­u­lar volume.

## Song mode

Pat­terns (copied as URLS) can be played to­gether and re­arranged in a se­quence us­ing the song mode. You can as­sign each one a col­our as the URLs may look sim­ilar to any­one but Syn­thy.

## Sharing

Each pat­tern has a unique URL which should be re­gen­er­ated whenever you change any­thing.

Pat­terns can also be pushed to syn­thy so that the whole world can hear them, live, if they are on the listen page. This may even­tu­ally have mul­tiple chan­nels but as it’s the ini­tial launch you can all play in the one.
