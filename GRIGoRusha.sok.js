const sok_file = `
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::         Sokoban (c) by Falcon Co., Ltd., Japan         ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::                    File Format 0.20                    ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::                                                        ::
:: File Notes                                  Optional   ::
:: Puzzle 1                                    Required   ::
::    Title                                    Optional*  ::
::    Board                                    See legend ::
::    Puzzle Notes                             Optional   ::
::    Saved Game or Solution 1                 Optional   ::
::      Title                                  Optional*  ::
::      Moves                                  See legend ::
::      Notes                                  Optional   ::
::    Saved Game or Solution 2                 Optional   ::
::    ... (more saved games and solutions)                ::
:: Puzzle 2                                    Optional   ::
:: ... (more puzzles)                                     ::
::                                                        ::
:: Remarks:                                               ::
::                                                        ::
:: File Notes                                             ::
::   File notes consist of unstructured text and          ::
::   key/value properties, such as "Author: Name".        ::
::                                                        ::
::   Lines beginning with "::" are comments intended only ::
::   for someone examining the file in a text editor and  ::
::   should not be displayed by the Sokoban program.      ::
::                                                        ::
::   The optional but recommended property                ::
::   "Collection: Name" assigns a name to the puzzle      ::
::   collection. This helps to preserve the collection's  ::
::   name when copied from a source, such as the          ::
::   internet, and pasted into a Sokoban program.         ::
::                                                        ::
:: Titles                                                 ::
::   A title line is the last non-blank text line before  ::
::   a board, saved game, or solution, provided the line  ::
::   is either preceded by a blank line or is the only    ::
::   text line in that position in the file.              ::
::                                                        ::
::   Title lines are optional unless a single or last     ::
::   text line from a preceding puzzle, saved game,       ::
::   solution, or file notes can be mistaken for a title  ::
::   line.                                                ::
::                                                        ::
:: Puzzle Notes                                           ::
::   Two special key/value pairs are supported in puzzle  ::
::   notes: "Title" and "Author", hence, titles can be    ::
::   specified either in a title line or as a key/value   ::
::   pair.                                                ::
::                                                        ::
::::::::::::::::::::::::::: Board ::::::::::::::::::::::::::
:: Legend.................:      :.................Legend ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Wall...................: #  # :...................Wall ::
:: Pusher.................: p  @ :.................Pusher ::
:: Pusher on goal square..: P  + :..Pusher on goal square ::
:: Box....................: b  $ :....................Box ::
:: Box on goal square.....: B  * :.....Box on goal square ::
:: Goal square............: .  . :............Goal square ::
:: Floor..................:      :..................Floor ::
:: Floor..................: -    :..................Floor ::
:: Floor..................: _    :..................Floor ::
::                                                        ::
:: Remarks:                                               ::
::                                                        ::
::   The first and last non-empty square in each row must ::
::   be a wall or a box on a goal. An empty interior row  ::
::   must be written with at least one "-" or "_".        ::
::                                                        ::
::::::::::::::::::::::::::: Moves ::::::::::::::::::::::::::
:: Legend.................:      :.................Legend ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Move pusher up.........: u  U :.......Push/pull box up ::
:: Move pusher down.......: d  D :.....Push/pull box down ::
:: Move pusher left.......: l  L :.....Push/pull box left ::
:: Move pusher right......: r  R :....Push/pull box right ::
:: Begin jump.............: [  ] :...............End jump ::
:: Begin pusher change....: {  } :......End pusher change ::
:: Current position.......: *  * :.......Current position ::
::                                                        ::
:: Remarks:                                               ::
::                                                        ::
::   Jumps and pulls appear only in reverse mode saved    ::
::   games and solutions. Jumps are used to move the      ::
::   pusher to the desired location before the reverse    ::
::   mode game begins.                                    ::
::                                                        ::
::   Reverse mode saved games and solutions must start    ::
::   with a jump, even if it is empty, e.g., "[]Urrd".    ::
::                                                        ::
::   Pusher changes apply only to puzzles with multiple   ::
::   pushers, such as Multiban. Moves inside the braces   ::
::   indicate the relative movement needed to switch from ::
::   the currently active pusher to the next active       ::
::   pusher. At the start of a game, a "{...}" sequence   ::
::   activates the pusher relative to the top-left        ::
::   pusher. For example: "{rddd}Urr{uul}uLU". If the     ::
::   top-left pusher is the first active pusher, the      ::
::   empty "{}" can be omitted.                           ::
::                                                        ::
::   The current position marker is optional and defaults ::
::   to the position after the last move.                 ::
::                                                        ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Date Created: 2002-07-01  07:53:58
Date of Last Change: 2024-09-26  13:58:00
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

These levels are copyright (c) by Evgeny Grigoriev
E-mail: grigr@yandex.ru
Original level website: http://grigr.narod.ru
Collection: GRIGoRusha


GRIGoRusha, "Bardak #01"

###################
#  .   . #        #
#.#$##$# # #$##$# #
#$  ## $  $ .##. .#
#.#$  .# # #  $ # #
#   ##   #  .##. .#
# #$##$##### ## # #
#     .  #@$  . $ #
#     .  # $  . $ #
# #$##$##### ## # #
#   ##   #  .##. .#
#.#$  .# # #  $ # #
#$  ## $  $ .##.#.#
#.#$##$# # #$##$# #
#  .   . #        #
###################

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RRdrrrddrrddddllllllluUrruuuurrrRluuurrddDDDDuuuuuuuuuullllllldDrrdrRl
lddddrrruRluurruullDDDurrdDDDullluRRdrUUUUddddlllllddddllddrrrrrUUUUUU
luRRdrUUddllllldddrRlluuuuRRdrddDuuuUUdllllldRRRRurDDullluuuuulluurrDD
DDDDldRRlddddllddrrUUUUUUluRRdlddddlllluullddRRRRRlddrruUUUUUruLdddllD
urrddlLLLuullddRRRRRluurrdDuuuulluRdrUUUUUlluurrDDDDDDDDDuuuuuuulllldd
lluuRRRRRluurrdDDDllUdrruulLLLddlluuRRRRRluurrrrrDulllllddlluullllllld
DrrUdlluurRRRRDDrrddllDurruulluulllddllDDrrUUUdddDDllUUUUrrddddrrdrruL
LLLLdlUUUrrddrrrdDDrrddllUUUUllulldRllddrrUURRluLLdldddDrrUUdrrrdrrrru
urruuuUddddllddrrUdllddrrUdlluullddlllllllUUrrDullddrRRRRUUddllluuuull
DDuuuurrDDDDDuuuuuuuulldDDDD


GRIGoRusha, "Original Conversion (42) #02"

     ########
  ####      #####
  #  $ ## $ $ $@#
  # ##.##*#$ $ $#
### ......#  $$ ##
#   ......#  #   #
# #$......#$  $  #
# # .......$$# $ #
# $$###.###$  $ ##
###  $  $  $  $ #
  #   $ $  $  $ #
  ######   ######
       #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDDrddLddLLulULLLullluuuuurrrdDDlddrdrrrdrddlLLulLrrddllUlUUUUUruLdlUr
ddddddrdrruulLdlUUUUUruLLLrrdddddrddrUruLLdlUUUUUrdrdLrrrrdDLdlllluuUr
uuuLLrrrDldLLLrrrdrrrrdrddLLuLLLdlUUUruLLrdddrrddrUruLLLdlUUUruLdddrrr
rUruLLLLrrrddlllluUlURuulDrrruuuurrdDrddlDurDDLLLLrrrddrruLdlUdlllluUU
UluRdrruuuullldDuurrrrrddrddddLLLLrrrddlllluUUUlllluuurRlldddrrrrrruuu
ulllDllldddrrrrddllllUUrrrrddddlLdlluUUrrrruulllllldddRluuurrrrrrddlll
lUdDlluuurRRRRRddrrrrruuuuluullllldllldDuurrrurrrrrddrddddddllllllldll
UUlluuurRRRRllllldddrrUUddlluuurRRRlldddddrruLdlUUUUddlluuurRRlddddrrd
RRurrddlUruLLLLLdlUUUUddlluuurRddrrrrrrrrrdrdrrdLLLLLLdlUruLdlUUUrrrrr
drdrruLLLdlUruLLLLLLLrrrrrrrdrrruruulDLLLulDrdLLLLLLrrrrrrdrrrUruLLLLu
lDrdLLLLLrrrrrdrrUruLLLulDrdLLLLrrrrurrruuulDDrdLLLulDrdLLLrrruuuulDDD
rdLLrrurruuLLulDDDrdLuuuuuLulDDDuurrdrdrruLuLLLulDDurrrrdrruLLLLLulDrr
rDDDDDDrdLLLLLdlU


GRIGoRusha, "Zigzag #03"

    ##### #####
  ###   ###   #
  #@$ #  $    #
  #$#.######$##
### ....#  # #
#   . . #  # #
# # ....#  # #
# #    ##### #
# $ ##$#   # #
###$$  #$  # ##
  #           #
  ##  #  $# $ #
   #####  ##  #
       ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDDrrrddDDldllURRdRRdrdrUULLLUUUluurrdLLrdddllddrUluRdrUUUUUruLLrddddd
drrrrrrrddlUruLLLLLLLullddrUluRdrUUUUUluRluuurrdrRRRurrdLDDDDDDDDrddlU
ruLLLLLLLullddrUluRdrUUUUruLuluuurrdrrrRurDDDDDDDDuuuuuuulllllulldddrd
dddddrrrrrdrruLLLLLLLullddrUluRdrrrrruulDrdLLLLUUUluUUrdrdLdddllddrUlu
RdrUUUlURuulDrdddddrrrrrruuuuuuuulllllulldDuurrdrrrrrddddddddllluulDrd
LLLuuuuullluuuRldddrrrdddddrrrrrruuuuuuuulllllullDlldddrrrddlllUUrrrdd
ddlllUUrrruullllldddRluuurrrrrddlllUdrrrddlllUlluuurRRRlllldddrrUUdrrr
uUddllldlluuurRRRllddddrddrUluRdrrrrrrruuuuuuuulllllulldlldDuurrurrdrr
rrrddddddddllllllUUUllldlluuurR


GRIGoRusha, "Track #04"

  #########
  #   #  @#
 ##  .$.# #
 #  ##  $ #
##  .$*#$##
#  #$#   #
#  . .# ##
####    #
   ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lldLLulldddlddrrrdrruulULLLuuurrdLulDDlDDldRRRdrrruulullLrrrUruurrddLL
uLLullddlDDldRuurrrrdrrUdlluUruurrddLLrddllullluuurrdRDrrddlddllluUddr
rruuruullululldR


GRIGoRusha, "Updown #05"

  #####
 ##   ##
##  *  ##
#  *$*  #
# #. .#@#
#  *$*  #
##  *  ##
 ##   ##
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
dldlUddlluURlddrruLrruruululLDDDuuurrdrddldldllUluluuruR


GRIGoRusha, "Triple Shelf #06"

  ##########
  #   ##   #
###   . .# #
#  # ##  $ #
# $  .**#$##
#   # #   #
##  *$.# ##
 ####   @#
    ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lllUrdrruulUUruLLLulldRddldlluurDldRdrRRdrrruuluLLLLrrrruulLulDDurrrdd
llLrrruruurrddLLullllddrrrdrrUdlluUruLLLulDrrrrurrddLLrddlluUruLLLulld
RRRRddlllUdrrrdrddllluUddrrruuluuullulldRRlddRRlddllluluurDRRRllDulldR
dRUluRR


GRIGoRusha, "The Disorder #07"

    ####
#####  #
#      #
#@$.*.$#
#  *#* #
## .*.$##
#  # *  #
# $. #$ #
#  #    #
####  ###
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
urrrrdLulllddrddlddrUrrdrrruulLuUrDuULuurDDDluullllddrdrRllDlddrUrrUdd
rrruuLLUUrDuuulllllddrdrRllDlddrUrrUddrrruuLuulUrdddLULrruulDruuulDDul
lllddrUluRRRlldddDlddrUrrUddrrUruLuuuuulDllldddDldR


GRIGoRusha, "Comci-Comca #08"

#######
#...  ###
#@##$$  #
# $     #
#.# ## ##
# $ #  #
###   ##
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
urrrrDrdddldlluuurRlldddrruruUluullllddddRluuuurrrrddllLrrrrddldllUUdd
rruruuluulllldDrRRUruLLLrrddldddrruruuruLLrdddldlluuurUruLLrddRlldddrr
uruUruLLdlUruL


GRIGoRusha, "Zontik #09"

 #### #########
 #  ###       #
## $ $  # ### #
#   $ ###. .  #
# #$$ ##. . # #
#    $#. .  # #
# $#  $ .#.   #
#  $  #.   .###
# $###### @##
#  #    ####
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuuluuuulldlLddDlddrURRdrUluRRRdrUUluRlluulldllddDldRRRdrUluRRldllllul
lluurrRDulllddrrRurDldRRRurDldRRRuUluuuulldllDDDldRRRdrUluRRRUrDllldll
lluuulluurDldRDullddrRRurDldRRRdrUluRRldllllulllddrUluRRRurDldRRRdrUlu
RdllllullddlddrUUUluRRRurDldRRluuuuLrrrurrdddldddlUlldlLruulldlddrUUlu
RRRurDldRRRdrrruRuullldDuurrrddldlLulllluluuRurDDDldRRRlluuuurrurrdddr
ruLrdddlUddllUUdlllluluuluurDldRRurrrurrrrrrddLrdddLLrruuuuulllllldllD
DDldRRR


GRIGoRusha, "Pereprig #10"

  ####
  #  #
###  #
#    #####
#  * #   ###
### *#  *$ #
 ## *  **@ #
 #  #   *.##
 #  ####  #
 #  #  ####
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dLLUllLUULuurDlddDDlddrUUUUrdrrrdrruLLLLdRRRlluuurrDDrruLdllllLulUUrDD
lDRRRRluurDldllluuulldRRurDDuuuulDDldRurDlddDlddrUUUU


GRIGoRusha, "Krenol #11"

  ####
  #  ###
  # $  ######
  #  #$##   #
  ##. . . $ #
 ### #*# # ##
 # $.*@*.$ #
## # #.# ###
# $ .   .##
#   ##$#  #
######  $ #
     ###  #
       ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RlddrruUddlllluuuurrDDDuuullddddrRlluuuuuluurDDurrDDrrrurrdLLLLrrrddLL
UddddrddlUUUUdddllUURlllldlluRRluuR


GRIGoRusha, "Cheburek #12"

 #####
 #   ###
 #  $  #
### *  #
#  * *###
# # *   #
# #*@*# #
#   * # #
###*.*  #
 #  * ###
 #     #
 ###   #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DllluuurRdRluuRDDluuuurDDurrdLullddlldddrrrrDrruuulLUULrddrrdddllullll
uuurrUrrddrrdddllDLUdddrruLdlUUdlluRdrruurruuullDDuuuulldlldddrrURldll
uuurrDuRuuulDDrrruLdlluurD


GRIGoRusha, "LM #13"

 #####
 #   ###
 #  $  #
###.$. #
#  $.$###
# #.$.  #
# #$@$# #
#  .$.# #
###$.$  #
 # .$.###
 #  .  #
 ###   #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
DllluuurRdRlDrdLuuuuRDDluuuurDDlddddrrDrruuulLLrrrdddllulluUUUrurrdLLD
ldddrrdrruuullLDldDRDuluururUdrrdddlLuUlldRuuullldddRluuurrruuulldRurD
D


GRIGoRusha, "Verenica #14"

#####
#   #####
# # ##  #
# $    $##
### ..#  #
  #$...  #
### @..# #
# $  $ $ #
# # ###$ #
#   # #  #
##### ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ruuururDDrdLLruulllluullddRRRdrDldlUUdddddlluuRlddrruUUruuuRRurDDrdLLd
dLLuRUluuLuullddRRRRRurDDrdLLLdllUUruLuullddRRRdDldDllddrrUUUUUruLrRRu
rDDrdLLLddlluRUluuuullddRRRRRurDDrdLLLrrrddLLLLulDllddrrUUUUUUlluurrDu
llddrRRRRurDDrdLLrrddddlUruLLLLulDllddrrUUUUUUlluurrDullddrRRRRurDDrdL


GRIGoRusha, "MoraSoft #15"

##### ####
#   ###  #
#    $   #
## ####  #
 #$#..#$##
 # #.....#
 #   ..# ###
 # #$## $  #
 #  $@$$   #
## ##$#  ###
#       ##
#   #####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LUUrrurrdDlDRuuulldllllddddrrrrrUruuuulldllddrDuluurrurrddddldlLuuluur
uulDrrrUUruulDDDuulLLLulldRRRRRlllldDDDrRRlddrddLLdlluRuuUUUUUdddrrddr
ddrruruuuuLLLrruuruulDDDuullllulldRRRRRllllddddrrruulDrdLddrddlLdlUUUU
UUUUdddddddrrrrruruuuuLLruuruulDDDuullllulldRRRRRllllddddddddrrruuluur
UdlddLrrddllluUUUUUUdddRRddrddrruruulDLLLrrrruuuLLLrruuruulDDDuullllul
ldRRRRRllllddddrrUdddrrrruuuLLLrruuruulDDDuulllllddddrrddLrrddllluUUUU
UUdddrrddrrrruuuLLruuullllulldRRRRRllllddddrrddrrrruuuluuruulDDDuullll
lddddrrddrddrrUruLLLLLrrddllluUUUUUUdddrrddrrrrurrdLuluuLuuullllulldRR
RRRllllddddrrddrrruruuluuruulDDDuulllllddddrrddrrrdrUUU


GRIGoRusha, "Uje polnoch #16"

   #####
  ##   #
 ##  # #
 #.$*  #
##$.$* #
# *@.$ #
#  *$. #
# # .###
#   ##
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rDrruLUddlLuuRDldRlddlluuRluRUrrdLrrruuuulldDDuulDruurrddL


GRIGoRusha, "Zanoza #17"

  ####
  #@ ###
###*   ##
#  $ #  #
# #**$*.#
#     $ #
##..#**##
 #     #
 #   ###
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rddLDDDuuururrdrddLLLrrruulDrdLuuulldldDrURRuullDurrddlLdllluuRRllddrr
rurruullDlllddrdddrrurrUUUdddlldlluuurrRurDllllluurrrurrDulldlllddrddd
rruLdlU


GRIGoRusha, "SokoBat #18"

####      ####
#  ########  #
# $ # .. # $ #
#  $$$..$$$  #
##    **     #
 #@ #....#  ##
 ############

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rurrdrUdrruLuullDDRUrDuurDDrrrruuulDDrdLLLLrrruulDLLdLUrrrrdLLLullDlll
luluurDrDRRRlllulldRRRRllldRRR


GRIGoRusha, "GirLand #19"

##############
#            #
# $**. *#.**$##
# *  $@$ * #. #
# *$*.#* *.*$ #
# * $.#. * .$ #
##$..$#*#.$$. #
 #           ##
 ###  ###  ###
   #### ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RDrRUdlluRdrDrrDrdLruruLruulDDLddLLUUlululuurDDuurrrrrDDrddllddlluRdlL
LLLUlldRRRRRRuuluullulullllddRRDDuRDDuluulluurrDRRllullddddRRurULuurrd
RdLuulldRlddrUluulldRurrrrrrrrrrddrddlUdlLdlddrUrULdlllllulUdrddlUllU


GRIGoRusha, "Miasorubka (#07r) #20"

    ####
#####  #
# $ $ $#
#  ... #
#  .#. #
##$*.*$##
#  # .$ #
#  . #$@#
#  #  $ #
####  ###
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
uLLUUruLdddrrddLUruLUluurDDluuuurDDlLLuRdldlluuRRddlDDlddrUUURuurrddLL
rruuruulDDlluRdrruulDldlddrrrUULulllldRldRDDlddrUrrUdllUUUluurrrrdrddl
LLrrrDrddlLdlUUUddrrruulLruuuluurDDDDlUruulllllddrDrRllDlddrUrrUddrrru
uLuulUrdddLULrruulDruuulDDullllddrUluRRRlldddDlddrUrrUddrrUruLuuuuulDl
lldddDldR


GRIGoRusha, "Kino #21"

  #####
### @ ###
#  *#*  #
# #. .# #
# $   $ #
# #*#*# #
# $   $ #
# #. .# #
# $. .$ #
###   ###
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lDllddRRDDDuuulluurrDrrdDDuuulluurrDrrddddLLuuUdddDlluuUUrrdddrruuLrdd
lluULrdddlluuUllddRluurrrrdddllURdrUdlddrUdllUruulllddRluurrrrrrddL


GRIGoRusha, "Osen #22"

 #######
 # .   #
##$#*# ##
#  *    #
#   @*  #
## #*#$##
 #   . #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lluRdlddrrrrUULLDuLulldRddrRuuLulDrrruLrdrruLuullDDuullDDRdRUlluurrrrd
ddLruuullllddrrUdRdrruLuulLddldRRllulldRurruurrddLdlUrrrdLulldddllUURu
rDllluR


GRIGoRusha, "Chmoki #23"

   #######
 ###  .  ####
## $ #.# $  #
# $ $#.#$ $ #
#  $.. ..$  #
### ##@## ###
  #   .   #
  #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuuurrdDuulldddddrrruUrruulLrrddllddllluuuuulldDlDRRluuurrddDllllluRuR
lddrrrruuullDDullddrRuuurrrrDrrrddllddllllllUdrrrrrruurruulllulldddDuu
uulldddRluuurrrrdrrrddllddllLuUUUddddrrruuLLrrddllluUUdrrrrruulDrdLLLL
rrruulDrdLLruulDrdddllluUlluullddRRuulDldRddrR


GRIGoRusha, "Zavhoz #24"

  #######
  #  #  ###
###.$.$. @#
#  . #$.$ #
# #$ .$. ##
#  . $$ ##
###  #  #
  #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
llLrddLUrdddlULLLruuluurDldDrddlUrrrrurUllDruuulDLLDlllddRRRllluurrrDR
RUdlluurRdrrdLLrddlUruululldlllddrrdrURRdrUlllllluurrrurrdDuulldlllddr
rrrRuuullulDrrrdddllUULuRdddrruLdllUUrDldlluuRlddrrurrrurrdLLuuurDlddr
ruruLddllddrUllL


GRIGoRusha, "Strelka #25"

  ######
### @. #
# . $# ##
# $ . $ #
## # $. #
 # .$ ###
 ##  ##
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DldRlulldRddrdrUUULulDruurrrdDLLddrUluLuurrrddrdLLruuulllddrRllulldRur
urrrdDllUdrddlllUUluRRldddrrruulLrrddllluUrrDrdLuuluuRD


GRIGoRusha, "Burlak #26"

  ####
###  ####
#  $  $ #
#  #.#$ #
# ..*..@#
## #.#$##
#  $  $ #
#   #   #
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
llLLrrrruuLDrdLLLddLdlluRuUluurRurDlllddrRRddLdlUrrrdrruLUUruulLLDDlll
uurDldRuuRurDrrrddlLrruulDrdLddLLLdlluRUdRRRdrUU


GRIGoRusha, "Korona #27"

 #######
 #  +  #
##$#*#$##
#   .   #
# $ . $ #
## #*# ##
 #  .  #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDllDruruullDurrddldlluRuurrddrdLLruuullddRdrUrrrdLLullluurrrrDulllldd
rrUdrdrruLuulLddldRlulldRurruurrdddddllUUUdddllUURurDllddrrrruuuLrdddl
llluurrDuRurrdLddlLuuluRdddrruuuuullDDDRluuurrddLdlUrrrdLLulldlddRluul
uRRluuR


GRIGoRusha, "Magazine #28"

   ####
 ###  #
##    ###
# $ $   #
# #$# #$##
# . .$.  #
##.@. #$ #
 ###.   ##
   #  ###
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rrUddrrUruLLLUUrrDDlldlluUURRluurDDllddlluuRuRDDDuurruulDrdDDrruuLrddl
lLLrdLuuuurrDDurrddlLuuullddddrdrrrUruLuullddDuuurrddddlLdlUruuuuulldR
urDDDDuuurrddddlL


GRIGoRusha, "Povorot #29"

 #####
 #   ######
 #  $ #   #
 #..*.$   #
## #$*@#$##
#   $.$# #
#   #..  #
#####  ###
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DlLLdlUUUrRDRdLLdlUrruuluurDDDrdLuuurDRRurrdLLLLulldRddrrULdlUUluurDrD
RddlddrUUlluUruLdddrUdlLdlluRRRurDluullDurrurDrRurrdLLLLLddrrdrruUddll
ullldlluRRRuuuullDRurDrdrrurrdLLLDD


GRIGoRusha, "Nitka #30"

 #########
 #   ##  #
 #       #
 ##$# #$$##
 #...*....#
## #$#$#  #
#  $   $ ##
#   #@  ##
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ulLdlluRuurUdrRRRRddLdllulLdlUrrrdrruLUdrruulLLuurrrDulllddrrUruLddllu
ululldRddRRuuLulDrrddRddLLLdlluRRRRdrUrruULuuLLddlllDurrruurrddrddllll
ldlluRuurrruuLulldRRRddllUdlddRRRdrruruuluurDldLLuuRlddrruruulDDulllul
ldRddRllddrrUdrdrruLLLLdlUUdrrrrUdrruUUluurDDlullLulDD


GRIGoRusha, "Krestik #31"

  ####
 ##  ###
 #   . ##
##.$. $ #
# $*#*$@#
#  $. *#
## .   #
 ###  ##
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uLulldLrurrdLDDlddrUUUUrrdLulDDldlluRUURuulDDrRdrruLuLrddldLddrUrUdllu
RdllluRdrruuUrrdLullluurDldDDlluR


GRIGoRusha, "Antena #32"

  ####
  #  ####
### $.$ ###
#  . * .  #
#  * # *  #
## *$*$* ##
 #   . ###
 ####@ #
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ulULrdrrUURuuLDLLLuurDRdrDDLdlluUURRlldddrruLdlUrrruruuLDlluRdlDDrrUru
LLulDrrddlddrUUllldRurrUrurrdLuluLDllDDrrUdlluurRddddlUruuullddldRuuul
DlluRRRdddllUdrruululldRurruulD


GRIGoRusha, "Katenka #33"

    #####
   ##   ###
  ##      #
 ## $#$$# ##
## $  $  $ #
#  # #$# # #
#  ...@....#
#  #########
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rruulUdrddrruuLuulLulldRRddLUrdRddllUUruuulldRllDDRRUdddrruuLulDrrddll
lllluuRRuururrDulDllddllddrrrrrruullDurrddrruuLuuLLulldlddllddrrrRRRRl
lllllluurrDuuururrdrrddLddlllLLruuuurRDDDuuullddddrRRRuuLrruulLDlDDuur
uulldlddddrRRluuuruulDDDDuuullddddrRuuLruulldDDulldlddrUrRuurrururrddl
LLLruulldDDullDldR


GRIGoRusha, "Boomerang #34"

    ######
   ## ...#
  ## $ # #
  # $ ...#
###$  # ##
# $@#   #
#  $ #  #
#   $  ##
##  #  #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DlddrURuLrdRdrUUruuullddRdrUUdlluuruulDlDlDDuururrurrddLddlluUluRdddrd
dllllluuRDldRRRuLrdRdrUUruuuruulllddddRluuuurrrddlLrruullldldldDDrdrru
rUUddldlluluuurururrrddLddlluUddrruuLUdrdddldlluluuuruRuRRlldldldddrdr
ruuluUllddlldRdRRRdrUUruuulUdlddRdrUUdlluulldRuuRuRlddrRddllUlldDldRRR
drUUruuulUlldRddRdrUU


GRIGoRusha, "GKI #35"

  #####
###   #
# $$# ####
# $@*.   #
# #$...#$##
#   .. $  #
###  ##   #
  #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RdrrdRdrruLLLuurrDulldlluRdldllluuRRDrdLrurrdLullddrUluRRuuullDDRluurr
dDlllluRdrrruullDurrddlLulldddRRdrUrrrdrruLLLrruulLLuullddRlulldRRDull
ddrR


GRIGoRusha, "Kubiki #36"

 ########
 #   #@ #
 # *.$ $##
###*.# $ #
# $ $.*  #
#   #..###
##      #
 ####   #
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ddDDlddrruLdlUlluuRuuulldRurDlDDDlluRdrUdldRRRdrruLuuLLLddrRdrUllluurr
DullddrRuuruuLLulldRDDrrruulLulDrrrddllUdrruulLrrddrruLdllluurrDullddr
RlluuulldRurDrrddlllUdrrruullulldRddrrdddrruLdlUllUUUddlluRdrUrrrurrdL
LuuurDDrdL


GRIGoRusha, "Raketa #37"

 #####
 #   ####
 # .@.  #
###.$#  #
# $.$.$##
#  .#. ##
##$ $ $ #
 #  #   #
 ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rrdDldddrruLdlUrUUUruLLLulldRdddlluRdrUddRRdrruLuulLLddrRdrUllluurrDul
lddrRuuruulLDurrddldddrruLdlUlluuRuurrddDuuullulldRRddlUddlluRdrddlUru
UlldRdrrrdrruLLLLdlUUluR


GRIGoRusha, "Snake #38"

#####
#   #
#$ $#
#.. ####
# *  $ #
# ..** #
#  $$. #
#### ..#
   #$ $#
   # @ #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuruuuLDLLrrrddlUdlULuuulldddRRuuuluulDDrrdddlluRUUdddrRdrruuulLLrDLru
rrdddlddrUUllUluurDurrdLDDuuulldRldRdrrddllUUUluuulluurDurDDDrrrdDDlld
drrUdlUluullluU


GRIGoRusha, "Xolodok #39"

      ####
#######  #
#  $     #
#  $#    ####
###  # ###  #
  # $@$  $$ #
  # $## ##  #
  #   .... ##
  ####...  #
     #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LDldRuuulDrddRRRuuLuululLDlluRRRRRdddrddllluulUUdrdddlUrdrrruulLruulul
LddrDDldRRRdrrrruuruulDLLLLLrrdDRdrruUruLLLLLuulullddrDDldRRRdRRllullu
uuluurrrdddrdDrdLuuurrrdddLruuullllLruurruulDrdLulDDululldlluRRRRRllld
drDDldRRRRuuLLruurruulDrdLullllddrDDldRRRlluurrrdDlllluUUUluRRRRDDulul
lddrdddrrruuLLruurruulDrdLulDDulullddddrdrrruuLuulullddrDDldRRRllluuuu
urrrdddLruulullddrDDldRR


GRIGoRusha, "Rebus #40"

 ####
 #  ###
##    #
#  $  #
# $$$###
## $   ###
 # ##$   #
##  #    #
#   ### ####
# # #....  #
#    .# .# ###
### #@ ..    #
  #  ....# # #
  #### ###   #
    #    #  ##
    #   $## #
    ###   $ ##
      ###$$$ #
       #  $  #
       #    ##
       ###  #
         ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
rrrrrddrdddDDLddrUUUUUUluuurrddLdlUUdrruulLLLdlUUUUUddlldlluuluuuUURuu
lDDDDDDrdddlluuRurDDullddrRRlddrrrruuullDDullddrRurDDDuurrurrddrdddddd
llluRRdrUUUUUluuurrddLdlUUdrruulLLLdlUdlddrddrrDRdrUUUUluuurrddLdlUUdr
ruulLLrddrddddlluRllluurDldRluuluurrUdllddldRurrddRdrrUUUluuurrddLdlUU
drruulLLLdllllluuuuluuuuururrdLLulDDDDDrdddlluuRurDDullddrRRlddrrrrrur
ruulllllDDullddrRurDDDuuluuurruuluullULulDDDDrdddlluuRurDDullddrRRluul
uuuurrdLrrrddlUruLrddrruLdddllDDullddrRurDrruLUUUUlluuLullDDDrdddlluuR
urDDullddrRRlddrrrruuullDDRdrUUdrrruullLddrUluuulluulLulDDDrdddlluuRur
DDullddrRRluuluuurrrddrrddddllUdrrrrrddrddddlluRdrUUUluuurrddLdlUUdrru
ulLLLdlluRdrUrrddrddddddllluRRdrUUUUUluuurrddLdlUUdrruulLLLdllLuulluul
uuurrrddrrdddDldRurrrddrdddllluullUdrrddlUrdrrruuluuullllldRddldRuuulu
ullddRluurrdrrrrrddrdddllluuLrddlUlUUUdddrruLdlUUdrrddrrruuluuullluuuu
lluurDlulllddrdddrrdRRuuuuruLdddddllulluuluuurrrddRluurDrDDDDuuuulldRu
rDDulluulluuurrdLLulDDDDDrdddlluuRurDDullddrRR


GRIGoRusha, "Okno #41"

      #####
#### ##   ###
#  ###  #$@ #
#...     $$ #
#. .## # #  #
#...#  $$#$##
##  $$#     #
 ###    #   #
   ###  #####
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rddlULLdDuuLLddlDurRluuLLLLulDDrrddRdRRdrUURRdrruLUUruLLLLLLLLdlluurDD
rddrdrrrurRdrUUUruLLLLLLLLdlluurDldRurrrrrrrrdddllUUddrruuulLLLLLLDllu
urDldRurrrrddRdrUUddrruuulLLuurrDullddLLLLLulDrrrrrddlDldRRdrUUrrruuru
uLdLLLLLLLLrrrrddRdrUUddrruuulLLLLLLrrrruurrDrdLLLLLL


GRIGoRusha, "Flip-Flop #42"

  #######
  #  #  #
  #     #
  #..#$$#
###     ###
# ...#$$$ #
#         #
###..#$$###
  #  @  #
  #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luuuurrrUdllluurrDrdLLLddrrrUdllluurrDrdrruLLdLLLddrrrUdlllluUrrrUrrdL
LLLuLDruuuurrdrDLddrddlUruLLrrruLuluuurDDDluulldlDrdDrrUULrruullldDrrU
ruLLrddllluuurDrrddddrruLdlUUUruLLLulD


GRIGoRusha, "Rostok #43"

########
#  #   ###
#   .$.  #
#  ##@## #
## $.$.  #
#  #   # #
#  $*#.$ #
####   ###
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DrrruullulldllddRRlluurrurrdrrddlldddllUURUrrruullulldllddrRlluurrurrd
LLLrrrrrddllDlluRUdllluluurDrrurrdrrddlLdllddrrUUlUlllddRluurrrdrddllU
UruLddlluuUluurDrrurrdLLrrrrddddLruulLdlluRUddlddrrUrruuuullulldRdddld
drrurruulLDlluRdldlluuRlUluurDRlDDDldRR


GRIGoRusha, "Lastochki (#08r) #44"

#######
#...  ###
# ##    #
#  $  $ #
#.#$##$##
#   #@ #
###   ##
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dllulluuuurrrrdrrdLullulllddddrrdrrurUUruLdddldllulluuuurrrddRluullldd
ddrrdrruruUllLLrrrrddldlluUddrruruulluurDldLdddrruruuruLLrdddldlluuurR
uulllldDRRRUruLLLrrddldddrruruUruLLrdddldlluuurUruLLrddRlldddrruruUruL
LdlUruL


GRIGoRusha & Mottled, "Gantel #45"

#########
#   #   #
# $ @ $ #
## ### ##
#  .#.  #
# $...$ #
##$.#.$##
#  ###  #
#   $   #
#  ###  #
#########

Author: Evgeny Grigoriev & Den Gerasimov
These levels may be freely distributed provided they are credited with the author names.

Solution/Moves (Built-in)
rurDlllulldRddrdrrurrdLulDllulldRRlDDlddrUUUruulldRurDluuuRRRurrdLDDrd
LDDrddlUlLLrrrUUUruLuuLLLulDDDldRddlddrUUUUluR


GRIGoRusha, "Dva Torchka #46"

 ####
 #  ####
 # ..  #
 # .*  #
##$.* ##
# $.* #
#@$#$ #
# $   #
####  #
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dRRRdrUUUUUruLLLdddRDrddlUllluuRDldRRRUrUUULulDlDDlddrrrdrUUdlllluurDu
uuruulDDrrrruLLdllDDlddRRRurUUddldllluuruuuurDrrrdLdddlddrUUUUUruLLrdd
dddlllluurDldRRRdrUUUUUruL


GRIGoRusha, "Rassvet #47"

#######
#  @  #
# .*  #
# $*$##
## *  #
 # *  #
##$.$##
#  *  #
# .#. #
#  #  #
#######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rdLrDDLUruulllddRRdrUllluurrDullddrRdDlUdDDlddrUUUUrurrdLDLruulDrdDrdd
lUUUUllDDRllddrUluRuuruuuullddRDDDDuurrruLdlluuluurrrrdLDDrdLdD


GRIGoRusha & Mottled, "Green Key #48"

       #####
########   #
#          #
# # $*$## ##
#.##* * # #
#    *  # ##
# *@ #  #  #
## * ## *  #
 ##  .  #  #
  ##########

Author: Evgeny Grigoriev & Den Gerasimov
These levels may be freely distributed provided they are credited with the author names.

Solution/Moves (Built-in)
rddrrruRldllluuuRlllluuurrrrDDuurrrrddddrddlUUUUUddddlldllluululluuurr
dRDDuuurrrrurrdLdddddlluuuLLrrddlULLLrrrrdddllluUluRRldddrrrurruuuuuLL
LLDDullullddddRluuuurrRRRRRurrdLdddddlldllluuuUdlLdlUrrrdLrddlUrdrrruu
uuLLuulldRDDDDldRuuulDruuuurrDurRurrdLdddddlluuuLLruurRurDDDDDrdLuuuuu
lllddrddlU


GRIGoRusha, "Vorona #49"

    #####
##### @ ##
#    $#$ #
#.  # .  #
##$# *.* #
#  #$ . ##
#  $  # #
# .##   #
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rDrddLruulDllDDrrddllUdrruuUruulullDlldlDDlddrURRllUUUrurrurrdrddldlUl
lDRurrdddllULLruurrrruululldDulldlluRRRldlddlddrUUUddrrrdrruuuruulullD
lldLdddrruuRDldlluuururrurrdrddldLLulDrrrddllULLruRddrruuuruulDuulldDu
lldlddD


GRIGoRusha, "Snejinki #50"

 #####
 # @ ##
 # #  #
##$.$ #
# *.* #
# $.$###
#  # . ##
##  .** #
 #$# .  #
 #  $#  #
 ###   ##
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rdrddLDlUrdDrrDrddlUllUlluluuRDrruruululldDDldRuuuurrdrddldDrrDrddlUll
UllUluuruuurrdrddldDrDuluuruululldddlddrUUdddrRuuuLrdddlluuRurDllluRdr
ruruululldDDldRddrrUrrDrddlUddllUURUdlddrruruLddllullUUrRllUluuruuurrd
rddlDDuuruulDuulldddlddrU


GRIGoRusha, "Resheto #51"

 #####
 #   ##
 # #  #
## *$ ##
# .$.$ #
#  .$.$##
#  #.$.@#
## $ *$.#
 ### #. #
   #   ##
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lLrrddlUddlluuRuuUlLdlluRuuurrdDLruulldDDlddrUrRUUllDlddrdRRUdddrruruu
LLrrddlUddlluulluluururrdrDLuulldlddrdrrRUdlddrruruuLrddldlluurRllllul
uururrdrrDDDuuulldRurDlDuluulluurrDrDDuLuulldddRllddrU


GRIGoRusha, "Dva brata #52"

     #####
  ####   ##
 ##  $$ $ #
 #    .#  #
 #  .#    #
##.#$ $* ##
#    . ###
# @.####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuurrurrdrrruuLullDLrRurDrddlllUlldDrdrUlluuruRurrdrddldLLLdLLrUUluuRR
drDrdLLruulLdDrrrruruulDrdLLdllluurrDrdLLrrruuuullDDDrruuLulDlllDlddDl
dRurRUrRllULuurDllD


GRIGoRusha, "The X #53"

    #####
 ####   ###
##  $ $   ##
#  ### ##  #
# #  $   # #
# ...*.... #
# # $ $  # #
#  ## ###  #
## $   $  ##
 ### @ ####
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuuRurrrruulullulDDDLDRRRllllllluururRRurDDDldRllluRdlllddrdRRdrruLuUr
uLLLdRurruuulllldlddddrdrRdrruLuUruLLrrurrddLLuRluuulllldlddddrdrRdrru
LuUluRRuuulllldlddddrdrRdrUUUluuRlddrruLdddllluluuuururrrrdDuurrrdrddd
dldlLLdlUUU


GRIGoRusha, "Tiskoteka #54"

    #######
   ##     #
  ## $##  #
 ## .. .  #
 # $$##$  #
##$.*@*.$##
#   ##$  #
#  . ..###
#  ##$ #
#     ##
#######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RDrrUUUlllllDDuurrrrrdddlluRllLUluRRRRDrruuullllDldddrrdrrUdlluRuulLul
DldlDRRRRllllDDlddrrrrUrUUrULLLLuurrrrDulluurrrrdddLruuullllddlldlDrrr
rdddldlllluurrUdllddrrrruruuullLrrrdrrULdlddldlllluurruuuurruurrrrddLL
DurruullllddlDldddlluRdrUdllddrrrruruurruUruuullllddldllDDrdrRllulldRR
RlllddrUluRuuurruruurrrrdddlluLLrrdrruLLLrrruulDrdL


GRIGoRusha, "Kubizm #55"

    ####
#####@ #
# $ $$$##
#  .#.  #
## #  # #
 # . .  #
 #   ####
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDDurrddlLLruuuurDldddrruuLulDDlddlluuuruRldldddrruLrururuulDlldlluRRR
RDrrddlLLdllUUddrrurrruulluurDllllldRdddrrurUUddrruuLuLDDlddlluuuurRll
ddddrruururuulD


GRIGoRusha, "Cherta #56"

 #####
 #  @##
 # $$ #
 #$ # #
## ...#
#  # ##
#    #
###  #
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lDlDDrrruuLrddlllDldRRdrUUdlluurRlluuurrdLDuulDDDDldRRdrUU


GRIGoRusha, "Derji Morda #57"

  #####
 ##   ##
##  #  ##
## .$. ##
# $$.$$ #
# .$$$. #
## .+. ##
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lluUddrrULrdrruLdlluUlldRurURRDDuLDrrruLdlluururDDuluullDlDDRDrrU


GRIGoRusha, "Mini zagadka #58"

    ####
 ####@ #
 # $   #
## ###$##
#.  $  .#
#   #   #
### # ###
 #.   #
 #   ##
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rdDDrdLulLLdlluRuuRRRurDDDllLrrruulllldDrdddrruUddlluuulldRurDDuluuurr
rrddLdddlLrruuurrdLulLLLrdddrruUddlluuurRR


GRIGoRusha & Mottled, "DenPo #59"

  ####
  #  #
  #  #####
  # .    #
###$***  #
#  *..$ ##
#@ $ .$##
####   #
   ##  #
    ####

Author: Evgeny Grigoriev & Den Gerasimov
These levels may be freely distributed provided they are credited with the author names.

Solution/Moves (Built-in)
rRRuUUrrrddLDLdlUULrdrruLrruullDRddlUdlluRdrruuullDDldRdrdrUUULDlluRuu
rrDLDururrdLdLdLUrdddlUlUluRdllluRRdrdrruuruullllDuuurD


GRIGoRusha, "One Left #60"

######
#   .#####
# # .    #
# # .#$# #
#.  .# $ #
## #.@ # #
 # $ # $ #
 ###  $$ #
   ##   ##
    ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luuurrrrddddLruuuulllldddrruUddllddrdrrUruuuLruulLLLdddrrUUdrruulLLrdd
dllddrRUUllullluuurrrDDDDrrUUdrruulLLrdddllullluuurrrDrrdddlluluUrrrrr
dddddLdlUUUUUdrruulLLLrrdddllullluuurRDDurrrdddlluLrdrrddllUUrruuullld
dLddRluuruurrrrrddddLdlllUdrrUUUUdrruulLL


GRIGoRusha, "Monster #61"

 ######## #
 #  #   #
##$ $$# ###
#.*.#@$   #
#...#$#   #
#.#*$  # ##
# #    # ##
#  ##     #
##    #   #
 ##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDuuRRuullDDrrdrdddllldllluluuurruuRlddlldddrdrrruruulDllUUlldddrdrrrU
dllluluuurrddrRdrrruuulullDDrDLdRRdrUllldllluluuurrddRRurDluuurruullDD
DDuuullDDlluRdldddrdrrruRuuluuullulDrrrdddrddldllluluuurrUdlluRuRRlldd
rUdlldddrdrrruruuluurrdrruLLuullDlLulDDlddddrdrrruruulDllUUUllddddrdrr
rUrRdrruLLLuulLdlUrrrdLrdrrUUUluuulldlLdllddddrdrrrUruulllULulDrrdrrrd
drruuuluuulldllulDrrrurrdddrdddlluullluULrddrrrddlUrdrruuuluuulldlLulD
DrdLrddRluuuurrurrdddrdddlluuLLdlUUUddrrrddrruuuluuulldlLulDDrurrDDuuu
rrdddrdddlluuLLdlUUUddrruuulLulDrrrurrddLruulldDDurrdrdddlluuLLdlUUdrr
rddlUruLLdlUrruurrdrruLLLruulldDDurrrddddlluuLL


GRIGoRusha & Mottled, "Rojdestvo #62"

#########
#   .   #
#   # $ #
# *###.$#
#  $@$  #
#* .#.$.#
# $###  #
#   .   #
#########

Author: Evgeny Grigoriev & Den Gerasimov
These levels may be freely distributed provided they are credited with the author names.

Solution/Moves (Built-in)
RlLdlDldRRlluUURUUlDDDruuururrrrdDDDLddrUUUUlDllLdlluurDuururrrDDrdLLL
LrrruululldldlddRddlUruUrrrrrddlUUllllluurrurrrrDDDlllllluuuRR


GRIGoRusha, "Vverh #63"

  #######
###  +  ###
#   #$#   #
# #  *  # #
#  # * #  #
##   #   ##
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
llddrdRluluurrrrddlLUddldlluluurrdRluurRdDrruuLrdrrddldllUdrruruulldL


GRIGoRusha, "Semechki #64"

   #######
 ###  .  ###
## * #$#$* ##
#  *  *  .  #
# #$#@*$# # #
#  .  #  .  #
##   ###   ##
 ##### #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ulLDurrRRRRddllUdrruulLLLdRldldlluRuuRuurrDDLddLdlluluuRuRDllddrdrruru
uLLrrrrrrddllUdrruulLLuurrDullddrddrrrruuLuLDDurrddldlluluuRlluurrDrDu
lullddLddldlluRUURRdRUrRuullllDurrrrdrrdrddldllulUluUddrdrdrruruululld
LrurrdLululLdDrddrRUUrrddLdlluluuRlllddLdlluRuuRuuRlddRddLdlluluuR


GRIGoRusha, "Ugolok #65"

   #####
####   #
#  #.#$###
#   . $  #
#....#$# #
###$# $  #
 # $  @ ##
 #   ####
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ruruulLLLLrrrrrddldlluRdlldlluRUUrurrDDldLdlUrruruurrddLdLLrruruullllu
urrDulldddllluurDRdrUllldRRurrRdDrruuLLLLLrrrddldLdlluRUUlluurDRRRRddl
dLdlUUUddrruruullLLulDrrrrrddrruuLLLrddrdLLLdlUU


GRIGoRusha, "The Doors #66"

#####  ####
#   ####  #
#      $ @#
##$#####  #
#  #...$ ##
#  $. .#  #
#  #...##$##
##$###$##  #
#       $  #
#   ##  #  #
############

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dldLLrruuLLLLLulldRRRRRRlllllDDlddrUUUddRRdrruuLDrurrdrDDrddlULLLUULrd
dLLLdlluRUUUrrrdrddllLdlUUUluRdddrrrruuluurDDDuuurruruulDlllllulldRdDl
ddrURRlldddrrrRuuuulDrurrdrdDrddlUlLLuuuurrdrdDrdLLLdlUUUUdddrrruuulul
LdlllldddrrRllluuurrrrurrdrdddlldlUUUUdddrrruuuluUruulDllllLulldRdDldR
RRRllldddrrrrrrruuuluUruulDllllLulDDDldRRldddrrrrrrruuuluUruLLLLLLulDD
DDDDuuuuurrrrrrdddrdddlllllldlluRRRRllluuuuuurrrrrrdddrdddlldlUU


GRIGoRusha, "Metro #67"

   #####
  ##   ###
 ##  #   #
 #   $$# #
 #$.#    #
##..*$# ##
# .#*   #
#  . #$@#
####   ##
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuuruullDuullddRdDuullddRllddrrURRlUURULLulDlDDDldRuuuurrrddLLrruuluur
rDrrddLLrruullullddlldDrrdddrrUrUUdLLuUdllluurDuruurrdrrddLLrruullDLDD
lLrruuLulDDurrrurrddlLrdddldlluUddrruuLuUruLLulD


GRIGoRusha, "Zimushka Zima #68"

  #######
###     #
# $*#$# ##
# #. $.  #
# #. @.# #
#  . $.# #
##$# #*$ #
 #     ###
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ruruullllDDrddllluuuRldddrrruulDrrruLdldddrrUULulDruurruullllDlldddrRu
rrdrddllllUdrrrruululldRururruulllldlldddRddrrUUddlluuRuRDllddrrrruuUL
rdddlllluurrRlllddrrrruUllllluuurrurrDDDuuulldlldddrruUddrRuLdllddrrUU
ruuLDrdLruuuurrddrdddL


GRIGoRusha, "Kompas #69"

########
#   #  ##
#   $   #
## ##..$#
 #@## . #
 # . ##$#
 #$ .## ##
 #   $   #
 ##  #   #
  ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
drrddRRdrruLLLLululuuurRRdrdrDDuulluullldddrrdddlUlUUUUddrrddrrdrruLLL
rruuulluuurDDurDDDDuuullullulldRRRlldddrrdLdlUUUUddrdddrUrrdrruLLLLdlU
UdrrrruuuuluulDllulldRRRRurD


GRIGoRusha, "Sharlotka #70"

  #######
###  #  ###
#  $.@.$  #
# # ... # #
# $ #.# $ #
##  #.#  ##
 # $ $ $ #
 #  ###  #
 #### ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dllddlddrUrRuuulldDldRuuuruulDDDDuuullddRdrUUddlddrUUUlluurRurDrddddLr
uuurrddrddlULLuuurrdDrdLuuuluurDDDDuuurrddLdlUUdrdddlUUUrruulLulDldddd
RluuuullllddrrURurDDulldlluurRurDldRlddlddrUUUUdlluurRurDrDurrrrddllUL
rdrdddlUllLrrrruuruulLulDllldddlddrUUUUdlluurRddddrrrrUUUdrruulL


GRIGoRusha, "Dve dorogi #71"

####
# @###
# *  ####
# *     #
# * ##  #
# * # * #
# * # * #
# * # * #
# .## * #
#     $ #
######  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ldddddRDluuuRDluuuRDrrrrrdddLUrdddLUrdddlUllllluuuurrUdllddrrUdlluurDl
uuurDldddddrrrrrruullDurruuuulllLdllddrrUdlluurDluuurDrruLdllddrrUUrrr
rddlUdlDurrddlUrdddlUruuuuuLLLLddllddddrrrRurruullDDrUrdddlUUruuuulull
lddlluuRDluuurDDlddddddrrrRurrddlUruuuuulullLruL


GRIGoRusha, "Miner #72"

 ####
##@ #####
# $$$   #
# # # # #
# ...   #
####   ##
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rDRRddlllluuRRDullddrRRdrruLuuLLddRdrUlllluuRurDDullddrRRdrruruuLLLrrr
ddldllullluururDrrrrddlLLLrrrruullDurrddlLuullD


GRIGoRusha, "Karusel #73"

   #####
  ##   ####
 ## $.$   #
 #  #.#   #
## . @ #$##
#  #.# .$ #
#   . #   #
### $ $ ###
  ####  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lluuRurDllddrrrdrdrruLUUluLulldlddrrrdRlullluururrdLDurrdrdDlluLLLuuRu
rDDurrdrddlluLLddrdRdrUUdlluluuruurrdrddrdLuuulullddrdRlullddrdrrUrUdl
dlluluuruulldlDDldRRdRUlluuururrddlLrruurrdrruLLLulDllddrrrdRdrruLUUlu
llllddrrrdRdrUllulllulDDldRRdrRRdrUUdlllluluurrrrdRlullluurrDurrdrruLL
LulDllddlddrdrrrruuluLLrrdrdrruLUUruLLL


GRIGoRusha, "Zapiataya #74"

    ####
 ####. ##
##      #
#  $#$  #
#. $..# ##
## #..$ .#
 # $$#$  #
 #   @$ ##
 ## .####
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lULdlUUURUdlluRuRRRurDrdddddLLLdlUruLdlUrrdrrruuLDrdLruuuuullDRurDllul
llddrUluRRRdrrDDlddLLullUddRurDrrrUluRuuuLdlUllddL


GRIGoRusha, "Telefon #75"

    ####
#####  #
#   #$ #
#      ##
##$###  #
 #  ... #
##$# .###
#  ##@##
#  $   #
#  #   #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ulullUdDDlddrURRdrUlllUUUrrrruulllulldRDDDDldRuuurrrruullLulDDDrrrruuu
ulDrdddlllluurrRlllddrrrruUddllllDDlddrURRdrruLUUlulluurrrrddLruulllld
ddDlddrUUUUUddddrRdrruLuuuruuluurDDDrdLuulllulldRRRRurDDulllldddddrRdr
UU


GRIGoRusha, "Egoza (#17r) #76"

  ####
  #  ###
### $$ #
#    # #
# #....#
#  $$  #
##..#**#
 #$$  @#
 #   ###
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lldllUUrURuuluurDldDDrurruuLLulDDllddRdddrruLrrrUUUlldLDururrdLrddlUUd
dldllURuuRuUluurDDurrDDDLddLdlluRuuUUllddRluurrruulDrdLrurrdddlddLdllu
RuUUUrurrdddlLUlDrrruuullulDDurrrdddlluUddllluuRRllddrrrrddLdlluUddrru
ruuruuulLDlllddRRRllluurrrDulllddrdddrrurrUUULDrddlldlluuurRRurDlllURu
LrurrDullulDDrddllluuRRurDlllddrdddrruLdlU


GRIGoRusha, "Zerkalo #77"

   #####
####   #
# $  #.##
#   *   #
##.#  $ #
 # @ ####
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luuluRRdlddrruruLLrrrrdLLruuullDldRRdrUlllulldRRRRlllddrrUruLLulDrrrdr
ruLL


GRIGoRusha, "Original Conversion (22) #78"

            ####
 ############  #####
 #    #  #     #   ##
 # $ $ $  $$# $ $   #
 ##$ $   # @# $   $ #
###   ############ ##
#  $ $# .....#...#$#
# #   # .  .##..## #
# ### ##.# ..#. #  #
# #   $..# ..#..$$ #
# # $ #  # #.. .#  #
#  $ $#.........# $#
# $   #..##$#####  #
# $ $ #### $ $  $ $#
## #     $ $ $ $   ###
 # ####### $    $    #
 #         # ####### #
 ####### #$          #
       #   ###########
       #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
ULuRRRddRRuRurrdLdLLuRurrdrdLdDDDlDLLulDrddlluRdrUUUUluRdddrrDDDrDDldR
lulLdllluuRDRdrRurruuluuullddlllllllluuLLuuluurDluuuRDluulldRRddlUrddd
lUlldddddrRuuRRRRdrUUUluRRRRdlllddlllllddllddRdddrrrrrrrruuuRUdldddlll
llllluuuluurruurrrrrddrruurrddLLLruuuulldddlddrUUUUdddrruuuululldRRRur
DDrddrrrurrdddrddlldlluluLrdrdrrurruuluuullddlllllllluullllddllddrdddr
rrrrrrruuRUUdrrdrdrrurruuluuullddlllLLLruuuulldddlddrUUUUdddrruuuulull
dRRRddddrdddlddllddrrUUdrruuUruLdlUUdrrdrdrrurruuluurDDluuuurDDlullddl
llLLLruuuulldddlddrUUUUdddrruuuululldRddddrrrddrrdrdrrurUUUUruLLrddddd
ldllullluuurrrruUUUddrrdddddlLuRdrUUUUruLLLdlUUUddddlllddrrRRRdrUUUUru
LLrddddlllllluurrrruUUdrrdddddldllUluRRRdrUUUUruLLLdlUUdddlllddrddddll
uURlddrruUUluRRRRRdrUUUUruLLLulDrdLdlllddrrrddLulldlddrruUUruLdlUUdrrr
rrruuuullddllluuulldddRRRRururrdddddrdLLLLLulldlddrruUUluRRRRRdrUUUUru
LLrddddlllllluurrruuurDlddlllddrddddrrrrrrrruuLLLLLLLulldlddrruUUluRRR
RRdrUUUUruLLLrrddddlllllluurrruUrrrdddrDDldlllllddrrrrrrrruulLLLLLLull
dlddrruUUluRRRRRdrUUUUruLLLrrrdDDDDldlllllddrrrrrrrruulLLLLLLulldlddrr
uUUluRRRRRdrUUUUruLLrruuuuuuulldRurDDDDDDDDDDDDldlllllddrrrrrrrruulLLL
LLLulldlddrruUUruLdlUUdddldlllllllluuuluurruurrrrrddrruuurrdddLLLLulDr
rrrddrrrrrrruuuuuuuuuulldRurDDDDDDDDDDDldlllllddrrrrrrrruulLLLLLLulldl
ddrruUUruLdlUUdddldlllllllluuuluurruurrrrrddrruuurrdddLLLruuuuullddddD
luullllddlluuuuurrruurrrruRRurrrddRRRRurDDDDDDDDDDDldlllllddrrrrrrrruu
lLLLLLLulldlddrruUUruLdlUUdddldlllllllluuuluurruurrrrrddrruuurrdddLLLL
rrrddrrrrrrruuuuuuuuullllluRRRRurDDDDDDDDDDDDldlllllddrrrrrrrruulLLLLL
LulldlddrruUUruLdlUUdddldlllllllluuuluurruurrrrrddrruuurrdddLLLrrddrrr
rrrruuuuuuuuullllluuurDDldRRRRurDDDDDDDDDDDldlllllddrrrrrrrruulLLLLLLu
lldlddrruUUruLdlUUdddldlllllllluuuluurruurrrrruuurrddrrdddLLrddrrrrrrr
uuuuuuuuullllluulllddrUluRRRurDDldRRRRurDDDDDDDDDDDldlllllddrrrrrrrruu
lLLLLLLulldlddrruUUruLdlUUdlDrrdddllulllllllluuuluurruurrrrruuurrddddd
RRRllluuuuulldddllllldddrrddrrrRRurrddlUUUddlllllluulluuurrrrruuurrddd
ddRRlddrddddlluUdlllllllluuuluurrdrrddrrrrRdrUUUddlllllluulluuurrrrruu
urrdddddRluuRurDlluuurDDldRluuulldRRurDldRdlddrdddlllllluuUUddlluuRuRR
RdrUUdlllldlddrrddrrrrrruuuluuuululldRRRurDDldddrdddlllllluuuUluRRRdrU
UdllldddddrrrrrruuuluuuululldRRRurDlllddllldddlUUluRRRRdrUUdllldddddrr
rrrruuuluuuululldRRRllddllldddddlUUUUluRRRRdrUUUluRRRdllddlllddllllddr
RRdrUUUUluRRRdrUUdllldddddrrrrrruuuluuuululldRRurDDDDuuullddlllddlllDl
dRRRurDldRRRRRRdrUUUddlllllllullluuuuuuurrrrDDullulldddddrrruuRRRdrUUU
luRRdlddllluuluuurDDDDullulldddddrrruuRRRdrUUUluRdddllluuluuuuurDDDDDD
ullulldddddrrruuRRRdrUUUddllluuluuuuulldRRurDDDDDDullulldddddrrruuRRRd
rUUdllluuluuulDrrddddddlllluuuuurRRurDDDullulldddddrrruuRRRdrUllluuuuu
rrruulDrdLLrrurrrurrrdrrrrdddddddddddllllllllllllluuuuuuuluuuurDDDDDul
lulldddddrrruuRRRlluuuuurruLdlluurDDDDDDullulldddddrrruuRR


GRIGoRusha, "Big uborka #79"

   #####
####   #
#    $ #
#   #$###
## ## @ #
# ..#   #
# ..$$ ##
##  #  #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dddlULLuluurururrdLLLdlddrdrrruulUdrddlllulldRRRRdrUUdlllluuurururrdLd
dDrdLLLdlUluRuuruRurDDDDuuulldldddrrRurruLdlddrUlllluuururrdDDurrdLdLL
LdlUrrrruulDrdLLLrruuuulldlluRRRurDDDDrdLL


GRIGoRusha, "CFL #80"

  ########
 ## @    #
## ...## #
#  *.*   #
# #***$ ##
# $ $ ###
##  #  #
 #  $  #
 ####  #
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ddRDDDrddlUUUUUlulldRDRUluurrrrrddlLLLrrrruulllDurrrddllLDDDrddlUUUUll
DRurUrrdLLDDrddlUUUUrruruullllldldlddRddrRlluuluurururrrrrddldllddrddl
UllluuRuUddlddrUUUdddrrUULrddlluU


GRIGoRusha, "Luja #81"

##### ####
#   ###  ##
#    $    #
##$##@# #$#
 # #....  #
##  ....# #
# $# # ##$##
#  $ $ $   #
#  #####   #
####   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
drruulLLLulldRRRRdddllluUddDlddrUUUrrddLruurrddLLrrRRdrruLLLLuururrdDu
ulluurrDDlllluuRlddrrrruululDDurrddlLLruullllulldRRRRRldDrrrruululDDDl
lldllUUdddlddrUUUrruruullulldRRRRRlddldddLruullUUdddlddrUUUrrurrrrruul
ulDDurrddlLLLuullulldRRRRRlddrrrruululDDurrddlLLdddLLLruullUUdddlddrUr
rrruuLLrruruullllulldRRRRRldDrdddllllUUUUddddrrrrrrdrruLLLLLLLruuRurrr
ruululDDurrddlLLruullllulldRRRRRllllddddlddrUUUUUddddrruurUrrrrDDuuuul
ulDDullllulldRRRRRlDDuullldddRlddrrrrrrdrruLLLLLLLrrrrrruuulLLrrruulul
DDulllllddddlddrUUUUUddddrrrrrrruuulLuullllulldRRRRRlllldddddrrrrrrruu
uuululDD


GRIGoRusha, "Tamagochi #82"

#####
#   #######
# $    #  #
##$#   $$ #
#  ##.##  #
# $$...  ##
#  #...#@#
# #### #$#
#        #
##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuruulDLLulDDDrrrUruLddlldddrrUUUlllldRurrrUruulDLLulDlululldRRRdrDDrD
LrurrdddllUdllllluuuurUdlddrURRlldlddrrrrrrruuuUruulDllldDuulululldRdD
ldRRRRuuluLulDDDldRRRlldlddrrrrrrruuuUruLLLuLDuLLulDDDldRR


GRIGoRusha, "TriNaTri #83"

  ####
###  #
#    ###
#...$  #
# #  # #
# $$***#
###    #
  # @###
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luUUrULdddrUluuulldddRluuurrddDrddlUUlluuurrdrDDuuluurDDlulldddrrUUruL
dddlluuRlddrruUruulDDllddrrrUUddlddrUUllluurrDDrdrrULLLuurDluuurDDlddR
ddlUUUUllddRluurrruulDrdLdDlluuuRldddrruuLrruulDrdLddrddlUUUUruulDrdDu
rrD


GRIGoRusha, "Original Conversion (15) #84"

       ####
   #####  #
   #   #  #
   #  $ $ #
 ### #$   ####
 # $ $ ##$   #
 #  # $@$ # $#
 #  #  $   $ #
 ## ####*##  ####
 # $#.....#     #
 #  *...*..$# $ #
## $#.....#   ###
#   ###.#.#####
# $$  #  ##
#  #     #
######   #
     #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LdRRDuRuUrrdDrddlUUrddrddllUlluLLLrrDrdLLLrrrurrUruulLLuLDDDDldRurDurr
uUruLLLulDDuruurrDDrddldlluLLruulluRRdrrruullDurrddlLulDDDDrdLulDDDuur
uuuuruuUlluLDDuuulldddRluuurrdrdrrdddllllURdrrruuulllDDldRRluuuuullddd
RluuurrddDDuurrrddlDDDDrdLLullLLDuUUUluuRRRdrRdrdddllllldldlddrURUUUrr
rrruuulullulllddrdDlDRdddlluRUddrUUURRRRdddrddlluluLLuuurrrrdrUruLuulu
RdrrruullDurrddlLulDDDrddlluRdrUluuuruuuULuurDDDDDurrddlLulDDDuurrrrdd
ldlldlluRRluuuruuullluRRurDDDDurrddlLulDDDDrdLuuuurrrrddlUruLLLulDDDDl
DRuuuulullulllddrdDuuluurrrddRRurDDDDuuuruuulllDDldRRurDDDuullluullldd
rddDrrrrRlllllDldlddrUrrrdrdrruulUdrddlUUdlllulUUlDruUrrrrruuullluulll
ddrdDlDRRRRllluuuluurDDDDldRRRllddllddrUluRdrUUUUUUluurDDDDldRRllDrddl
luRdrUUluRuuuuuruuRurDDDDldRRurDDDuurrruurDDDldddrruuLrddlluUUruLLLulD
DurrrrddrrrdLulllddrrUruLLrddlluUUruLLLulD


GRIGoRusha, "Salut (#86r) #85"

 #########
##   #   #
#     *  #
# #* * *##
# $ # *  #
#  *@*#. #
####* *  #
   #   ###
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

For Aumeric

Solution/Moves (Built-in)
LuUrurRurrdLDlLuRdrDrddlLdllUdrruLUURuuurDlllulldRRRRddlUdddrrruuLLulD
DuruuLLulldRdRlddRluuuurDrrddlUrdrrddlldllURRlUUruuLDDDuuuLulldRdRRuLd
lddRddrruLUUrrrddLruullldlluuruulldldddRRRllluRluururrddlDuruulDrrrDuu
rrdL


GRIGoRusha, "Shito-Krito #86"

 #########
##   #   #
# . . $  #
# #*.* $##
# $ #.*  #
#  $@*#. #
####$ *  #
   #   ###
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LuUrurRurrdLDlLuRdrDrddlLdllUdrruLUURuuurDlllulldRRRRddlUdddrrruuLLulD
DuruuLLulldRdRlddRluuuurDrrddlUrdrrddlldllURUUrrrddlLrruulluuurrdLulDD
uLLulldRdddRddrrurruulUlulLulldlddRluururrdLrrrurrdLLLrrddrddlldlluRUl
lUlldRRR


GRIGoRusha, "Krik #87"

       #####
########   #
#  #       #
#    $ ## ##
#  ###### #
##$####.. ###
#  # ..$*$  #
#    *@ . # #
#  #$* #### #
#### ###### #
   #        #
   ##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rUdrUdrUUUUdddllllldRRlllluUUluurDDDDldRRRlluuuurrurrrrurrdLLLLdLLLrrr
urrrddddllllldlluuuluurDrrrrurrrddddrrddddllllllluUddrrrrrrruuuullllld
dLUrurrdLrruuuuullldllllDDDlddrUrRuRRRllldDrrUdlluurDrruLrdrruLLrruuuu
llldllllddDldRRRRRRurrrrddddlllllllUUddrrrrrrruuuulluuuullldlluRRRRurD
DDDuuullldllllddddrRdddrrrrrrruuuulL


GRIGoRusha, "Ustal #88"

   #####
####   ###
# @** .. #
# $    # #
# $ #### #
###      #
  ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lddRluurDrrruulDLdlluRRRurrdrrdddlllllUUlldRurRuurrdrrdddlllllUdrrrrru
uullulldRRlldLdlluurRRurrddLLuRllllddrUluRRlddrU


GRIGoRusha, "LoLa (#93r) #89"

#####
#   ##
#  $ #
## $.#####
 # $.@#  #
 ##$*$   #
  # ...  #
  #  #  ##
  #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DuluuLulldRddRDRRldRuuLuuLulldRdRluurDrDLrDrddlUlUUruLulldRurDrdDllUdr
rrddldlUUdrruulDrdRdrUruulDrdLLruLLuluululldRddRdRRRdrruulDrdLulluLuuL
ulldRdRluurDrDDuulldRldR


GRIGoRusha, "Babochka #90"

     ####
######  #
#   #..$#
#  $$.. #
##   *.$##
 ###$.*  ##
  #  ..$$ #
  # $ #  @#
  #  ######
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
llUlluUUdllluurDRdrruLdddrUdrdrruLuLLdllURuurrDLuuurDDllDDldlddrUrUUdr
UdldlluRurrdRdrruLLruLLUUrDDrddlUruLululLLulldRRRRlDRlulldRRDDlddrUUUU
luR


GRIGoRusha, "Mapat #91"

 #####
 #   #####
 # $ $ $ #
 ###.... #
####*.* ##
#   $ $##
#   #@  #
#####   #
    ##  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uuurrdLulDrDDrddlUUUUlDLLdlluRRRRuulDuuulldRurDDrdrruLuLLdRdrruruLLrdd
lDDrddlUUUlLLdlluRRRRuulDuuulldRurDDrRurrdLdLruulLLulldRurDrdRdDDrddlU
UUUdlUrdddlUULLdlluRRRRdrU


GRIGoRusha, "Master #92"

 #####
 #   ####
 #$  $  #
## @**  #
#  **. ##
# $*.. ##
###   ###
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
urRDulldRDRddlUUUluurDrDDlUruLddddrUUlulldRurDrddllUUlldRurrrddllUdrru
uluuullDRurDrDrruLLLulldDDRddrrurUdldlluulldRuuuurrdrdDuululldRDRluurD
rDurrdL


GRIGoRusha & Mottled, "Little Night #93"

   #####
   #   ##
   #    #
   ## * #
 ###@ *##
## .... #
#   $ # #
# $$$## #
#  #    #
#########

Author: Evgeny Grigoriev & Den Gerasimov
These levels may be freely distributed provided they are credited with the author names.

Solution/Moves (Built-in)
rddLruuuurrdLulDDlddrUUdrUdrdddlllUdrrruuullllldlddrURUdlluRuRDuRurrdL
dLLulDlddrUluRurRurrdrdddlllULrdrrruuululldRurUruLulldRurDDulDDldlldld
drUrrUrUUUruulldRurDlddlDllDlddrUrUdlluRuRRllddrUdrU


GRIGoRusha, "New Year's Fir Tree #94"

  ####
 ##  ####
 #  $   #
##.$#*  #
# .$@* ##
# .... #
# $ $ $#
#####  #
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LrdrruLruulDrddlddrUUllldRlulldRRurrrUUlDrdLLLuRdrruulDrdLullddlluuRRl
uurDDRRuuLulDrrdrruLLdddrUlllluurDldlddrUURRRdrddlULULrdrruLuuuLulDDDl
lddrRRllluurruurrddLLrruurrdLulllddrrdrddlUruUllluurrDurrdL


GRIGoRusha, "Salto (#94r) #95"

    ####
 ####  #
 #     ##
 #$***  #
 # * #  #
## *   ##
# @*.###
#    #
######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
drruLrurruuullDDuurrdLulllDDRUdDRddlUdlluRRUUlDuuuRRRdrddLLLuUluRdddrr
ruuluurDldLLuRdlddrUUddlddlluRdrrUUlulDruuulDDrdrddlUUddlluRdrruulUluu
rDldDrrrruruLLLrruulDrdddllddlUdlluRuuuurRdDDrruuLruulD


GRIGoRusha, "Domovoy #96"

 ####
 #  #
##  #######
#  .$ #   #
# .$* # $ #
##$* . . ##
 #  # *$* #
 # @## .  #
 ####   ###
    #   #
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luUUUddRRRRRDDlUrdrruLLdlddrUluRuuLDDrurrdLLuuuurrdLulDDldRdrruLUllLuu
LLDlluRRuulDDrdDRRRRlluuLrddlllddrUluRRRdrRuLLLrrrddddlluRUUrdrruLLdld
drUluRurrdLuluLruurrdLulDrD


GRIGoRusha, "Radost #97"

 ########
 #  .   #
 #.$..$ #
##$$@$$##
# $..$.#
#   .  #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uulldRDrddlUdlluRURlddrruLuuurrdLrurrdLulldDlddrrruULLuurDurrdLdLruull
dRlullDRurrddrddllluUUluRddddlluRUrRRDrdLuuuurrdLD


GRIGoRusha, "Minutka #98"

####
#@ ########
#  *  #   #
#.**$     #
#   ### *.#
#   #  $*$#
#####   . #
    ####  #
       ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rdRDRRuLLLDlddrrUUluulDrdrddlUrurrRRurrdLLLLLrrrdDuurrdDLdLUUdrruulDld
drdrUUUlldlldRRuurrdLLrrddlUruuluurDDDullddrUUddllluRRdrUruuullDDuurrd
ddlddrUUdllluRuuurrdLulDDDldR


GRIGoRusha, "Samogonka #99"

    #####
   ##   #
 ###    #
##   $ ##
#@.*** #
#    * #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rurrurrdddLLURUruulDlDurrdLddrUUddllLURRdrUllllldRRRuruulDrdLdlluuRldd
rruLrruulDrdLruuurrdLulDlddrrULuurrdLulDDulD


GRIGoRusha, "Only You #100"

 ####
 #  #####
##* *   ##
# $ #  * ##
#   ##*  .#
### #  *# #
 #      # #
 #  # ### ##
 #   *@##  #
 ###  * *  #
   ##   #  #
    ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LuullddRdrUddrruLullluuuuuuRRdrDrrrdddddLLdllUluluuuulluRdrddddrdrdrru
rruuuuulllulullulDrDDDDrrrrUdlllllddrrdrdrruLuLUdrdrrruuuuuluLuLLLLddl
luRdrddlddrRdRdrrurruuuuulLddlLrruuuullllulDDurrrdRurDrdrdddddlldllulu
lluuruuUluRRRllddddlddrUUUUUdddddrdrdrruLuLuuLrddrdrrruuuuululllulLddd
DlddrRdRRRRllllulluurrrdDuulluuuurrdrruLLrrdrdrddddrddlUUUUUddddlllull
dRRRlluuurruUddlluRdlllDldRRluurrdDlluuuuulldRurDDDDldRRdR


GRIGoRusha, "Double Choice #101"

#####
#   #########
# $    ##   #
##$#...     #
## ##$#### ##
#  ##..+ #  #
#  $   # $  #
#  ###$###  #
#####      ##
    #   ####
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rdRlulldDuluUUlululldRDDDlddrURRRuuurrrrrddrddldllldlluRuUluuuluLulldR
ddDldRRRRuuuluLulDDDDldRuuuurrdrruLLLulDrrrrdrrrrddrddlUUUddllulLrrdrr
ddllLdlluRuUlUUUrrrrurrdLdddllulLrrdrruuuLLLLuLLdRRRRRurDDDrddldllLdlU
UUlUUddrddrrrruruuluullllulldRluLulldRRRllDDDlddrURRRuRDDuluuulullddDl
dRRRRuuuRRRRurrdLddrddlUlluLLrrdrrddllldlluRuUlllluuuurrdrruLLLulDDDDl
dRRRRUUddllluuuurrrrdLrrrRurrdLdDrddlUllulLrrdrrddllLdlluRuUlURdlllluu
uurrrdDurrrRurrdLLLLLrrrrdDrddlUUUddddllLdlUUUlllluuuurrrrdrrrurrdLLLL


GRIGoRusha, "Wake Up #102"

 ########
 #  #   ###
##  $     #
#   ##$#  #
# $ #..# ##
###$#..# #
  #@$..  #
  #$# #  #
  #   ####
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RRRRdrUUUUruLLulldRDDlddrrruuuuLulDrrddddlllllUUUluurDRRurrdrddddlllll
uuUdddrrrrruuuululldlLddddrruurDldlluuuurrurrdrddddlLLddllUURlddrruUrr
ruuuululldllddDDuuulldRuruulDDrurrurrdrddddllllluUUluRddddrrruulDrdLrr
ruuuululldRDDlddrrruuuuLulDrrddddlllddllUUUUUluurDRRurrdrddddlllddlluu
uuUdddddrruurrruuuululldlLddddddrruuuurDldddlluuuuuurrurrdrddddlLrruuu
ululldllddddddrruUUrdrruuuulLDDDldddlluuuuuurRurDrrddddlLrruuuullDDDuu
ulllddddddrruURuuuullldlldRuruulDrrrrddddlddlluuRluUUdlluRuRRRurDDDuul
lllddrUluRRRurDDurrddddL


GRIGoRusha, "Colobok #103"

  #########
###  #    #
#   *.* # #
# * *@* # #
# # .*. # #
#  $ $ $  #
##  #######
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uLulDDRddLUrRRdLuluurRDLddrUllldRuruullDurrddlUlulldRRRddlUrrrdLuluLuu
rDrrDullllldddRdrUUUddlluuurRddrrdLruUruurrrddddlLLLuurrDuluurrrddddlL
uulldlluRluurDRlllldddrdrUUUddlluuurRddrrdLruUrrddLLulluRluurDDlullddd
rdrUUUddlluuurRdrRddLruulldRluuurDDlulldddrdrUUUddlluuurRurDldddrrrrrr
uuuullDDDuuurrddddlLLLLLuuulldddRdrUUUddlluuurR


GRIGoRusha, "Red Star #104"

######
#    ####
# # $   #
#  *#*  #
##$.@.$##
#  *.*  #
# # # # #
#   #   #
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dRddrruuLLullUlluurrDRRDDllDlUrrruullDurrddDrrddllUUUlLuurrDrDLdddrruu
LrddlluUruululldddRRUdddrruuLulDllllddrrUdlluurRuuurrDrddlUruruLLLulDD
DRRdrUllluurrDullddDllddrrUUUrRdLulDrruuullDuullddRluurrrdrdddlllURdrr
uuurrdLulllDDRdrrrddllUdrruulUUruLLLulDDuullddRddRllddrrU


GRIGoRusha, "Kruchok #105"

 #########
 #   #@  #
 #   **#$##
### #     #
# $$**#.# #
# # #  .  #
#   ##.  ##
##    .#$#
 #  ##   #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DLdRRlluLulldRdDDDlluuRlddrruUddlddrUrrruulULLdDldRuuurrdrruululLulldR
DDrrdrruululLulDrrrdrddlluUruLrdrddrruuLLdddlddrrUUluuurrddLruulldDllu
uururrDulldlLulldRRRddllUdDDlluuRlddrruUddlddrURRllluluurrdDuurruulull
dRDDrruuLulDrrdddrruuLrddlluUrrddrdddllUUddrruuuluulldllllddrdRRRlllul
uurrDDldRuuurrurrddrruuLLLrruullDLLulldRDDDDuurrdRRuuruulldlLulDDDrrUd
lluurRdddrruuLrddlluUrrrrddLdddllUUddrruuLUrruullllddRlullllddrrUdlluu
rRRlddlddrURRllUUdlluurR


GRIGoRusha, "Anchor #106"

  ####
  #  ####
 ##  $  ###
 #  ##$.. #
 # $@# .  #
## #$$$# ##
#  . #   #
# .. ##  #
###     ##
  ####  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
DDuuLulDDDrddrrrruruuuluulLLulDDurrrrddlUrrdddllUUddrddlllluurDlulldRR
uruuLulDDurrddlddRRRdrUUruuulldLrdRdrUUddldlllluurDldRRRdrUUdllllulluR
uurrDDDuurrururrdLuluLLLulDDlddddrdRuuuuLulDDDldRuuurrdrruUruLLLulDDur
rrddddRdrUUUruLdddllulluLulDDDuurrddddRRdrUUdllluuurrdRdrUUU


GRIGoRusha, "Return #107"

     #####
######   ##
#    $ $  #
# # ###$#@#
#   #  $  ##
##.... #$$ #
 # #.### # #
 #  .      #
 ##   ######
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ululldLLLdddrrruRRlldllddrrrruUddrruuLULDDurrddlLLLLdlUlluuruuurrrurrd
rDDldddrruuLrddlllllllluurrrruRRDrrddllllllUdrrrrrruullDurrddlLuuulldl
LLuuurrrurrdLDurrdDldddrruuLrddllLLLdlluRuuluuurrRurDllllddlluuRRdddrd
dlluUrrrruRRDrrddllllLdlUUdrrrrrruullDurrddlLuuulldlLLuuuRRRurrdLDurrd
DldddrruuLrddllLLLdlluRuurruRldllluuurrRurrdrdddrddllllLdlUUdrrrrrruul
uuululldllldddRluuurrrurrdLddRDDurrddlLLLLdlluRuuluuurrRurDrrdDllldLLr
rurrruullDurrddldddrruuLrddllllLdlluRuurruRuullllllddRDRRlluluurrdDuur
rrrddRDrrddllllLdlUUdrrrrrruullDurrddlLLLLdlUrrrruuuluurrdDldddrruuLul
DDurrddlLLLLdllulU


GRIGoRusha, "Contra #108"

###########
#  #   #  #
#@   $    #
#  ##*##  #
## ##.## ##
#   #... ##
# #$##.#  #
#  $   $$ #
#####  #  #
    #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rrrurrdrrddddrddlUUUllddRluurrUUruulDllulldRRlllldddlddrRRRRuuluUddrdd
llllluurrDullddrRRRdrUllluuluuurrurrdLLLrrdddrrruUruulDLLLdddrrruUruLd
dddrddlULLUdLLLuuluuluurDrRurrdLdddRddllluullddRRRRdrUUdrrUUUUruulDLLu
lDDDuurrrDDDDrddlUllllluuluUluurDrRurDDurrrdddDrddlUllllluuluUluRRRurD
rrrdddDrdLLruuuuulllllldddrddrrdrU


GRIGoRusha, "Krasotka #109"

   ####
 ###  ###
 #   $$ ##
 # #     #
 # #  #* #
 # # $#. #
## #$@#*.#
#    $#..#
#   # .* #
#######  #
      ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
UlDuuurrrrddlUruLLLrrrddddlUrdddlUllULLdlluRuuuuurrDrrrrdddddlllulLdlU
rrrdrrruuuululllDDDuuurrrrdddddllluLrdrrruulDruuulDuullluurDldRlddddrd
rRdrUUUUlDDuuuuuLLdRllddrUdlddrdrRlluUUddlLdlluRRRuuuuRuulDlldddDuuuur
rrrrDDDrddldllUluurUUddlddrUddrruruuluuulLLrddldddldlluRRRurUluUrurrdd
drddlddrUUdlllUluuuururrdddDDrdLuuuuuulldRurDDDDDuurDluuulllddrUluRRur
DDDDuuulluulDrdddlddlluuuuuRRurDllldddddrrrUUluURRurDDDuulllddrUluRRur
DDullddddllluuuuurRurDldRRurDrDD


GRIGoRusha, "Father Diode #110"

   #####
  ##   #########
  #       ##   ##
 ## #$#...$ $#  #
##     #*#.#. $ #
#  #$$$#+#***#  #
# $  # #*#. .  ##
#  #$ $...#$# ##
##   ##       #
 #########   ##
         #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

For David Holland

Solution/Moves (Built-in)
UUruLLLrrdddDDrdrrrruulllUdrrrddllUdrruulLrrruruulDllDLrurruullDDulLLu
lldRddddldRRRdrUUUddrruurUruLLruulldllLulDullulldRRRllllddrrUdlluurRdd
llldlddrUrrUdllddrrUUdrRRdrrrrrruuruuuulldllllluLrdrrrrrurrddddlddllll
uLLLLrrrrdrrrruuruuuulldlllllululldRddrDDuuluullddRllDlddrUrrURUrDlldl
lddrrUrRRRdrrrrruuruuuulldllllluLulldlddlDldRuurRdrrDullullddddrrurRuu
uLrdddlldlluuuuruururrdLDDrdddlldlluuuuruuRlddRdRlullddddrruUddlluuuur
uururrdLdDlluuRurDrrdrrrrrurrddddlddllllluuuUddddrrrrruuruuuulldllluLL
LulldlddlddddrrurrRdrUUUddlllldlluuuuruururrdrdRRulllulldlddlddddrrurr
rruuUdddlllldlluuuuruururrdrrrdLullulldlddrrrDDuullllddddrrurRRdrUUUUd
ddlllluURurDDullddrRRdrUUUdddrrrrruuruuuulldlLrrurrddddlddllllllullldl
luuuuruururrdLDDrdddlluuRurDDullddrRRdrUUdlllldlluuuuruuRurDDDrdddlluu
RurDDullddrRRdrUlllldlluuRlddrruUlluurRluurrdDlllddrrURurDDullddrRRlll
ulluurRluurrdDldRurDDullddrR


GRIGoRusha, "Aniska #111"

########
#   #  #
#      ##
## ##   #
 # *..#$#
 # *..  ##
 ##$###  #
 #    $$@#
 #   ##  #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ululluuulllddRRdrUUdllldRurrdrrdrddlULLLdlluRUUluuurrRddlLdlUUdrrrdLrr
rDrddlUllLdlluRuUruLrrdrrDrddlUllLdlUUUrrrrDrdLuulluurrDDlllllURRdrrru
ullDurrddlLLruuuurDldddrruuLulDDurrddlLuuullulldRRRRurDldddrruuLulDDll
lUdrrruullulldRRRllddrrruruulDDrrddDrddlULLLdlluRuUluRluurrrrdrddDrddl
UllLdlUUUluuurrrrdrddDrdLLLLdlUU


GRIGoRusha, "Serpik #112"

##########
#   ##   #
#   $    #
##.#*## ##
# ..* @ ##
# *** #  #
###.# #  #
 #  #$$  #
 #  $  ###
 #  #  #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
ruullLLulldRddrRRRlllluuRRRRurrdLdDDullllluurrrRurDlllllddrrUdlluurRRR
urrdLLLLddrrrUdllllDDDlddrUUUUdddRRUUULuRluuLulldRddRDulldRRDDlddrUrru
uuuLLruuLulldRdDrruuLulDrrrrurrdLdddrddlLrruuluuuLLLddlddDlddrUrrUrrru
uluuulllddlddDldRuuuuruurrrddLLrrdrddlllUULUlDrrddrrruululLdddddrUluuu
urrdrddlLrruululldllulldRRDDlddrUUdRRUrrruuluuulllLulldRDDldRuuuRRRRur
rdLddllLLrrrruuLLLLulldRdDrrrrrdrddlllUUddrrruululLLLrrdddddrUluuuurrd
rddlLdlUUUddrrruululLLrrrdDrdLLdlUUUddrruuulLrruulllLulD


GRIGoRusha, "My Heart #113"

   ####
   #  #
####. ####
#   .    ###
# .$.$$*.* #
###  $@$   #
  ####$.####
     #  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Thanks to Serg Belyaev

Solution/Moves (Built-in)
LUUllldRurrrrrddLUruLLLdRldRluuLuurDDlLddRUUrrdLrdLruurrdLrdrruLLullll
ldlluRRRRdLLrruuulDDrddrRRuulLrrddllUdrddlUUrruulDDlluURlddrruLdddrUUl
uulllddRRlluurrrdDrrurrdLLLLuRRllulluurDldlddrUUdRRuLrddrruuLrddllLruR
llllulldRRRRuLruulDDrddrruuLrddlluRlUluurDDlLddRUUrrdLrdrddlUULuurrDDl
luulldlluRRRRdLLrruuulDDrddrruuLrddlluUrrdLdddrUUluulllddRRlluurrrdDuu
lluurDldlddrUUddrruuLrdLrdrddlUUluurrDDlluR


GRIGoRusha, "Kuterma #114"

#####
#   ######
# #$##   #
#    $   #
###$ ##$##
  # ... #
  #$ .#$#
 ## ... #
 # $#.#$#
 #   @  #
 #  #  ##
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uullDldRuuruulDDruuuulDDuulluurrDDrRRurrdLLLLddrrrUdllddrrUUddllddrrUU
llllDlddrURRuurrddLdlUUUllDldRRluuruulDDruuuuLDDuuuullddRluurrdDrrrurr
dLLLLddrrrUdlllddrUdrrddldlUUUllDldRRluurrrrddldlUUdlluuruulDDDldRuuru
uuuLDDDDrRddrruuUUlLrrddddlluuUlluurDDrdddrruuuulLdlUdldDlddrURRuuuurr
ddddLdlUUUUdddrruuuulLdlldDldRRluuurrurrddddldlUlluuuuRRdlldddrrUUUllu
uuuullddRluurrdDDurrrurrdLLLLDlDDrrdddrruuuuUdddddlluuullDDldRRluuuuuU
lluurrDDDrurrurrdLddddddldlUUUddrruuuuuuLLLdlDDDDldRRluuuuururrrdddddd
ldlUUdlluuuuuUlluurrDDDDDDDldRRluuuuururrrddddddldlU


GRIGoRusha, "Trevoga #115"

####
#  #######
#   $@#  #
#  #**.  #
##$# .#  #
#  # *# ##
#    *  ##
#  # ##  #
###      #
  #   ####
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LDDDDRRlluurDluuurDDurrddDDrdLLLdlluRUUUUrurrdddlLrruuulldldDlluUUluur
DDDDldRRRuuruulLrrddlddRUdllluuuluurDrrDDDrdLuuurDurrdddddlLdlluRUUUUr
urrdddddlLdlUUUrRllddrrruUUUruulDllulllDDDlddrURRddrrruuuUruLdddddlllu
uRRllllUUUluurDrrrddlDuruulDDuullDDDlddrUrRRUUlDrdLuuuurDDlddddrrruUUU
ruulDLrDDDDrdLLLdlluRuuuuuurDrrdddddlLdlUUUUUddrRllddrrruUUUruulDllull
lddDlddrURRddrrruuuUruLLrdddddllluuRRllllUUUluurDDDDldRRRddrrruUUUruL


GRIGoRusha, "Sheriff #116"

    #####
#####   #####
#   # #$#   #
# #  ...  # #
# $ #.#*# $ #
###$###.. ###
 #    $    #
 # #@###$# #
 #   # #   #
 ##### #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
urRRurrdLrrddllUULLLLddlluuRRRRRRddrruuLuuullDDRDrrddllUULuuurrdDuulll
luurrDullddrRdddrddrruuLuuuLLLruulldDrrrrddLrdrddlluUlLLLddlluuRRRRRUU
UlllldDuurrrrrrddLrdrddlluUlUUddrruuulLLLuurrDullddrRdddlllddlluuRRRRR
lllluuuullddRluurrdDDuuRRuurrddLrdddRddrruuLuLruuLLrrdddrddlluUlUUddrr
uLdllllddlluuRRRRRUrrdrddlluUruuuurrddLruulldDDLdddrruuLrddlluU


GRIGoRusha, "Dreams #117"

    ####
   ##  ###
####     #
#  #*.*# #
#   .#.# #
#  #*.*  #
##   # $##
 #  $@# ##
 ## #$#  #
 #    $  #
 #   ##  #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LulluurrDrRuUluurDrrdddLLuUddrruuulLdddrDDDrddlULLLdlluRuUrULdlUUluurD
rrDRRdrdDrddlUllLdlUUUrrDullluUluurDrrdDurrdrdDrddlUlLLdlluRuuluRdddRR
uuLUlDluUluurDrrDDurruuuulDlDDuurrrrdddLdlUUdrddDrddlUUUUdddLLLdlluRRR
RluuLulldRDuluUluurDrruurrrrdddLdlUrdddrddlUUUUdddllldlluRRRRluuLullUl
uurDrruurrrrdddLLrdddrddlUUUUdddlllluUluUluurDrruurrrrdddLddddlluuluUU
dddlluRdrUllUluRR


GRIGoRusha, "Irka #118"

    #####
#####   #
#   #$# #
# $  $  #
##$#@## #
#     # #
# $##$# ##
#  # .#  #
## ...   #
 ###..#  #
   #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
drDDldlluUluRdddrruruuluululldRDDlddrdrruruuluuLulDrrddrddlddrUrruuuuu
lLLddrdDldRRluuuluurrruullDurrddddddrddlUlluuuluuRuurrdddddDrdLLruuuuu
uullddlddrddlddrUrruuuuuuullddRllLulldRRRRuurrdDDDDDrdLLLUlDlluluurUdl
ddrdrrrrruuuuuuullddRluurrdDDDDDrdLLruuuuullllulldRRRRlllddlddrUUUdddd
rrurDrruuuuuuullddlddLruuruurrdddddddllllluuUrruurRluurrdDDDDDrdLLLLrr
ruuuuullllulldRRRRRluurrdDDDDDrdLLLrruuuuulllddrDulllUdrruululldRRRRRl
uurrdDDDDDrdLL


GRIGoRusha, "Zagar #119"

   ########
####  #   #
#  #      #
# $   ##$##
#  ## ## ###
## .**##   #
 #  *+*  # #
 ## ####   #
  #      ###
  ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
UUUluRRRurrdLLLrrDDDrrddllUUUUdddddllllluuluuluurDrrrdddRRlluuuluurDrr
urrdLdddrrddllUUdddllllluuRRRRlluuUluurDDDDLdlluUluRRRlldddrddrrrrrurr
uullDllLLruuUluurDrRurrdLLLLDDDldRuuullldddRddrrrrrUrruullUUddrrddlldl
lllluuluuurrrdddLruuulllddRDrruuuuulDrddddllluuurRurrrurrdLdddrrddllUl
LLLruuUluurDDDDLdRuuullldddRluRluurrrurRurrdLLLrrddDrrddllUUUUdddddlll
llUUluuurruurDDDDuuurrurrdLLLrrddddddllllluuluuurruurDDD


GRIGoRusha, "Depth #120"

####   #####
#  #####   #
#  $ @  $  #
#  # ...# ##
##$##.#.# ##
#   $.#*#  ##
#   #   $$  #
#########   #
        ##  #
         ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rrRurrdLLLLrrrdddrddlULLUUUlldddRRRRlluuuluRRurrdLddDrDLLLuuuuRurDlldl
lluRRdldddRRlluLLdlluRRRllUUluurDDDuuRRdrrrdddllUUddrruuuluLLLrdRurRRu
rrdLLLrrDDDrdrddlUlUUUUdddLLuuuuLLddddRRRlllulldlluRRRlluuluurDDDuurRd
rRuLLLrrrrDDuururrdLLLLrrrdddrDrddlUlUUUUdddllllUUdlldlluRRRlluuluurDD
DuurrdRRuLLLrrrrDururrdLLLLrrrddddllllUUdlldlluRRRlluuluurDDDuurrdRRuL
LLrrrrrrdddddrruLdlUUUUdddllllUUdlldlluRRRlluuluurDDDuurrdRurrrurrdLLL
LLLLrrrrrrddddllllUUdlldlluRRRlluuluurDDDuurrrrrrrddddllllUlldlluRRR


GRIGoRusha, "Honour #121"

#####  ####
#   ####  #
#      $$ #
##$#####  #
#  #.. $ ##
#  ...##  #
#  #.. #$@#
####   #  #
  ##$#### ##
  #    $   #
  #   ##   #
  ##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dddlLLLdlluRUUUdddRRRRdrruLuuuuluuruulDLLLLLulldRDDlddrUrRurDlddddrrrR
drruLuuuuluUruulDllllLulldRdDldRRRddddrrrRdrruLuuuuluUruulDllllLulDDDl
ddrUrrddddrrrRdrruLuuuuluUruLLLLLLulldRdDlddrUrrurrRllldddrruLdlddrrrR
drruLuuuulUlllDurrrUruulDllllLulldRdDldRRRurrrrUruulDllllLulDDDlddrUrr
urrrrUruLdddrddddLLLLdlluRRRRRdrUUUlUUUlllldDDDuuuurrrrdddrddlllldlluR
uurruLUddlUdddRRRRdrruLuuluuuUruulDLLLLLulldRdDlddrUrRuRDlddddrrrRdrru
LLLLLdlUUUUUddddrrrrruuluuulLrrUruulDDDDrDDDuuuluuullllLulldRdDldRRRdd
ddrrrrdrruLLLLLdlUUUddrrrrruuuuluuullllLulDDDldRRluuurrrrrrdddrddlUUUU
ruLLLLLLulDDDldR


GRIGoRusha, "Marazm #122"

  #######
  #  #  ###
### $# .  #
#  $.$.   #
#  .$.$.###
## $.$.$#
 # .$.$@#
 ###.$###
   #  #
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
UUUluRdddlUUdlLdRluuLuurDDRddlLUUrDllluRRdddlUrurrdLrdLddrUUluurrrddLL
UlululldRdRRuRuLLrddlluRuruulDDDlluRdrUrrdLdDrUluulldddRluuurrdLruuulD
DrddrdrruuuLLrrdddllulLdRRluuUlDulldRRurrrrddLLdlllUdrrrurruulllldDuur
rrrdddLulLrrruullDRuruulDrdrruLdlDlddrUlululluurDlddRdRlululldRdR


GRIGoRusha, "KUB #123"

#########
#  ##   #
#  $    ###
#  ##$ #  #
## #   $$@#
 # *. ##  #
 # #.###$##
 #$#*##   #
 # ..#    #
 ##..    ##
  #  #####
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dlDDlddllllulUUUUUluurDRRRurrdLddldldDDldRluluuuuUluurDDDDRluuurrRurrd
LddllDlluuurrRurDlllldddrrDDDlddrURRururrdLdLLrruuuuruulDDDDlDldLLUllu
UUrrrurRlldlllUUluRRRRDullldddrruRdllldddrrUUddlluuuuuurrrdddLdddddlUr
uuuuruuulllddddddRdrrrururrdLdLLrruuuuruulDDDDlDldLLUUUddlluuuuuurrrdd
RRlluulllddddddrrddlUrrrururrdLdLLrruuuuruulDllluulllddddddRdrUUdlluuu
uuurrrddrrrDDDlDldLrururuuullluulllddddddrddrUUdrrururrdLdLLLrrruuuuul
lluuurrdLDldRRluuulDlllddddddrddrUrrrruuuuruulDlllUrdrrDDDlDldllluluuu
uuurrRurDDldRRlluulllddddddrdrrrururrdLdLLLLdlUrrrrruulDrdLLLLrrrruuuu
ruulDDDDrdLulDrdLLL


GRIGoRusha, "Pryanik #124"

####   #####
#  ## ##   #
#   ### $  #
# $$    $ ##
##  ####$##
 ##   . $ #
  # # ... #
 ##$##**###
 # $ ...#
 #   ##+#
 ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ulUUrDDllldlluRRRRuululldDuurrdrruLLrrdrruLLddldlldlluRuuuulUluurDrDrr
rruRurrdLdLDDrdLulDlluRRdlddlLdlluRuuuUlUluurDrDDDRRlluurrrRuRurrdLdLd
DldllulluurrrRuRDlllllddrrdrddlLdlluRuUUUlURddrrdrruLLLrrdddlLdlluRRlu
uUrrrrrrdLLulDDulullUluluurDrDRRRRururrdLdLDDrdLLulDlullUlUluurDrDrrrR
uRDDDrdLLullllUlURRRRRurDDulllllddrrrrdrruLuuuurrdLulDDDDrdLuuulllllll
uurDldRRRRRRurDDDL


GRIGoRusha, "Svadba #125"

       ####
##### ##  #
#   ###   #
#  $@$    #
## $#$#  ##
 # ...# ###
 # #**#$$ #
 # ...  # #
 ##   #   #
  #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
RRRlllLulldRddrrDullddrdrrurrUUUrUruulDlDlllLDuulldRurDlddddrdrruLuurU
dlddrrruuUrUruulDlDlLLLulldRddddRdrruUluLrdrddlUlluUddrrrrruuUrUruulDl
DlllLulldRRRRdDlllUdrrruullDldRuuulDrddlddrrrrruuUrUruulDlDLLLLddlddrr
rrruuUrULLLddDuuurrddddlLdlluluurRluuulldRurDRRdDlllddrdrrurruuuuLLLLD
urrrrddddlldlluluuRlddrdrruLrrruuuullddDuuurrddddlLuuuullddRluuulldRur
DrrdDDulllUdrrruullDldRRluuulldRurDrrdDuurrrruulDrdLLLLLLDldRRluuulldR
urDDldRuurrrrdddddrruuLrddlluUUUruLLLLLulldRurDD


GRIGoRusha, "Blue Eye #126"

      ####
#######@ #
#  #.*.$ #
#   .#.$ #
#  #.*.$##
##   $#  ##
 # ##     #
##$   #   #
# $  ###  #
#   ## ####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rddLDlLrrDrddlUlldldldlluRdrUlUUUUluurDDDDDuuuurrDrrruruulDlDurrdLdLLr
rDrddlUllULLrrddldldlluRuuUUluurDrrDRddrrUUUruulDDDDuLLddrRlldldLdlluR
uuurRllUluurDrruRRlldDrrrddllUddldLdlluRuuurRuRRUrruulDrdLDllluurRlldd
dllUluRRlddrrurrruruulDlllDDrrrUruLddDrDrddlUlUllUddldLdlUUUUUluRRlddr
RuUddlldddrrururrUUlLrrUruulDLDurrdLddddrruLdlUUUUruLddddllUddlLdlUUUU
luRR


GRIGoRusha, "Ziko-City #127"

   #####
  ##   #########
  #       ##   ##
 ## #$#...$ $#  #
##    .#$#.#. $ #
#  #$$*#+#*$*#  #
# $  #.#$#. .  ##
#  #$ $...#$# ##
##   ##       #
 #########   ##
         #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
UUddDDrdrrrruullDurrruruulDllDurruullDDulLLuLLdRRRRlllddddrdrdrruLuulU
UddrddrruuLrrUruulDllDLDlUrrurruullDlLLulldRddddrdRdrruruurUruululldll
LulDrrrrurrdrddldlLullUdrrdrruruululldlLLulldRRRddrrdrddldllululuuUddd
rdrdrruruuluUdlldRluuululldRddddrdrdrruLUUluRdddrruuLrddlluUluuuLulldR
ddddrdRdrUlluluuuuulLulldRRRllllddrrUdllldlddrUrrUdllddrrUUdrRRdRRuLLL
LrrruuuulululldRddrDDuuluullddRllDlddrUrrURUrDlldllddrrUrRRdrruLuuuulu
LulldlddlDldRddrrurrRllldlluuuurRdrrDullullddddrrurRuuuLrdddlldlluuuur
uururrdLDDrdddlldlluuuurRdRluluuRurrdLdDlluuRurDrrdrdddDrdRdrruruulllu
uuLLruLLLulldlddlddddrrurrRdRUUdlllldlluuuuruururrdrrrdrdddrrrddldlluL
rdrruruururuulDllDLdlUrrurruullDLLLulllulldlddlddddrrurrrrrdrdrruruuLu
llUdrrdrrUruululldlLdddRluuurrurrdrddldlddldlluRUUluuurrurrdrddldlLuUd
LrdrddLdlluRuUlURdrrddLdlUUdrruulLddllullllldlluuuurrrrDDuullllddddrru
rRRRldRRRdrUUUrrruruulDllDLdddrruurUruLuullDDuurrddLrddlddlllllluluuul
ldRulluururrdLDDrDDuullllddddrrurRRlllUURurDDullddrRlldlluuuuruuRurDDD
uullddRdRluluurrdDrDullllddRlddrruUURuuullddRR


GRIGoRusha, "Uspex #128"

   #######
 ###  #  #
 #  $@   #
 # #  #..#
 # $$##..#
####  .**#
#   $$.# ##
#   # ##  #
####   $  #
   #   #  #
   ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rrrddDDDrddlUUUUUUdddddLLdlluRuUruRurDDDrddlUlLdlUrrrUUUluurDDDDrdLuuu
lldlLLdlluRRRRluRRRuuulldlDDrrrurDDDrddlUUUUdddLLdlluRRRllUULLdlluRRRu
uuruulDDDDRDDuuluuullddRluurrrrrdddrddrddlUlldlluRuuulUUruLrrrdddLLrrr
dDrddlUlLdlUUULLdlluRRRUUUrurrdddrdDrdLuuuluurDDllLrruuulldldDuuruulDr
rrurDDlddlllulluuRRRRllllddrrUddrrruuruulDllLdddrrrrUUddDDrddlULLdlluR
uULuuururrDrdddDrddlUlLdlUrrrUUUllLdlUUUruulDrrrdrDDDDrdLuuuuuluurDDDD
llllulluuRRRRllllddrrdrrrruuuulDrdddDDrddlULLdlluRUUluuUruLrrrrdddllLr
rrdDrddlUlLdlUUUlLdlluRRRURRllUUruulDrrrrddddDrddlUUUddllluUluRlulluuR
RRRRurDDullllllddrrUdlluurRRRRurD


GRIGoRusha, "Perekrestok #129"

       ####
  ######  #
  #  #.. $#
###  #..$ #
# $ $ .# $###
#  $ #+ $ $ #
### $..#    #
  #$ ..#  ###
  #  ######
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
uururDrDDLUruLddddrUUluuulldddRluuurrddDllddllUlUURRllddrrrurruuulldDD
DlllulluRRRRllddrrruUllDldRRluuuulDDldRurDldRddlUUruulldRurDDldRuuurrd
rrrdrruLLLLruuullDurrdLrrDldRddlUUUruLuurDDlddrdrruLLdlUUUruLLrrdDlddr
ruLdlUUUruL


GRIGoRusha, "for Paul #130"

  #####
 ##   #
 #    #####
##$# ##   #
#@ # $    #
# $.*.* ###
#  $.*. #
##  # * #
 #####  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ddrRlluurDrRuRRRddlUruurrdLulDLdLLuRRddrddlUlUdrruLuuRDDluulldRRlluuul
lDDlddRURRurrdLrddlUruulluulldDlddrdrURUUUdrrdLrddlUlUdrruulDrururrdLL
LddrUdlddrUUlulldRlllluurDldRRRlluuuururrdLdDDrruLrRurrdLLLdDrddlUlUdr
ruUluRdlDlLLdlUluurDldRRRRluLdlluuruuRurrdLdDRDrruLLdLdllluurDRRRllluu
uRurrdLdDrrrurrdLLLLdLdldlUluurDRRlluuuRurrdLdDDlddlUluRuuuRurDDD


GRIGoRusha, "Nadejda #131"

           #####
    ##### ##   #
    #   ### $  #
    #       $ ##
###### ### #$##
#   #..... # ###
#@# $.###.$#   #
#   #.###.$  # #
### #....$##   #
 ## $ $   ######
##  ####$##
# $$    $ #
#   ###   #
#  ## #####
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
urrdRlddddlDlddrUrUrrrrdrruLUUrUURUUlllllDlldddDlDlddrUrUrrrRdrUlllllU
UUUlluurrDDDDDlDRuuuuurrurrrrrddlddllulldLrurrdrruLLrruruulllluurrrrru
RurrdLdLLLLLLulDrrrrrrruulDrdLDDDrrddllUUUUULLDDllllldllddDrrRRurrurRl
ldlldlllluuurrurrrrrDullllldlldddrrrrurruRuuuuLLLulldRDuRRRRddddldlldl
llluuurruRRRlluurrrrRuRurrdLdLLLLLLulDDurrrrddddldlldlllluuurruRRluurr
rrrrruulDrdLLLLLLulDDurrrrddddldlldlllluuurruRldlldddrruUUdddrrurrdLul
LdlUUddllDldlddrUrURRRRdrruLUUruLLLdlUdllDlDlddrUrUrrrRdrUUUruLLLdlllD
lDRRRRRdrUUUruLLrdddlllllllddrUluRRRRRRdrUUUruLdddllllluurrrRllllddrrr
rruUruuruuuurrdddrrddllUUUUdddLLuuuururrdLLLLLLulDD


GRIGoRusha, "Flying Idea #132"

  ####
###  ########
#  $  .+.#  #
#  $ #$#*.  #
###$##...#  #
 ## # $$$  ##
 #  # # ## #
 #         #
 #  ########
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
rDrrddddllluURRllddrrruUUruulDllulllldLDDDldRRRuuRRddrrruuUruLddddlllu
uRRllddrrruUUdlllllddlluuuururrrrdDuulllldlddddrruurrRuuullllulDDDDDld
RuuuuulldRurDDDDlddrUUUUUrurrrrdddlllddLruurrruuullDDuullLddddlddrUUUU
UrurrrrdddlddLLLruuRuuurrddLDruuulldDuulldldddlddrUrruuRuuulldlddDldRu
uuuruulDDlluRRRRRRllldlDDDlddrUUUUUluRRRRdddlddLruururrdLuluulldldddld
drUrrrrUUruLdddlluuRlddrruUlURdddrrruuLLrrddllluUrrruruulDLrDDlllddrrr
UUUruLddddlllllllUUUUrurrDulldlluRRR


GRIGoRusha, "Sambist #133"

    ########
 ####   #  #
 #  #.#.   #
 #   ***#  #
 #  #...  ##
### ##$## ##
#  $# $    ##
#  $ @##    #
## $#####   #
 #  #   #####
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
uRRRdrUUUllllUdrrrrUruulDllDLdRuurrDDDDlllUdrrruuuullddRluurrdDDullulL
dRRRluurrdDlllddldlLUUUluurDRRRdddldlluuUluRdddlldRRlddrUUUUUluurDRRdr
ddldLLdlUrrruruulullDDDDrruruurrruullDLLLrrruullDurrddldddrrdRdrruLuLU
UUruLLrddlLulLdRddrRdRUUUlLrrddllluUluuurrDDuulldddrddrrruuUruLLrddddl
lluuluuurrDrrddlLrruullDLDlUrrurrddlLLrrrddlllldlluuuluurDRRRdrrruullD
urrddddddrruLdlUUUUUruLLrddddlllUdldlluuUluRRRRlllddddlddrUUUUUluRRRll
ddddlluRdrUUUluRR


GRIGoRusha, "Rogalik #134"

##### #####
#   ###   #
#  $   $  #
## #...# ##
 # $***$ ##
 ## ...#  #
  #@ #$$  #
  ##   ####
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
rurUUlDrdLuuuLulldRddRRuuLulDrrdrruLLdddrrUdlUluurrRurrdLddLLdlluuurrR
urDlllldddrruULDldddrrUUUrrddLruullluuRDldldddrrUrruulLrrddllULUlDrrdr
ruulLuuRurrdLDDlluuRurDllllLulldRRRRRdddllullUdrrdrrddllUlUdrdrruuurrD
rdLLruulldlLddrrUrruulluullDDuurrdLrdrrddllUlURuulllulldRddRRDrrddllUl
URddrruuuuullDDDuuurrdLrddLUruuRurrdLDDLLuuRurDllllLulldRddRdRluluuRRR
RdddddllUdrruuurrDrdLLruulluuRurrdLDDlluullllddrddrdrrUUUrrDrdLLruuuuL
LLLLulldRddrddrdrrUUddlluluuluuRRRRRurDDDDrdLLruuuullllllddrddrdrrU


GRIGoRusha, "Mekom #135"

####  #####
#  ####   #
#   $     #
#  #$###$##
## .*.*..#
## ## # ##
#     $  #
#   ##@  #
##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
ruLLLLdlluRRRRuuLLrrddllluUUluurDDDDurrrddRdrruLuuLLLLrrddlldlluRuUUlu
urDrRDullDDrRuuRRRurrdLLLLLddRddRdrruLuurUdlLLddRdrUUdlluuLuurrrurrdLd
dLddlluuluurrRurDllllddrddlLdlluRRRRlllUUUluurDDDDuuuRRRRRurrdLLLLLLrd
drddRdrruLuurUdlLLddRdrUUdlllldlluRuuuluurDrrrrrurrdLddLLrddlllLdlluRR
RRRdrUUdllllluuUluurDDDDuuurrrrRurrdLddLddlllldlluRRRRRdrUUdllllluuuur
rrrRurDD


GRIGoRusha, "Oberon #136"

########
#  #@  #
#  $   ####
# $#.##   #
##  ... # #
 # ##.. $ #
##$##.#$# #
#  $  $   #
#   #######
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dddllUluurDRRddllUluRddrrrrrurrddLLulldddRRUULrddlluUddlLdlluRRRRlllUU
UUluurDDDDDuurruuLrddlluluurDrrurrdLulDllDDrrRdddlldlluRuUUrrrdddlLdlU
rrruurrrruullDurrddlLddLLuuuRllllUluRRRDuurrdLulDllddrRRdddrruuLrddllL
LdlluRUUUrrrDrrddlllLdlUrrrrruurruullDDlluRllllUluRRRDuurrdLulDllddrRR
drrrruullDurrddlLLrrrddLLUdrruulLddLLLLdlluRUUUUluRRRDuurrdLulDllddrRl
ldddRRRRRuurrddLLLLLLdlUUUUUluRRRDuurrdLulD


GRIGoRusha, "SokoSutra #137"

##########
#   ##   #
# $ @  $ #
## #### ##
#  ..## #
# $.*. $#
#  #.## #
###  #  #
 #     $#
 #   #  #
 #  #####
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
lulDrrrrurrdLddDllLulllddrURurDllluRdrrrrruuuLLLLulldRDDldRuuuRRRRurrd
LdddllluLrdrrruuuLLLLulldRdDrrdDDlddrUrrurUUllldDuurrrddldlLuuuulllddr
URurDllluRuuRRRRurrdLLLLLulDDDldRuuurrrrrdDDllluLrdrrruuullllldDrrdDDl
DlddrUrUrrurUUUUddllldDlDRuuuulllddrURurDllluRuurrrrurrdLLLLLulDDDldRu
uurrrrrdddllluLrdrrruuullllldDrrdrrrddlddrUUUUUUddlllulllddrURRDDldldd
rUrUUUUllluRuurrrrurrdLddddddlLrruuuuuuLLLLulldRdddrrddlDlddrUrUUUdddl
luRdrUUdrrruuuuuulllLulDDDldR


GRIGoRusha, "Suriken #138"

#####
#   #######
#    $    #
## ##...  #
##$##$##$##
#  ...## ##
#   $@$   #
#######   #
      #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
LLrrRRdrruLuUUlluLrrdrruLLrddddLLLulldRRRRdrUUUUlllDDldRRRdrUlllllulld
RRRRuuuuLLulldRdDDldRRurruuulLulDDDuurrrdddlldlluRuuurrrdrruLLrrdrruLL
dlldddLLrrRRdrruLUUddLLLuuuuLLulldRdddRdRRRRdrUlllllulldRRRRuuuulLulDD
DuurrrdrrurrdLLuLLLLulDrrrddddRRdrruLUUUruLLLLddddrRdrUUUddllluuuurrdL
rurrdLdddllllluRdllluRRdrrrrruuuLullLLulldRDDuuRRRRRdrdddllllllluRdrrr
rrruuuruLLLLLLulDDDDldRRRRRRdrUUUddlllllluuuurrrrrrrdL


GRIGoRusha, "Mad Dog #139"

####
#  ### #####
#  $ ###   #
#  $ $@$   #
##$# ...#$##
## ##.#.  ##
#     # #  #
#   #.*.$  #
#########  #
        ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
RRurrdLDDlluuRurDlldllluRRdlddllluUUluurDDDDuuRRdrruLLLrrrRRurrdLLLLrd
drrUdDrddlUUUllddRluuulldddRRllulldlluRRRlluuUluurDDDDuurrdrruLLLrrrrd
dddllUUdlldlluRRRlluuUrrrrrddddllUllluuurrdRRllulldddrrrUdllluuuluurDD
DDuurrrrrrurrdLLLLLLLrdRdddrruurrUddrddlUUUllddRlllulldlluRRRlluuUluur
DDDDuurrrrrrurrdLLLDDrrUdlluuLLLLrrdRurrurrdLdddrddlUllllUUdlldlluRRRl
luuUluurDDDDuurrdRurrRurrdLLLLLLLrrrrrrddDrddlUllllUUdlldlluRRRlluuUrr
rrrrrddDrddlUllllUllluuurrrrrrrddDrdLLLLrrruuuulllllllluurDldRRRRRRRur
DDDDrdLLLUdrruuuullllluLdlluurDldRRRRRRRurDDDDrdLL


GRIGoRusha, "Juravli #140"

#####
#   #########
# $         ##
##$### # $...#
 # $   ## $ .#
## # ..#  $#.#
#..##.##  $  #
#.  $  ## $###
#  # $$@#  #
#####   ####
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
dllUUUUruuurrrrrddLrrddlLUlldRRuUruulDulldRDuurrdLrdLddlddrUUUUrrddLru
ulldDuuruulDulldRurrdrdddlllluRURRurDluulDulldRRRlldRRllddrUUluRllulll
llulldRRRRRllllDDDDlddrUUUUUddddrRdrdrruLuLuuluLrdrruuulllulldRdDDDldd
rUrRdRUlllUUUrrdrruuullLulldRDDDDldRuuurrdrruuullLulDDDrrRlllDDlddrURR
drdrruLuLUUlulluurrrrdDLruulllldddDlddrUUUUUddddrRdRdrruLuLuuuLLrrruul
llulldRdDDDlddrUrRdRUUdlllUUUrrrruullLulldRDDDDldRRRdrUllluuurrrruullL
ulDDDDDldRRRdrdrruLuLLLLdlUrrrrrddlUruLLLLuuurrrruuRRdrruLddddddrUUUUl
uuLLLLLLulDDDD


GRIGoRusha, "Comet tail - GrigrComet #1"

########
#  #   #
#  .** #
#   *  #
## *** #
 #  *  #
 ###$ ##
   #@ #
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.06.11

Solution/Pushes (Built-in)
ruuruulLLrrruullDldRullldRddrRULdlUUluurDrrurrddddLLulUdlUdrrdrruLLrru
uulldDllddRURuuurrddddlLrddlUUUlldRurDrruLLrruuulldDuurrdLDrddlllluuRR
llddrrULdrrruLUddlluRluRddrruuuullDDllluurDRdddrrruuLLrruullDlDRullldR
urrurrddddllllUUluRdddrrrruuuullddLruurrddddlllluUrrDuuurrddLrddlLuUdd
rddlUUrruullllluurDldRRlddR


GRIGoRusha, "Star shower - GrigrComet #2"

 ####
 #  #####
 #$ $ . #
## * * @#
# . * *##
#  *   #
#####  #
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.04.19

Solution/Pushes (Built-in)
lDldlLrruruulDlDlluRRRurrdLdLddrUUlLulldRdRluurDrrddlUruULLdldRullldRR
ururrdLLLdlluRuRuulDDrRdrruLuLrddlUlluurDldDRRuruLddlluRluurDrrdrdLrdd
lUruululllddrdRRUruruLLLrrddldllulldRRuRURurrdLdLLrruulDldLdlluRuRRRur
rdLdLddrUlLULuluurDRRlD


GRIGoRusha, "Northern lights - GrigrComet #3"

  #######
### .$  #
#@$$..  #
# $..#  #
# $$.$ ##
# $..  #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.04.16

Solution/Pushes (Built-in)
dRRllddRRUrRdrUUruulDlluRldDLddRUrrUruLLullDDuurrdLrrddllUddllluuRRDrr
ruulullDDllddrURRdLuuuurrdrdddLruuululldddrRdrUllluuRDldlluuRDrruulDrd
LddRUrrUruuLDLLuRldDlddrUrrdLruUruLLullDlldddRluRRRRdrUUruLruLLrdddlll
lluurDldRR


GRIGoRusha, "Space rocket - GrigrComet #4"

  #####
  #   #
###$  ##
# $.$  #
#@.$.# #
#.#.$. #
# $ # ##
###   #
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.19

Solution/Pushes (Built-in)
rRuRlddddrruuLUUldDrrruuLuullDRDrrddllluUdlluRRRuulDrdLddrrddllUUUlldd
RluurrdrrddllUlluurrUrDlllddrrUddrruuLuLDruuuulDDrddrruuLrddlluUluurrD
ullddrddlUdrrddllUlluuRRllddrrdrruuruuLuulldDuurrddLDLUrrrddlddllulluu
uRRRllldddrrUULulDrrruLddddrruuruuLuullDRDulDDlluRdrUrrrddlddlluUddrru
uLULDuuRuulDDrddrruuLrddlluUluurrDullddrddlUUlldRRdrrruuLuullDDuurrddL
DLUrrrddlddllUURuuruulDDlDuruulD


GRIGoRusha, "To dock - GrigrComet #5"

   ####
  ##@ ###
  # * . ##
### * *$ #
#   **.  #
#    $# ##
#####   #
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.21

Solution/Pushes (Built-in)
rddLDururrDLdLLuRdrUrrdLddllUUluRRldddrruuLulldLdRuuruulDDrrdrruLuLrdd
lUllDRurrdddllUURurDlllldlluRRRuulDrdRRurrdLulLdddrrUUruLLrdddlluulLdR
urRurrdLddllUlluuurDlddrrdrruuulLrrdddlluURurDlldlluRRlluurDlddrruRurr
dLulLddlluuururDlldddrrdrrUUruLuLLDDRUrrdLddllUlluuRRllddrUdllluRR


GRIGoRusha, "Artificial satellite - GrigrComet #6"

   #####
 ###   ##
 # .*.  #
## $+$  #
#  *** ##
# $ . $ #
#####   #
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.21

Solution/Pushes (Built-in)
DRUruullDllddRURRdddrruLdlUULulldRdRRuLdlUruuurrdLulDDDrUluurrdLulDrdd
ddrruLdlUUllluuRRDLruurrdLulDldddRRuUdddrruLdlUllulldRRRRULLuurDuurrdL
ulDldddlluRdrrruULullDRururrdLdddllUUddlluRdrrrdrruLLuuurrdLDlUdddrruL
dlU


GRIGoRusha, "The lost element - GrigrComet #7"

  #####
###   ##
#@ *#  ##
#.* *   #
#  * *  #
### * $ #
  #  ####
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.22

Solution/Pushes (Built-in)
ddrUrRdLddrUluurRurDrddLLUdLUlulldRRRdrrruululullDDuurrdrdrddllluLuuur
rdrdDuululldddrRllulldRRRddlUruLuuurrdrdrddLLrruulDuululldddrRllulldRR
uuurrdrdrddLUlULLdRlddrUUluuurrDrDrddlLLullluuRlddrruLdrrdrrruulDuulul
lDlddrrRllluurDldRuuurrdrdrddLUlULLdRluuurrDrDLLdlUrdddlUruurrrddlLrUr
uLL


GRIGoRusha, "Sunrise - GrigrComet #8"

 ######
 #  + ####
##  #    #
# ** *** #
#   $   ##
####  ###
   #  #
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.22

Solution/Pushes (Built-in)
rdDDrrULulullldDRdRRULdlUluurrrDrdLdlddrUUUrrdLulDllulldRRRRuLdlluuurr
rDrdrdLLLuRuullldddRluuurrrddlLdlUrrruullDurrdddrruruLLrddlluRllLdRRll
uuurrDrdLdlddrUUlluuurrdrrrdLdLLrruullDLDRddlUUruurrddLruulldRlDllURRd
lllluRRdrruuulllDurrrdddlluUluRdddrruLdddrUU


GRIGoRusha, "Flame Cross - GrigrComet #9"

 #####
 #   #
## # ###
#  $   #
# *** .#
## *   #
 # * ###
 # @##
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.24

Solution/Pushes (Built-in)
luuUURRllddRURuuullDDRdrUllldRdddrUrULrrruuLDuLLDlDurRddlUluluRuurrDDr
rddLLdldlUUUUdddrruLrrruulDulLDlluRdrRuuullDDldRuuurrdddddllUUUdddrruu
uLrdddlluuRDuurrrddLLUluRdllluRdrruuullDDldRuuurrddLrddrruuLLdRluuulld
DRluurrdD


GRIGoRusha, "Kosmos - GrigrComet #10"

   ####
####  #
#  *+$##
#  **  #
## * * #
 #   ###
 #   #
 #  ##
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.24

Solution/Pushes (Built-in)
DDLruuLDlDDrUrurrdLLuuurDDldLddrUUUruulDlDlluRRdDrddlUlUdrruLuulldRurR
DDldlUrdddlUUruruulDDuulldRurrddlDlUrrurrdLLuuurDDldLdlddrUrUUddlluRur
UruulDlDDrUldDlddrUrUUluulldRDrrddlUdlUUUluR


GRIGoRusha, "Antenna - GrigrComet #11"

   #####
####   #
#  @ *$#
#  * * ##
## ***  #
 # .*   #
 ###   ##
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.25

Solution/Pushes (Built-in)
ldddrRURldlluRluurrurrDLLLDlddrUdrdrruLuLUdrddlUlluuRuRurrdLDLDLdRuuru
ulDlDlluRRRurrdLdLLuRdddlUrddrruLUlldRuuulDulldRurrddddrruruLddllullUU
RDuururrdDDLLddrrUruLuuulldDDuuurrdLulDldlluRRRurrdLrddLULLrrrdddlUruu
uullDldRullldR


GRIGoRusha, "Landing - GrigrComet #12"

 ######
 # @  ##
 #$*** #
## *   #
#  *  ##
# #*  #
#  . *#
###   #
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.10.07

Solution/Pushes (Built-in)
rrDDldLDruuruulDullDRDRddlUrdddlUlluuRURuurrdLDDDuulldRururrdLuulllDRd
dllddrrUrrUULDLddlluuRURuurrDLDurrdLuulllDRdDllddrrdrrUUULLuuurrdLDurr
dLddddlluRlUURDldlluuRlddrruruUruullldDRRddlUddlluuRuRDluuurDurrdLDurr
dLuullldRlddrUdllddrrUrrUULDLddlluuRlddrrdrrULrULuurDD


GRIGoRusha, "Jesus Cross - GrigrComet #13"

 #####
 # . ###
##$.$$ #
# .+.# #
# $.$  #
# $.$  #
###  ###
  ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.10.13

Solution/Pushes (Built-in)
ddRluurDluuurDlddrrruuLLDldRlddrUluururrdddLLdlUrrruuulldlllddRRRllluu
rrrDulllddrrUdlluurDrruLdddrUluururrdddLLUllluRdrrddlUrrruuullullDDldd
RRRllluuruurrdDDuuullddRUdllddrrUdlluurDuurrrrddLLLUdrrruullDldRlddrUl
uururrdddLLdlUrrruuulldlllddRRRllluurrrDulllddrUdrUruurrddLLLdlluRdrdr
UUrrdLL


GRIGoRusha, "Peace - GrigrComet #14"

 ####
##  ###
#  *$ ###
#  *@*  #
#  ***. #
#  *    #
## *  ###
 ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.10.25

Solution/Pushes (Built-in)
LrRlDRddlULUdrruulDllluurDRluurDlldddRUrrruuLLDRdrddlULUlluuRDRluurDrr
DDLddrUluULulldRlddRURUdlddRUrrdLurrruuLDuLLDLdlluRluurDRluurDlldddrrR
uRuuLLrrddlddrUluUrrrddLLdlUllluurRuulDldddrrrrrruulDuluLLdRDRddlUlllu
uRRurrDrrddLLLrrruullulldRlllddrUluRluR


GRIGoRusha, "Fakel - GrigrComet #15"

  ####
  #  ###
### .  #
#   *  #
# $@**##
### *  #
  # *  #
  # *  #
  ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.09

Solution/Pushes (Built-in)
uRlddRUUllldRurrddlUruLuurDDldlluRdrUrurrdLLLddrUldddRUUluuRuulDDDlluR
drUrurrdLLLdDrUddrruLdlUluuRurrdLDDlluuRurDlldlluRRRuulDrdLddrddlUUUUr
DDuuurrdLulDldlluRRRuulDrdLurrrdLulldddrrUUddlluRluurDrruLdlldlluRRddr
rrddLUruL


Dries De Clercq & GRIGoRusha, "Train - GrigrComet #16"

  ####
  #  #
 ##  ####
 # **   #
##  *@# #
#   *** #
#     ###
#######

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.19

Solution/Pushes (Built-in)
LLUlDrrruLdlddrrULuurrrddLLdlUrrruullDurrddlLdllURRuulDrddlllluRuuRldd
drrruulLrrddlULrruurrddLLdlluuuRuulDDrRdddlluRUUlDrddrUrruuLLDurrddlLu
lluRRdddllUdlluRdrrruuulllDRurrddrruuLLdddllURRdlllluRRluurDlddrrruuLL
rrddlULrruurrddLLdlluuRluRluurDDldddrrurruulLLulDrrrrddlldlluRdllluRdr
ruUUllDRurrrrddlLdllURRdlllluRuurrrDulluurDldlddRU


Dries De Clercq & GRIGoRusha, "Parallel World - GrigrComet #17"

  #####
  # @ #
  # # #
###$. ###
#  $.$  #
# .$ $. #
### .$###
  # . #
  #####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.21

Solution/Pushes (Built-in)
rddldLDlluRRdrddlUruLuUrruullDDDDrUdRUrrdLLulluuurrdDuulldddrRdrruLLuu
ullddddRddlUUUlldRurDrRurrdLLuLLdlluRRRRuuulldDRdLrrdrruLLUllddRRlddrU
UlluurDDllluRRdrrddllUdrruulLuurrDDlUrrrdLLulldddrrUUruLdddlluuRDuRurr
dLLdlluuRDrruLdlluuuurrDDDuuullddddrR


Dries De Clercq & GRIGoRusha, "Broken angle - GrigrComet #18"

  ####
  #  ##
 ## * #
 #  * ##
## #@  #
# *** .#
#   $ ##
###   #
  #####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.23

Solution/Moves (Built-in)
rddLruulDruuuLDlldDRRUruululDrrddlUddlluuRRdrrdLLuuluurDrDulldRddrddlU
UUUllddRluurrdDrddllURuuullddldRuuurrddLrddlUlUdrruuuluurDDDDrruLdlUUl
uurDrDDlUddLdlluRdrdrUUUrrdLulDruuuLDllDDRRUruLddlddrUUUrrdLulDlddrrUd
lluulldRurrRuuulDDrdddllUluuuRldddrdrruuuuululDrrddlUrddddlluluuuRlddd
rdrruLruulDLrrddlUdlU


Dries De Clercq & GRIGoRusha, "The Palm - GrigrComet #19"

####
#  ####
#  $  #
#.$+$.#
# .$. #
# $.$ #
# $. ##
######

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.28

Solution/Pushes (Built-in)
LdlddRUrUrruulDrddLdLUlluUruRldldddRurrruulLDurrddlUluululDDDRddlUrRUr
rdLdLUlldRuuUluurDldDrRdrruuuLLDDlluRluurDrDullddrddlUruUrurrdddldLrur
uuulldlddRUluluurDrrrddLLddrUruuullDDRdrUlddlUllUURDuurrDLDllddRUluuRu
ulD


Dries De Clercq & GRIGoRusha, "FemtoCosmos - GrigrComet #20"

    ####
    #  #
#####  ###
#   *$   #
#   *. * #
#@***  ###
###  ###
  #  #
  ####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.29

Solution/Pushes (Built-in)
urrRRULLrrruulDrdLddrUllluRldDRddlUUrurrdLulDrruUrrdLLdlluuRRddlllddrU
UrruulllDlluRRdDrrruulDLLuRddddlUUruulllddRRUruLrdDurrdLruuLuurDDldllu
RlddlluuRRdrrdLLddrUUluullddRluurrdDrddlUUrruUruulDDLDDrrUUdrruLLddllu
RRdllllluurDRRuLddrrruLruLuurDDlddlluuRldlluRRddrruLLdddrUUluullddRluu
rrdDrruLrUruulDDLddllluurRDrdrrULuurDlddlLuuRlddrruUruulDDllddrrrUUlDu
rrrdLLuluurDldRddLUUlldRldRddlUUruulllddRRlluurrrrrdrruLLLLdRRllDllluu
rDRRuLddddrUUluurrrddLLrruulDrdLruuuulDDlldlluRR


GRIGoRusha, "Scruple - GrigrComet #21"

  ####
 ##  ####
 # * #  #
## .* * #
#  *.* @#
#   $ $##
####   #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.08

Solution/Pushes (Built-in)
lLdLLUluuRDRDrddlUlUdrruLuLuurDDDrddlUlUUrDldRuuuulDDrdrrruulDLdlUrrrd
LullluurDldRdddrrULdlUlUlldRRuUruulDlDDrUddRdrruLrUruulDLDLrurrdLddllU
RllUlldRRRdrrULrUruulDlDLrurrdLddllURdrUU


GRIGoRusha, "Firework - GrigrComet #22"

  ####
###  #
#    ##
# * * #
# .*  ##
#**#*$@#
#      #
#  #####
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.09

Solution/Pushes (Built-in)
dlllllUUrRRUlullDRurDldDlddrUUUUrrdLullDDrdrrUdrruLdllluluurrrrDLullld
drdrrrUdllluluurrrdDuuluurDDllluRdrruulDlldddrdrRurrdLLuUUrDulLulldRld
drURRllluurrDulldddrddlUUruUrrdddLruuuluurDDllluRdddlddrUUUUrrDLullDDr
drrUdrruLdllluluurrrrDLulllddrdrrrUdllluluurrrdDuulllddrddlUUdrrRurrdL
LuuurDulllDRRuuulDDlluRddDlddrUUUUrrdddLruuullddlddrUrruuLruuulDDllDuu
RdrruulDrddddrruLdlUUUrDlddrruLuulLuurD


Dries De Clercq & GRIGoRusha, "Cros life - GrigrComet #23"

  ####
###  #
#  * ###
# $*$  #
#. * . #
#  # ###
## # #
 # @ #
 #####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.24

Solution/Pushes (Built-in)
luuuRlluurDuRDRDrruLLLulldRlddrURRllluurrDullddrUrrdLurrrdLLulllddrddr
ruUUruLLuurDldRddddlluuluuRlddrUdddrruuuLUrddddlluuluuRDDurruLruulDrdd
llluuRDuRDrdrruLLLulldRlddrURRllluurrDullddrUrrdLurrrdLLuluurDldlluRld
ddrUUrRdrruLLddddllUUluurDRRuLruulDDrddddlluUluuuRldddrddrruuuulLulDrr
ruulDrdddddlluuUUluR


Dries De Clercq & GRIGoRusha, "Non Alter - GrigrComet #24"

  ####
  #  ##
  #   ###
  #  *@ #
### **$ #
#  **  ##
#  *  ##
### . #
  #####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.24

Solution/Pushes (Built-in)
LDLDLUUdrrurrdLdLddllUURuRDrUdlllddrUluRuruulDlDDrUluRddddlUUrurrdLulD
ldlluRRRuulDruuulDDrddLddrUUUrrdLulDldlluRRRuUlDrdLurrrdLulldddrrUUruL
dddlluuRDrUlluurDDluuuurDDldddlluRdrUrrdLLuUUrDlddrruruLddlluuururDlld
ddrrururuLddldllulldRuruuruulDDD


Dries De Clercq & GRIGoRusha, "Formatur Una - GrigrComet #25"

####
#  ######
#   # . #
# $$ $$@#
##.....##
 # $ $ #
 #  ####
 ####

Author: Dries De Clercq & GRIGoRusha
These levels may be freely distributed provided they are credited with the author names.
Date: 2006.06.25

Solution/Pushes (Built-in)
ullDldllddrUluRlUluurDrDrrurrdLddLLLUlUluurDrDrDRlululldRdRddlUUUluurD
rDrRddLLUdrruulDruurrdLLddrUUdllllUluurDrDulldRdRddlUUUluurDrDDRRuLdll
ddrUluRlUluurDrDrrddLLURllUluurDrDulldRdRddlUUUluurDDurD


GRIGoRusha, "Zvezdopad - GrigrComet #26"

######
#. . ####
#$.#.$  #
#.$.$.$ #
#@.$.$  #
# $   $ #
#####  ##
    ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2007.12.20

Solution/Pushes (Built-in)
rRdrrUrruulLrrddllUdrruulDlddlluuRldlluRuurrDRDrrddLLrruullDLLrrurrddl
dlUrruullulDuullddRddRRULUlluurrDrDrrddLULrddlUrruuuLDlLuullddlddRRRUU
rrrddlULrddlUlllluurDuRRDLuluurrDullddrdrRdrruuulLDDlluRlluurrDrDLurrr
dLrddlULrddlUrruuulDulldRluullddRddRRULUlllddRRUdlluuruurrDrDululllDrd
DrrULdlUUluRddrrrurrdLLLLdlUdlUUdrrrrrrddLULLLrrrddlUruLullddRluullddR
RlUruLrrrurrdLLLrrdddlUULLdRurrddlUruL


GRIGoRusha, "The Candle - GrigrComet #27"

  #####
  # + #
### * #
#   * #
#  $*$###
### .   #
  #$.$. #
  #   ###
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
rddLDLUrruulDDlddRRUUddlddrUUlluurDDuullldRRuruulDrdLddrrdrruLLddllURR
llUUUrrDDLruulldDrddrUUrrdLLulluurrDulldlluRRddrRdrruLLddllURRuuLDuLul
ldRRDrruuLuurDDlLddrUUddrddlUUrrrdLLulluurrDulldlluRRddrRdrruLLddllURR
uuLDuLulldRRDrruuLDlluRdrruuullDDldRuuurrddLUdLdlluRRurrddLUlldRurrddd
dllUUUluR


GRIGoRusha, "Encirclement - GrigrComet #28"

  #######
  #...$ #
###...$ ###
#  ..#    #
#  $ $$$  #
#####$@$###
    #   #
    #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
URuuLLullddrdLuuurDrrrddlUruLddddrUUluuLulldddrRlluuurrdrruLLrddDrddlU
UrUrrdLulDlllluuRRurrDulldRlllddrrrURdlllluurrurrDLLrddllluuuRRdrddddl
UruuululldddrRlluuurrdrruLLrddDrUdrruLLdlllluuRRurrDDuulldlluRRlldddrr
rRurrdLLuuLLulldddrrddrrUUddlluuRURuuLDlLuRdrrdDlUdrrruLLdllllulldRRRR
RRuuLLullDurrdrruLLLrdLrrrddlUUruLLrdddlddrUUUrrrdLLuuLLrdDlddrUUUruLd
dddrUUruLdlUUruL


GRIGoRusha, "My House - GrigrComet #29"

   ####
   #  #
####$ ###
#  $ $  #
#@$...# #
## #.$  #
 # *.*  #
 #  #####
 #  #
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
urDrruLrdddRUrruulLDurrddlLulluRRuulDDrddrruuLrddlluUlldlluRRldDDRddlU
UUUruRRdddLLrruuuluurDDlldldDrrrurruuLLrrddllULURdddllluuluRRldddrrruu
lLulDrrruLruulDDrddrruuLrddlluUlLdlluRRRRdddlllUdrrruuulldRullldRddrrr
urruuLLDlLulldRddrrURuuLLrDrddllluuRurrrrdddLLuuulldlluRRldddrddlUUUUr
uRRdddLLrruuuluurDDlldldDrrrrruuuLLDLUrrrdddllllluuRurrdDuulldlluRRldd
drrRuuLDruurrddLLulLuRRuulDDrddrruuLrddlluUlllldRddrddlUUUUluRRRRdddLr
urrdLLuuuluurDDDDrruuLrddlluUluurDD


GRIGoRusha, "Big Boss - GrigrComet #30"

 ####
 #  #
 #  #####
 #  $ $ #
 #$.*.@ #
## .*.$ #
#  #$# ##
#  .$. #
#  #####
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
luLrddLUlUlDrrrrrdLddlLUURlddrruUluuLDDulluRldDDlddrUUURurrdrddllLrrru
ululldRlldlddrUrrUUllDldRuuruulDDrrddrruuLuuLrdLDrrruLdlluurDrdddllUUR
urDlllluuRDluuurDDlddDlddrUUURRddLruuRuuLDDllURlURuulDDrddrruuLrddlluU
rrdrrdLululldRdlldlddrUrrUUllDldRuuruuluurDDlDDrrddrrUUruuLLLDDlluRluu
rDrrrrddlLLrrruulDrdLuullllddDlddrURRUdllUUUUruulDDDDDldR


GRIGoRusha, "Star forces - GrigrStar #1"

#########
#   #   #
#   $   #
## #$# ##
## # . #
#..*+*$#
#  $#  #
###    #
  ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.18

Solution/Pushes (Built-in)
LrurruulLLulldRddDrrurruullLulDrrrrddllUdrruulLLulldRRRdddlluUddrrurrD
LddrUUUlluululldRdddrRurDrddlllUdrrruuulluuLulldRdddldRuRRurrdddlllUdr
rruuulldLrurrdLrddlUUddlluuRuuuLulDrrRurrdLDDLDlldlluRRRUrruuLLLulldRD
DDrddrrruUUlldllldRuuuuRRRurrdLLLLulDDDDrrurrUdlldlluuurrrurrdLdddddll
lUdrrruuuuuLLLulldRdddldRuuuuRRRurrdLddlldLLrrurrdLrddlUUruuuLLLulldRd
ddrRlluuuRRRurrdLLLLulDDDuurrDDuurrdddddlllU


GRIGoRusha, "Space rocket - GrigrStar #2"

  #####
  # . #
  # . ##
 ##$.$ #
 # .*..#
## $#$ #
# $ @ $#
#   #  #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.19

Solution/Pushes (Built-in)
rUruuLrddlULUdrruLddddrUUluuuulldRurDDDlUrdDrddlUUdlldlluRuuRUrrrDDldl
LdlUrrruruullldDuurruullDurrddrddlUddlLuuRuUddlddrruruuLDllddrrdrUUdll
ldlluRRuulDrddlluRdrUluurrruullDurrddlUrdDrddlUUdLLdlluRuuRurrrDDldlLd
lUrrruruullldDuurrrddlUddlLuuRlddrruruuLDllddrrdrUUdllldlluRRuulDrddll
uRdrUluurrrDrddlUUdLLUluRdddlluRdrUU


GRIGoRusha, "Milky Way - GrigrStar #3"

 ######
 #.   ###
##*## $ #
# *   @ #
# .*#$  #
##    ###
 #  ###
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.09.18

Solution/Pushes (Built-in)
lllDlluRRRRuulllDurrrddlldlddrUrrUUllDurrddlLulluRuurrrDDlLddrrUrruuLD
LddlluuRRlldlluRuurrrDDlLdlUrrrurrdLLLLddrrUdlluurRlldlluRRdddlUruulld
RdrrruuuulllDDrDulldRdRluuuurrrddLLDlUUdrrrurrdLLLLdlddrUluUrrrddLLdlU
rrruullDurrddlLuurrrrdLulllddrrUdlluulldRurrRurrdLLLLrrddlldlU


GRIGoRusha, "Big L - GrigrStar #4"

    ####
    #  ###
##### $$ #
# $ $  $ #
# #.# #$ #
#  .  #@ #
###.  $$ #
 # .###  #
 # .... ##
 ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.10.09

Solution/Pushes (Built-in)
DruuuLDrddlLLuuuRluurDldddlldddrrrrUruLruulDruuuLDrddddldlllluuurruuuR
ldddlldddrrrruruuuulLulDrrruLLrrdddddldlllluuurrdLuluuRRRurrdddddldlll
luUUlluuRRDullddrRdddrrrruruuuuulldlLLrrrurrdLrddlUUrddddlUUdddlllluur
rRllluuurrDDuuRuulDDlldddddrrrruruuuuLruLrdddlUUrddddlUUdddlllluurRRll
luuurrDDLdlUdddrrrruruulDruuulDrddllLuuuRluurDldddlldddrrrrUruLruulDru
uuLDrddddldlllluuurruuuRldddlldddrrrruruuuulLrrddddldlllluuurruUddllll
uuRRDullddrRdddrrrruruuuullldddLruuuruulDDrrruLrdddlUUrddddlUUdddllllu
UrrRlllUlluurrRRDDuullllddrrdddrrrruruulDruuulDrddllLuuuRluurDldlllldd
rrdddrrrrUruLruulDruuuLLrDrddddldlllluuulluurrrrdddLruuullllddrrDDldRR
RlluurruuuRurrdLrddlUrdddlULLLruuullllddrrDDldRRluurrrrruulDrdLLLLruuu
llllddrrDDldRuurrrrruuuulDDDrdLLLLruuullllddrrDDurrrruuuululDDDDuuurrd
dddlLLruuullllddrrDrrrruuuLulDDDLruurrdddlLL


GRIGoRusha, "Flower - GrigrStar #5"

    #####
#####   #
#     # #
# $$#*. #
##$@.* ##
#  $*. #
#   #.##
###   #
  #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2005.10.18

Solution/Pushes (Built-in)
DurRdLruUrruullDllDulldRDRRdrrUdllullDRurRdddllUUluuurrrDDlLUdrruuurrd
dLruulldlLdddddrruULulDrrrULdlluuurrDDrdLuuulldlluRRdddlUrRRdddllUUddr
ruuuuuurrddLruulldDDlLdddrruUrULuuurrddLdlUddddlluuRlddrruUlllldRurrrd
dllUdrruulLrrruulDrdLddlluuuRRurruullDDDlluuRlddrrurruullDllddrrDrUlll
dRldlluRRuuulldRurDlDRRlddlluRdrUluR


GRIGoRusha, "Two Life - GrigrStar #6"

 #########
 #  *.#  #
 #$...** #
 # .#.#. #
## #     #
#  $ #   #
#@$$$$ ###
#  $ # #
####   #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.03

Solution/Pushes (Built-in)
uruururrddrrruuulDDrddlluluuRlddrddddlluURlddrruUUrruulDruuulDllddlDDu
uruulldlddlddrURRuuruulldldDldRuuururrddldLruruulldldDlddrUUrrdLruurRd
dLLrrddllUdrruuuulldlllddrRURuurrddddllUllluRdrrdrruuuuluulldlDDlddrrr
URlddrruUlldllluuruururrrrrddLUruLLLddRllDDrrUdlluuruurrrdddLUruullldd
lddrrddllUUdllluuruuruRRddRDrruLUddlDlldllluuruururrddlDurRluulldlddRD
RddrrUUUrruulDruuulDLLddlDllldRuuuruulDDDDrruruuuLrdddldlluuurRurDlllu
RRdrrrrddlUruLLLLullddrUluRlddddlddrUUrrurRddddlluLUluUUrurrrrrdddLUUd
llldLddrdrruuUdddlluluururRdrruulDruuulDlllldldDrddrURlluluururrrrrddl
lllDldRullldRuuuruulDDDDrrurrrUruLLLLrrrddlllddddrruUUdddlluuuurRlldll
uuuurDrrrrrdddLUUruLLLLrrrddlllddddrruuUdddlluuuurRdrUUruLLLrrddlllddR
lddrruUUdlluurRdrUUruLLrddllldlllddRURRRlddrruUUdlllldRuururRdrUUruLdd
dldddllUluRRlddrruUUdlluurRddllllluRRdrrrurUUdlllDldRRlddrruUUdlluurRd
rU


GRIGoRusha, "Tonus - GrigrStar #7"

#########
#   #####
# #     #
# #     #
#***## ##
# *. #$##
# *#  $ #
#.*.  $ #
# @#    #
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.08

Solution/Pushes (Built-in)
luRRRdrrruuLUUUruLLrddddrddlUUddlluRlllluuRDldRRRuuLrdddrrruulUUUlllDu
uullddDRDDldRuuuluuurrddrrrdddrddlUUddlluRluuLUlluuurrdDrruLdrrruLLdll
DllDDrdRRdrrruulUUddrddlllulluluurrurrurrdLdddrddlllulluluuuuurrDRRllu
lldddddrddlUUdrrrdrrruuluuuLullulldddrDDldRuuuluuurrdrrdrdddrddllluuuL
ulluuurrdDDlDDlUUrruurrdrruLLrddddrddlUUddlluRluuLullddrUldddrURRuullD
ldRuuruuuulldDDDrruuRRuLdlddlluuuurrDrrrrdLLullullddddrrrdddrrruulUUdd
rddlUUddlluRluullluuuurrdDDuuullddddDrdRRuuLrdddrrruulLrrddlllulluluuu
uurrddddrDrrrddllULdrrruLdlluuuluuuulldddRluuurrddDllddrddlUUUUrDDuuru
urrdLurrrdLdDDrddllluuuLullddrUldddrUluurrrddLLrrdrrruuluuuLullDDuurrr
ddddrddlUUUUdddLLLruRluLuuurrdLulDDuurrrrdLddDrdLLLrruuuuLLulDuulldD


GRIGoRusha, "The Cup - GrigrStar #8"

    ####
#####  ##
#  $@$  #
#  $$$#.#
## # ...#
 # # ...#
## #$# ##
#   $  #
#   ####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.09

Solution/Pushes (Built-in)
LrRDDlUdrrruuLulDrrdddlddlLUURlddrruUddllLdlluRuuuuRuRRDLDDrrddllUUUUr
DldddrruuruLdddlluuRluurDrDulldRurruuLulDDurrddlLdlddLdlluRuuuuRuRRdLr
ddlUrrrdLulldddrrUULulDruuulDrddrddllLdlluRuuuuRurrdddrddllLdlUrrrruul
lDurrruuuLulDDDuulldRurDlllluRRdrrurrdddlddlLuuUdddrruuruuulldLddRluur
DuurrddLDruuulldlddRluururrddlLulLuRdrddlUrrrdLruuululDDulldRdRRdrUlll
uurDulllldRRRdRRlldddrrUUddllLdlluRUUUdddRRuuRRddLLuuuuurDDldRuuulllld
RRRurDDldddLdlUUUUdddrruuuuullldRRRurD


GRIGoRusha, "Tabu - GrigrStar #9"

#####
#   ######
# $      #
##$# $$$ #
#  ## $ ##
# $  .#.##
#  #..*.@#
##   .*. #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.10

Solution/Pushes (Built-in)
lLLdllluluRddrrruuuUlululldRDDlddrdrrruuuuluLulDrrdrdddrruuULuLDuLLull
dRRRdrrrdddlldllluluurUdlddrdrrrurrdLruuuullDDuulululldRddlddrURRllddr
rURULdrRdrruLLruuullluLulldRdDlddrdrrRRuruuullluLulDrrdrrrdddldlluurUR
uuLLdRurDullLulldRRRdrddlddlluluurUdlddrdrrrrurrdLLLLuuruurrDDuulllulu
lldRddlddrURRddrruLdrrruLuuulldDlllddRRRRlllluurrrDuuuluLulldRdDldRddr
rRuuuuluLulDrrdrddddllluuRRllddrrruUURurDDuuluLLdRurDullLulldRDDldRRRl
luuuRRdrdDDuuuruLLLulDDDldRRRlluuurrrddDuRurDuruLLLLLulDDDldRRR


GRIGoRusha, "Tort - GrigrStar #10"

  ####
### @####
# $$    #
#  $ #$$##
#  ##  $ #
## #   $ #
# ...*#  #
# ....  ##
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.12

Solution/Pushes (Built-in)
ddLruulDrrrDDldldlluuluuRDDDDrrururuulldLrurrddldlddrrruruuLrddlULUdrr
uLdddlllluluuluurDDurruulDrdLurrrrDDrddldllluuRuRUruLddldlddrrruruuLrd
dlUUdddllluurRllddrUlllldRRuruRuRuuLLulDllddrDuluurrrrrddldddrruruuLrd
dlULUlDrrruLdllldldlluRuuluurrrrrrDDrdLuuullllllddrdddrRuuruRldlddlluu
uluurDDuurrdLurrrrdDlUruLddrrddlUUlldRllddRUluRddllluRdrruuuruuLLulDll
ddrDuluurrrrrddldddlllluRuuluurDDDDldRuuuuurrdLulDDDDuuuurrrrddrrddldL
LuuuruurDldldddrruruuLrddlULUlDDuurUrDrdLLulDrruuuLLLulDrdLulDDD


GRIGoRusha, "Tamerlan - GrigrStar #11"

      #####
#######   #
#   ##  $ #
# .... # ##
## #$ #@$#
 #  .*** ##
 ##$# # $ #
  #       #
  ##   ####
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.12

Solution/Pushes (Built-in)
DrDrdLLUdLdlluRuUllluurrrDulllddrrUruLrrururrdLdDDDldLdlluRuUluurruRur
rdLddddldLdlUrruruulDLLLuurDldRuuruRurrdLddddrdLLLdlluRUURRllddRRUrrdL
LLdlUrrruUUlDDrdLuullluurruRurrdLDDDDulllluurruRurDDDldllUdrrddLdlluRU
UrrddLdlUrrurrdLLuuurDlllluuLulldRddRRRRRddLdllulUdrdrruruullluuLulldR
ddRRuuLrddlddrdrruruuuruulldLLddRUdllddrdrruruuuruulldLrurrddldddrruLU
UUddddlldlluluurrRRllllddrRUdlluurururururrdLddldlLddRRUrrdLLLdlluRuuu
uruRurrdLddDLddrruLdlUdLdlluRuuuuruRurDDDDDldLdlUUUUdddrrurrdLLLdlUU


GRIGoRusha, "Tramplin - GrigrStar #12"

   #####
  ###  #
  #   $##
 ## # $ ##
 #....#. #
 # #$**..#
##  $@$  #
#  $###$##
#       #
#  ######
####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.14

Solution/Pushes (Built-in)
LLrrUUllldDDlddrUrrrrrUULLuulllddDldRuuuurrrddLLrruulluurrDDllldDrrrrr
ruuluLrdrddlllllluuruurrurDlllddrrUdlllddrrrrrruuluLuLrdrdrddllllllDld
drURUdlluRuuurrrUrrdrddlddllLLrrrruuruulDDllURdrruulullDlllddRRRlURuur
uulDDrrdrddlULLdllluuruuRRdrrDrdLuullullddldddlddrUrrrrrUUruulullulldd
lddDldRuuuuruurrdrrdrddlLLLLrrrrruululluurDlllddldDrrruUUdddrrruuluLuL
DrrdrddlllllluuruuRlddlddDlddrUUUUdrrrrrddlllLrrrruuruulullDLrurrdrddl
llUdrrruulDLdlllldlddrUrrrrruUluRdlllURdrruuullDuruulDDrrdddddllllUdll
uRuRRRRllllddrrrrruUUdddllllUluRRRRlllddrrrruU


GRIGoRusha, "Cosmos - GrigrStar #13"

#### ####
#  ###  #
#       #
#  ### $##
##$$+*.$ #
## #**.$ #
#   ..#  #
# # #   ##
#   #####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.14

Solution/Pushes (Built-in)
DRddrruruuLUdrddlULrddlluLLddlluuRuUUluurDrrrrdDurDrddldlluluuRDldLddl
luuRuuUluurDrrrrdrdrddlULLrrddllUlLddlluuRuuUluurDrrrrdDuullllDDRRRlll
uurrrrdrDrddlUddlluURULdddrruruuLrdLddllulLddlluuRUUUluurDrrrrurDDDrdd
ldlluuuRUruLddldddrruruuLrddlULUUrDrdLddllulLddlluuRRluurRRDuRurDrddlU
LuuruulDrdDrdLulllllUluurDrrRRurDDDlllllUluRRRRRDrdLLrrrddlUruLLuuurDD
DrddlUruL


GRIGoRusha, "First Goal - GrigrStar #14"

    #####
 ####.  #
 #  .*  #
 #  #+ ##
 #$$**.#
 #   $ #
## ### ##
#    $  #
#   #   #
#########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.01.15

Solution/Pushes (Built-in)
rddddLLLdlluRuurUUluRdddlddRRRdrruLuuLLrruulDruuulDrdddddLLLdlluRuuUrR
dRluluuRRurrdLddDlluRlluurRDullddrdrrULuullddldRRluuurrddLdlUrrrdLLruu
uurrdLulDDDrUdlllldddRRRdrruLUUUluuurrdLulDlllDDrrrrUdlllluurrrDrddddL
LLdlluRRRRdrUUUULuulllddDDuuuurrrddrdddllldlluRuuuuurrrddLdRuuuurrdLul
DllldddRRurrUdlldllddRRRdrruLuUUlldRurDlllluuurrrDuurrdLulDlllddRdrrru
UddlllluuurrrurrdLdddllllddrrRdrruLUUUUUruLddddllllddrrRdrUUUllluUluR


GRIGoRusha, "Toporiki - GrigrStar #15"

    #####
#####   ##
#  #   $ #
#  # $$$ #
#$$   #  #
#.* ##. ##
#@*.... #
######  #
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.06.19

Solution/Pushes (Built-in)
RluRlURuulDDrddRRRRururuuLulldlddLruururrdrddldldlllluUrrrUdlllddrrrru
ruruulDLLdlllddrrrrurUruulullDlDururrdrddlUlLuurrDrdLddlddrUUdllllluur
DldRuulluurDDrddllURuulDrddrRRRurUruululldddLLDldRluUluurDDrrruulDruur
rdrddlULLuurrDrdLddlddrUUUruululldddLLddRRlluurruuurrdrddldddlUlllllUR
lURuulDDrddrrrrruuruululldddlLDldRRRllluUluurDDrddllURuulDrrrruulDrdLL
DldRRlluUluurDDrddllURuulDrrrruuurrdrddlULLulDrdLLDldRluUluurDDrddllUR
uulDrrrruuurrDrdLLLulDrdLLDlUluurDDDurrruuurDrdLLulDrdLLdlUluurDD


GRIGoRusha, "The cluster - GrigrStar #16"

  ########
  #. ##  #
  #...   #
 ## .##  #
 # $.$ $##
## ##$#@ #
#    $ $ #
#     #  #
##########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.06.22

Solution/Pushes (Built-in)
UUruLdddrddlUlLLLrrrrUUUruulDLLLddRDuluurrrDDDrddlUlLuuluurrrddDrdLuuu
ulllddrRlluurrrdDDrddlUUUllddRldlluRdllluRuuRldddrruLdlUrrRuurrdrddlUL
LLLrruurrDrdLLLrruuUruulDllldldRRddrruuUruLddddlluuRlddrruUlldddlluRRd
lllluRRdrruuulllDurruuulDDrdrrrUruulDLLrrDDllluluurDrrrddDrddlUUUUruLL
LLrrrddllddRluurrdrddlUUUlldddlluRRRllldlluRuuRuUddlddRRRuurrUruLLLLrr
rdddrddlUUUUruLLLrrddllddRluurrdrddlUUUUruLL


GRIGoRusha, "Whirlwind - GrigrStar #17"

 ########
##  ..* #
#  #... #
# # .#.##
# #   $##
#  $  $ #
## $##$ #
 #$   $ #
 #   #@ #
 ########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.06.24

Solution/Pushes (Built-in)
ruuuLUlldLurrrdrddLLLdllURUUrurrdrddllLdlUrrrruulDuulldRluuuulldldddRR
RuuurrruLLdlddrrUdlluururrdLLrddlldllluuururRDDlDRdLruuurrddDrddLLLdll
uRUUruuurrdddrddllLdlUrrrruulDuuuulldddRluuuulldldddRRRuuurrddDrddLLLd
lluUddrrurrruulDuuuulldddRluuurrddDrddLUUlluuuulldldddRdddrruRldlluuul
uuururrdrruLLddddrrUUdddrddlUlldlluuuRRuuuurrrdLdddDuuuuullddddRluuuur
rdddDrddLUUlllldddrruRldlluuurruulDrdrrrdddlUlldlluuuRRuuuurrdLulDDldd
ldddrrurrruulUUddrddllldlluuuruuruurrrdLdddrddlUUUUUruLddddddlldlluuur
rUUddRllldddrrurruUUUUddLdlllddRRRllUluRRUrrddrddlUUUUUdlldRllddrrruUU
dllllluuuruR


GRIGoRusha, "Korona - GrigrStar #18"

 #########
## .     #
# .*.$ $ #
#...### ##
#.. $@$  #
#.# $$$$ #
# ### $  #
#     ####
#######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.06.27

Solution/Pushes (Built-in)
LLuluurrdLurrrdLLurrrrdLddrddlUULLDRurUULullllDldddddrrrrURuuruuruLLrd
ddlddldlllluuuuururrdRRurDlllulldRRRRurrdLLuLLdllldddddrrrruruurUdlddl
dlllluuuuurrddRRDulldRRlluuullddRluurrrurrdLLurrrrdLLrddLLdllUlluuruRR
RRdrddllLLrrrruululllldldddddrrrrUUddlllluuuuururrrrdrddlLdlluLrdrrddl
llluuUrrdrrurrrddLLrruullldllulldddrrrrUrrruuluululllldlDDuururrdLurrr
drddllLLLrrrrrrddlUruLLLLLULrdrrrruulullllDurrdLurrrdLrrruLLLLrrrddddd
lUruLLLdlUUdrrrddlUruLLdlU


GRIGoRusha, "The Flame - GrigrStar #19"

#####
#   #####
#    $  #
## #..  #
#  .*#$ ##
# # *+$  #
#  $.* $ #
##  ######
 ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.01

Solution/Pushes (Built-in)
LUlluurrRlllddrrddLUruUruLLulldRddlddRdrUruuurrrddLUddLLuRdrUlluuuLull
dRddlddrRRuuuuLulDrrddddllluurRDrrrruuuLLLdDldRulllddrdrUruuuurrrdddld
LLrrurrdLLruuuLulldddRRdrUllluuurrdDuullLulldRRRddllUdrrddLUruuululldR
ddlddRdrUruuuuLulDrrddddllluurRDrrRuuuLLdDldRulllddrdrUruuuurrddddLLuu
uuLulldRRRddllUdrrddLUruuululldRddlddRdrUruuuuLulDrrddddllluurRllddrrr
rruuuuLLdDuurrdLulLulldRDuRRRdrdddrruLdlllllluuRuurrrdrrDullulllddlddr
rrrrUUruLdddrUdlllllluurRDullddrRRRRuuuruLLLLulDDurrrrddddllllluuRuurr
rrdddrrdLLLruuurDDrdLL


GRIGoRusha, "The Bend - GrigrStar #20"

     ####
  ####  #
  #  $  #
  #  $  #
### .## #
# ...## ##
# $$.$ $@#
# .###   #
#### #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
dlUUUUluurDDlLLuRdrruulDllddddRRdrruLuUULullddddrRdrUlllulllddrUluRRld
RRRRdrruLLLLLuuruulDDDllddrURRUUddllluRRdrRRdrruLLLLLuuuurrrdrdDuulull
lddrUldddrrrdrruLLLLUluurRururDDDDuuulldlluRRlldddrUUluRddddrrdrruLuuu
LLLdddrRdrUlllulllddrUluRRldRRRRdrruLLLLLuururrrdDuullldldlDrrrrdrruLu
uulllulDDurrrrdddLLLUUluRdddLUlldRRRuuulDrdLdrRRdrruLuuulLLulDDurrrruu
lDLdlluRRlddddrRdrruLLLrruuuLLulDDurrruulDrdLLulD


GRIGoRusha, "Four - GrigrStar #21"

   ######
 ### . .#
 #@$ .#.#
##$#$...#
#  $ ##.##
# #   $  #
#  $ $ $ #
#   ######
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.06

Solution/Pushes (Built-in)
RRurrrddddLLLuUdddLdlluuurRlldddrruUrrrruulllDLdRlddlluRdrUruuurrrddld
LLrrurrdLLruuulllddRRdrUllldRRllLdlluRRRuulDrdLruuurrruulllDDDlddrUrrr
UUlllDldRlddlluRdrUruuurrrddldLLLdlluuuRRlldddrrurrruruulllullDurrdrrr
ddldllldlluuuRuurrurDlllddldddrruruUUdddldlluuurRlldddrruUddlluRdrUrrr
urrdLLLLLdlluuuruurRurrrDDDuuulllddRUlllddldddrruruUUdddldlluuuruurRuR
DlllddRlldddrrurrruLdrrruLuuuuLrdddddlluRdrUUUUddddllllURRRdrUUUddlllU
UdddldlluuurRluurRdDlllddRdrUURRRdrUUddlllllluurRluurrdDldRRRdrU


GRIGoRusha, "Travel Art - GrigrStar #22"

  ####
 ## .#####
##  $  @ #
#  #$# $ #
#....# ###
# $ $ $#
##  ## #
 #  .  #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.09

Solution/Pushes (Built-in)
lddDlLullDurrdLrrruuulLDDldddrrrUUlLulDulldRurrdrrddllllUUluRdddrrrruu
llLrrrddlllluUluuruRurDDDuurrdDDlLuuurrrrdLullldddrruUddlluuulldlddrdd
rrrrUUlluuurRdrruLLLLdddrrUUddddlllluuluurDDuuuRurDrRdddllLrrruuullDDL
ruurrdrruLLLrdddddlllUURuuUlldlddRluurDRluurrrrdddddllluUddrrruuLLULDr
rruuulllldlddRluRuurrrrdddddllllUURDulluurDuurrrrdddlLuLDrrruuullDulld
lddRRuLdddRUUluuurrrrdddlLLdlU


GRIGoRusha, "MacroCosmos - GrigrStar #23"

   #######
 ###@#   #
 # $ $   #
## #$## ##
#   ..* ##
# # .*#$ #
# # #.*  #
#     #  #
##   #####
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.21

Solution/Pushes (Built-in)
dDDuuRRurrdLddLLLuurRurDlllddLdddlluuuRuuRRddrDLuuullddRDDuuluurrRRurr
dLLLLdDrrrUdlllllldddrdrrurUULulDruuurrurrdLddDrddlULrUUlLdlluRuurRurr
dLDDDrdLuulLdlluRuurRurDDDlLdlUllldddrdrrurUUlluluuRRRRurrdLddDrddlULr
UUlLdlluRRllluurrDullddrRllldddrdrrurUdlLUUruuullddRluurrrRurrdLDDDrdL
LruuuuLLLdDllldddRdrUUUddlluuurRluuRRRRurDDDDrdL


GRIGoRusha, "Up-Down - GrigrStar #24"

 ########
 # @##  #
 # $##$ #
 # $    #
##$##$# #
#  $  # #
#  #.   #
## ...#*#
 ##. .  #
  #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.31

Solution/Pushes (Built-in)
lddRRRDDDuuulllDDRRdrrruuuLLdDldddrrrUUlLDurrddlLuuuuurrdDDllullluurRR
llluurDldddrrruulLrrddddlllUluRRRDrrruuuLLdDuurruulDrddddlLddrrUUllull
lddrdRRuuullluUruulDDDDrrruuLLrrdddddllulUluRRRllddrdrruLrurrUUULLdDlD
RddlUruulllddRluuuUruulDDDDrrruuLLrrdddddllulUluRRRllddrdrruuUllluUruu
lDDDDrrrdddllulUluRuurrrrrdddddLLLrrruuuuullDDDDLruuuulllddRRDulluurrr
dDDuuuruurDDDDDLL


GRIGoRusha, "Many Angles - GrigrStar #25"

     ####
######  ##
# $  $$  #
# ...  # #
##$ ##   #
 #...$$$##
 #.# $   #
 #.  # @ #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.31

Solution/Pushes (Built-in)
luULLddlluuRuurrrDrruululDLrrrddllUlllddlddrruRRdrruLLUUrDllLddlluuRRR
RdLrdrruLLullluurruRDDrDuruuLulDldlluRRdlllluRRdddlUruulldRurDrruLdlld
drrrRurruulLrrddllUllllddddrrUdlluuuurrrrddlLrrurruululDDlluRdlllddddr
ruuLUluuRRdLddrddlluUrrrrdLrdrruLLullluurrrDrDululllddrrRllllddrrUdllu
uruuulldRurrdrrddlLddlluuUdddrruuLulDrrrrurruululDDllullDRddlUdrrddllU
UrrrrdLrdrruLLullluuurRdrDrDulululldddrrRllllddrrUdlluuruuulldRurrrdrd
dlLddlluuUdddrruuLrrrurruululDlllDRullldRdDDurrrrddrruLUllllluuurrdLur
rrDDuurrddLdLLLLUlDrrrrrddlUruLLLLrrrruruulldLrDrdLLLdRurrddlUruLL


GRIGoRusha, "Overturn - GrigrStar #26"

    ####
 ####  #
 #  #$ #
 #   $.#
 #  #$.#
###$. .#
#  $.# #
# #$.  #
#  @####
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2008.01.24

Solution/Pushes (Built-in)
lluurRllddrrUrULUUluurDDDRddrruuuuLLrrddddlluuRlluluurDrrrdDlllUluRddr
ddlUddlluuRRUUluurDDDrrruulLrruulDrdddlllDllddrrUrULuuluurDDDRddrrUUUU
LLrrddddlluuRlluluurDrrrdDlllUluRddrddlUddlluuRRUUluurDDDrrruulLrrddlU
ruLddllDllddrrUrrrUUllDLddlluuRRuuluurDDDrruuLrddllDllddrrURUdldlluurR
uuluurDrrddrddLruuluurDluuurDDlllDDDllddrrUUUUluRRR


GRIGoRusha, "Good House - GrigrStar #27"

    ####
#####  ##
#    .. #
#   #.# #
## # ** #
 # # ..###
## #$$$  #
#   $@$  #
#   ######
#####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2008.01.25

Solution/Pushes (Built-in)
LLdlUrrrRUrrdLLLLURdlLdlluRUUUUrurrdDDDldLdlUrrurRdLLruuuuurrddLruulld
DDDrUluuurrddLruulllldlluRRRRdDrddlldLdlluRUUUUrurrddrddlldLdlUrrurruu
lDurruuLulDlldlluRRRRDDrdddLLLdlluRUUUUrurrddrdddllLdlUrrrruuullDDuurr
dddlLuuRurruuLulDlldlluRRRRDDrruuLulDrrddllldddrruUddlluRUddrUdrruLLdl
UdlLdlluRUUUUluRRRRllldddddRRurrdLLLdlUUUUUluRRR


GRIGoRusha, "Infinity - GrigrStar #28"

   ####
####  ###
#       #
# .*#$  #
##$.* $##
# .*.$ #
#  ## @#
#  ##  #
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2008.01.30

Solution/Pushes (Built-in)
uUlDruUruLLLLDlluRRldDDlddrUUUUruRRDrddllLrrrddlUruuululldldDrrRllluur
urrdrdDlllUdrrruulDLdlluuluRRRurDDrddLLuRuullldddRluuurrrddlLdlUrrruul
lDurrdrruLdlddrUllLuururDDullddrRuulllldRurrrddlldlUrrruullDulldRdRluu
rDlddlddrUUUUrurrdddLLUlDrrruLdlluuluRRRurDDurrdLulllldddrrrrULdddrUUl
llluuurrrDDDllllddrUUUdrrrrddlUruLLLrruuurrdLulDDDrddlUruLLrrUluurrdLu
lDDrdL


GRIGoRusha, "The Third Heaven - GrigrStar #29"

 #######
 #  #@ #
 #  $**#
 #  #..#
## $$*.##
#   #. .#
# $ $   #
##   ####
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2008.01.31

Solution/Pushes (Built-in)
rDDDDldLdllUUUUrDldddrruLrruruulDruuulDrddlLLuuRRDrdLrdrdLLLdllURRRUru
ulullddDuuurrdrddlUddldlluRuuRRddLdlUrrurrdLLuulluurrDrDLuuurDDldddrru
LdlUUUrDuuulDllddRRUruLddddrruLdlUUUrDldRuuuulDDDlluuRlddrrrddlLdlluRU
UrrrddlLdlluluRddrrurruuuuulDllDlDRuuulDDurrrrddddlldlluRUUUluurDrrrdd
ddlLdlluluRUUdrRRUruulDllDlddddrrurruUddlldlluuuRRRllldddrruLUluRRluuu
lDDrddlldRdrUUUUluRRRllldDrddlluRdrUUUluRR


GRIGoRusha, "Choice-Point - GrigrStar #30"

 ####
 #  #####
 # .... #
 #$.# . #
 # .#$.##
##$# $  #
# @  $  #
# $$$ ###
#    ##
######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
rruRldlllddrrrUrUrUdlLuRldddllluurRllddrUluRddrruruulDrrruLUUlullddlDD
RRuRldlllddrrrUrUrUdlLuRldddllluurRllddrUluRuuruulDurrrdrruLLLLdlDDDld
drrruruuUUdddrruLdldldllluuruuururRddDlDRuuuullddlddRRuruurruLLdddldll
lddrrrUrUUddldllluurrRddllUluRuuuruulDDDDDlddrrruuurrUUluLrdrddlldddll
luuruuuuurDDurrdrruLLLrrdddlUUddlddrUUrrdLullddrUlddllluuruuuuurDldddd
RRuRUruuLLrrddlUruLdddlddrUrUUUdddlluRdrUUddllddllUluRRRdrUluRdrUllddd
lUluRRdrUUUU


GRIGoRusha, "JigSaw - GrigrSun #1"

     ######
   ### * @#
  ##  * $ #
###  * #  #
#   . *  ##
# #***##  #
#   *     #
########  #
       ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.
Date: 2006.07.01

Solution/Pushes (Built-in)
lDlLdLdlluRdrRuurrDDDrddlUlllLLUdrrrrrUUUruulDllddllDurruurrDDDrddlUll
lUluuuRRddLddrrrUUUruulDDDLLuuRllldRDrrrDrddlUlllUlldRRuUrrruruulDllll
dlDllddRRUrUdldlluurRdrrdLLrruurrrUruulDlllDDrrrUruLLLDldRuurrddDrddlU
lLLUlluuRDuuRRddLddrrrUULLuulldldddRRRRlllluullddRRuuururrdLDLLddRUluu
RurrddrrUruulDLLuRldddrrUruLLulDDLdRuurrdddrddlUllLUlluuRDuuRRddLddrrr
UUUruuLDDDLLuuuRldddrruuLulDDulldRlldddRRuULrddlluRuulDrddllluuRRurDuu
rrrrddlLLrrruullDurrddDrddlUlLLrrrUUUruLLrruL


GRIGoRusha, "The Drift - GrigrSun #2"

    #####
    #   ##
#####$   #
# $ $ $  #
# .$ $@# #
##..$ ## #
##.# $   #
# ..#$ ###
# ...$.#
########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
UrrdddllddLLLuluuuRuRRRlllddRUlldddrdrrruurruuuulullDRddLUdLdlluRuRRdL
ulDldddrdrrruurruuuuLullDurrdLrrddddllddllluluuurrrrULdllldddrdrrruurr
uuuulullDDuurrdrddddllddllluluuuruRdllluRRlddddrdrrruurruuuululldRddLL
LulldRdddrdrrruurruuuuLulldDLLrdddRRddllluluuuRurDurrdLulldldddrdrrruu
lUULuRdddlULrruullDurrdddrddlllulldRRRRUUluUllDDuurrruuurrdLrrddddLLdl
dlllluRuuurrrrUdllllddddrrrururruuuulullDDuurrdrddddlldldllluuuuruRdll
ddddrrrururruuuulLddLLdLruulDlDDDldRRluuuurrdLulDDDldRuuuurrrruLruulDD
rdLLdlluRuRRdLulDlluRRdrrrUluurrdLulDDrdLLLulDDDDuuuurRdrruulDrdLLLulD
DDuuurrrrurrdLLulDrdLLLulDDurrdLrdRUluurrdLulDurrrrdddlLdlUULuurrdLLL


GRIGoRusha, "Query Mark - GrigrSun #3"

######
#    #####
# ##$$ $@#
# #   $  #
#...#$ $ #
## .  #  #
 #..  $ ##
 #.##$###
 #.   #
 ######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
dddldLLulluurrRlllddrrUruLddllldddrrrUULLrrddllluUrrrrruruuLDlluRldDDr
rUruLLulDDlluuRldlluuurrrDullldddrrdrruruuLDrdrruuLDrddldlLulluuRRlldl
luuurrrDullldddrrddlUrrrdLulldddrrrUdllluuurrdLuuuRuullldddRluuurrrddl
DururRDrrddldlLddllluUURuurRluullldddRddddrrruuLLrrrruruuuLLLdDDuullDl
luuurrrDullldddrruRurrrrdddldlLddllluUUdddrrruuLLrrrruruuulllDDDuulldL
rurrurrrdddldlLddllluUUdddrrruuLLUlDDurrruuuurrdLulDDDuurrrddldlLLLulD
rrrrruULulDDurrddlLLLrruLrurrruLLulDDDurrddlLL


GRIGoRusha, "Kenya House - GrigrSun #4"

   #####
 ###   ##
 # ...  #
## *.*# #
#  #*.$ #
#  $ $ ##
# $ @#$#
## ### #
 #     #
 #######

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
uUULulDurRurrdLLddrUluurrdrddLruulullddllDlddRddrrrruUUdddlllluuluurur
rddRUluuurrdrddLLrruulullddlldlddrddrrrruuUdddlllluuluurDDuuurruurrdrd
dLdllLrrruruulullddDuuurrdrddlLrruulullddlldlddrUrRUUllDldRuurrdrrruul
ullDurrdLrrddllULdrrruulullDurDrrddlddddllllUUluuruuRRllddlddrUUddddrr
rruuuullddLruurrddddlllluUluurDDrruurrruululldllDDuurrurrdLLrrrddllUdl
UdddllluuruRRdrrruulullDRlDlldlddrrruUrULuurDlddddllluurDRdrUllldRurrU
rrddddllllUUluRdddrrrruuuullddLruurrddddlllluUrruRurruuLulldRDDlUdddll
luuruRRdrrruuLullDRlDlldlddrrruUrULuurDlddrrruuLulldddddllddrrrruuULul
uuurrdrddLddddlllluurrUUUdddllluurDRdrUUdrrdddlllluUluRRdrU


GRIGoRusha, "Zikozavr - GrigrSun #5"

    ####
#####  ###
# $   ...##
#@$ $$.#$ #
##$## ... #
## ##  #  #
#  ###### ##
#     $    #
#  #####   #
####   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
uRRRRurDrrDulllDulldRullldRDDDlddrUUUUUluRRRdLulDDDDlddrUrrrRRRdrruLuu
uulullLLLdlddDlddrUrrrrrRdrUUUlUllULulldlluRRldddDldRRRRRRRdrruLuulull
ulLLulDrrrrddlUruLuurDrrDrDLuulllddrUlLLulldRRRRlllDDDlddrUUUUUddddrrr
rrRdrruLLLLLLLrrrrrruUluurDDDuuululLDlddrURllullldddlddrUrrrrrrdrruLuu
uulullDldRuuulDDlluRRdrddlUruLuurDDullldlluRRldddDlddrUUUUUrRRurrrdrdd
ddLLLLLLrrrrrruuuulullldlluRRRRlllldlluRRRRRllllddddlddrUUUUUluRRRR


GRIGoRusha, "Opened Heart - GrigrSun #6"

  ######
###    #
#   ## ####
# # $@$   #
# #$...$# #
# # *** # #
#  $...$# #
##  ##    #
 #####  ###
     ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
dlDlUrruRuullldllddddrdrUlluuuurrurrrdddDLullURdrddLLURuulDrddrUruuuul
llDllddddRRlluuuurrurrrddddllulDrrruuuullldDrRlluurrrdDllddlUrurruulll
dllddddrdrUlluuuurrurrrddlldlUrddrdLLUrrrrDLLrddrUrruuuulLLDDrDulldRdR
luullldRRluuulDrdrruuuulllDllddddRRlluuuurrurrrddddllulDrrruuuullldDrR
lluurrrdDllddlUrurruullldllddddrdrUlluuuurrurrrddlldlUrddrdLLUrrrrDLdd
rUluLuluurrrrrddddLLdlUrrruuuulllllddrrrDullluurrrrrddddlLuuUdddrruuuu
lLddlldRullldRuuulDrdrrruurrddddlldlUUdrrruuuullddDuuuLLDlddRRlluururr
dLurrrddddlLUlULdrrddlUUdrrruuuullluulllDllddddRRRRlllluuuurrurrrddlDl
lDurrurrdLLruuullldllddddrRRllluuuurrDDDuuullddddrRuuuRRlluurrrdDrrrdd
ddlluUUdddrruuuulLdLUllluurrrDD


GRIGoRusha, "Everest - GrigrSun #7"

  #####
  # . #
 ##$.$#
 #  . #
##.$.@###
# .$#$  #
# .$.$  #
## $  ###
 ###  #
   ####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
ullldRldddRRuLUlldRurDrRUrrdLLLLuluurrrDDuulllddrdrRuuuluulDrdrdddllul
uuRlddrUddrruuLUrdddlluluuRlddrdrruulLuuurrDLDldddrruuUdddlddrUUllulld
RdRRuLrrUrrdLLLddrUluRdlllURuuurrDDDLruuullddDlluRdrrruuulllDurrrdddll
UUddlluRdrrrurrdLLLddrUluRuuuluurDDDDDlLUluuRlddrUddrruuLUrdddlluluRlu
RdddrruuuuullDDuurrddLUrddddlddrUUlluluuRDldldRdRRuLrrUrrdLLLddrUluRuU
LLuurrDDDDldllURUUrrddLruulldDlluRdrrruuuullDurrddlUllDRurrdddllUUluRd
ddlUdrrrurrdLLLddrUluLulldRdRRuLdlUrrRurrdLLLLrddrUluRurrdLL


GRIGoRusha, "Unopened Room - GrigrSun #8"

#####
#   #####
#.#$    #
#.# $$$ #
#.# $ @##
#.# $#$#
#..    #
#.. $# #
####   #
   #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
lLUlDDDrrrddllULulluuuuurrDDDrrrDDlLLrrruulllDurrrddllUluRdddlUruuuluu
lldddddRRdrUUdllluuuuurrdddDrdrruuULuLrdrruLLrddddllddrrUUlluluuRDDuuR
urrdLdLruulDllddrDrrddllUlUlluuuuurrDRRdrdDDlLLruUlDrdrruuulullDRdddrr
uuuruLLrddddllddrrUUlluuuluullddddddRRlluuuuuurrddrddlDruuulDDrdrrddll
UUUluuuullddddddrRlluuuuuurrddrRuLdlddrdrrddllUllluuuuuurrDrdDldDLdlUU
UUdddrrRddrruuLLLLdlUUUddrruurDldRuuuulDDDrdLLdlUUdrrruuuurrrdLLLulDDD
rdLLdlUrrrdLLrrdrruuLLLLrrrrUULLulDDrdLuuuurrrrdLLLulDDDDrdL


GRIGoRusha, "Open Air - GrigrSun #9"

    ####
#####  ####
# $ $ $   #
# ..  #   #
##.. $#####
 #.. $   #
 #.#$#$$@#
 #.  #   #
 #########

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Pushes (Built-in)
ullLLulldddrrUULrrrrrddllUdrruulLLLddlluURuurrDLruuRRdrruLLLulDDlluRRd
lllluRRdrdDllUdrrRRddrruuLLLLuurDuuRRdrruLLLulDDlddRUlululldRddRluuurR
ddLruulldRddlUrrrdLulldddrrUULrrRddrruuLLLLddlluURuuurRDDLDllddrrUURuu
ulldDuulldRurrrdddlddlluuUdddrruuLulDDurrrRddrruuLLLLLulDrrrrddrUruLLL
LLrruLLrruulDurRRdrruLLLulDDDLdRRdrruLLLL


GRIGoRusha, "The Tornado - GrigrSun #10"

     ####
    ##  #
#####   #
# $ $ $ #
# ..#  ##
##$.*.$#
 # .*  #
 #$ +###
 #   #
 #####

Author: Evgeny Grigoriev
These levels may be freely distributed provided they are credited with the author's name.

Solution/Moves (Built-in)
luuRDrrULuuurrdLDlddrUUUruulDlDDrddllluuuRldddrrruulDrdLruuUruulDlDlld
lluRRdddlUruulldRddrddlUUruRRdLulDlddrrULrUruUrUruulDlDLLDDDrruUrULrru
ulDrdLdlddrUUUruulDlDDrddllluuuRldlluRRdddlUdrrrruulDrdLLddllUURuRDrru
LruUruulDlDDrddllluuuRldddrrruulDrdLruuUruulDlDlldddlddrUUURRdLulDlddr
rUUruUrUruulDlDllDulldRDDrrruUrULrruulDrdLdlddrUUUruulDlDDrddlllluuurR
lldddrrddllUUUddRurrruulDrdLLrruuUruulDlDDDrdLuuuurrdLulDD
`;
