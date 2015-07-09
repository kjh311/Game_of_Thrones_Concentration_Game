#Game of Thrones Concentration / Memory Game

##Rules:
Basic card matching memory game.
Find 2 matches get a point.
Player with most points wins.

##Possible "User Stories"

##MVP: Minimum Viable Product

- Post website online

- cards are placed randomly based on math
###DONE!!

- Card Pairs with various GOT characters
###DONE!!

- each pair is a point that gets added to player's score
###DONE!!

- cards flip over for at least a second, if a match is sucessfully found match disapears
###DONE!!

- 2 players, switches turns and lets user know whose turn it is
###DONE!!

- Player with most points wins or a tie is determined
###DONE!!

##ICEBOX: Extra Features

- responsive design
###DONE!!

- sword cursor
###DONE!!

- fade in and fade out
###DONE!!

- "Play Again" buttons appears when game is finished
###DONE!!

- background changes randomly
###DONE!!

- added button to make it snow and remove snow
###DONE!!

- a dradon card can be played that resuffles all the cards

- Countdown timer shuffles the remaining cards / or number of wrong picks / or after each wrong move a random pair of cards is moved with the cards moving visually

- can choose the back of the cards

- each game randomly selects which character cards will be played

- After each pair is found a Quote / piece of info of each character is displayed / sound effect of that character

- hover psuedo selector over each card that changes with player 1 or player 2
###DONE!!

- sound effects play when cards flip / a correct pair is found / an incorrect pair is found / when cards are dealt / when cards

- after all the cards are revealed the background is revealed.
###DONE!!

- cards flip over with a jquery animation

##Working on bugs:

- bug where if 2 cards are face up and user clicks on another before the first 2 disapear, the 3rd won't dissapear
###FIXED!!

- bug where if you click on the same picture twice the computer thinks a match is found
###FIXED!!
but now if user clicks on same image twice it switches turns.
###FIXED!!

- need to download each image, run them trough Photoshop *Save for Web* so the filesize is less

- should figure out event bubbling so I don't have so many functions / such loooong functions
