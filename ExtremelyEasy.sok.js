const sok_file = `
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::         Sokoban (c) by Falcon Co., Ltd., Japan         ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::                    File Format 0.17                    ::
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
::   key/value properties, such as "Author: Name". Lines  ::
::   beginning with "::" are comments meant to be read    ::
::   only by a person examining the file in a text        ::
::   editor, and should not be displayed by the Sokoban   ::
::   program.                                             ::
::                                                        ::
::   The optional but recommended property                ::
::   "Collection: Name" assigns a name to the puzzle      ::
::   collection. When a collection is copied from the     ::
::   internet, for example, and pasted into a Sokoban     ::
::   program, this information allows the collection to   ::
::   be saved with the proper name.                       ::
::                                                        ::
:: Titles                                                 ::
::   A title line is the last non-blank text line before  ::
::   a board, a saved game, or a solution, provided the   ::
::   line is preceded  by a blank line or it is the only  ::
::   text line at this position in the file.              ::
::                                                        ::
::   Title lines are optional unless a single or a last   ::
::   text line from a preceding puzzle, saved game,       ::
::   solution, or file header can be mistaken for a title ::
::   line.                                                ::
::                                                        ::
:: Puzzle Notes                                           ::
::   Two special key/value pairs are supported in puzzle  ::
::   notes: "Title" and "Author", hence, titles can       ::
::   either come from a title line or from a key/value    ::
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
:: Floor..................: -  _ :..................Floor ::
::                                                        ::
:: Remarks:                                               ::
::                                                        ::
::   The first and the last non-empty square in each row  ::
::   must be a wall or a box on a goal. An empty interior ::
::   row is written with at least one "-" or "_".         ::
::                                                        ::
::   Boards may be run-length encoded (RLE), e.g.,        ::
::   "###----p.#" may be encoded as "3#4-p.#", and        ::
::   "#-#-#-##-#-#-#" may be encoded as "2(3(#-)#)".      ::
::   A row cannot be split over multiple lines.           ::
::                                                        ::
::   Rows may be combined on a single line by using "|"   ::
::   as a row separator, e.g., "--3#|3#-#|#pb.#|5#".      ::
::   A "|" at the end of a line is optional and may be    ::
::   omitted.                                             ::
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
::   Moves may be run-length encoded, e.g., "3r4U" means  ::
::   "rrrUUUU", and "2(3(dr)R)" means "drdrdrRdrdrdrR".   ::
::   Each line must, however, have at least one proper    ::
::   non-digit character. Spaces between moves are        ::
::   allowed.                                             ::
::                                                        ::
::   Jumps and pulls: Only in reverse mode saved games    ::
::   and solutions.                                       ::
::                                                        ::
::   Reverse mode saved games and solutions must begin    ::
::   with a jump, even if it is empty. An example:        ::
::   "[]U[rr]d".                                          ::
::                                                        ::
::   Pusher changes: Only in puzzles with multiple        ::
::   pushers, e.g., Multiban. Moves inside the braces     ::
::   depict the relative movement to get from the         ::
::   currently active pusher to the next active pusher.   ::
::   At game start, a "{...}" sequence activates the      ::
::   pusher relative to the top-left pusher. An example:  ::
::   "{rddd}Urr{uul}uLU". If the top-left pusher is the   ::
::   first active pusher, then the empty "{}" can be      ::
::   omitted.                                             ::
::                                                        ::
::   The current position is optional and defaults to the ::
::   position after the last move.                        ::
::                                                        ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Date Created: 2020-05-26  14:45:09
Date of Last Change: 2020-06-26  19:31:26
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

These levels are Copyright (c) by Alonso del Arte
E-mail: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/
Collection: ExtremelyEasy


ExtremelyEasy, "Easy #01"

#####
#.$@#
#####

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 1/1 (YASS 2.142 Solver)
L

Optimality: move-optimal solution, push-optimal solution
Solver: YASS 2.142
Solver time: 00:00:00
Solver date: 2020-05-16  00:54:05


ExtremelyEasy, "Easy #02"

#######
#.$@$.#
#######

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 3/2
LrR


ExtremelyEasy, "Easy #03"

  ###
  #.#
###$###
#.$@$.#
#######

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 5/3
LrRlU

Solution 5/3
LrRlU


ExtremelyEasy, "Easy #04"

  ###
  #.#
###$###
#.$@$.#
###$###
  #.#
  ###

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 7/4
LrRlUdD


ExtremelyEasy, "Easy #05"

 ###
 #.###
##$#.#
#.$@$##
###$$.#
  #.###
  ###

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels. However, in this particular level,
it's possible to be inefficient.

Best Solution 6/5
DRUlLU


ExtremelyEasy, "Easy #06"

#####
#@$.##
##$$.##
 #.$$.#
 ##.$##
  ##.#
   ###

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 6/6
RDRDRD


ExtremelyEasy, "Easy #07"

###
#.##
#$.###
# $#.####
#.$ $ $.#
####@#$ #
   ###.$#
     ##.#
      ###

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels. However, in this particular level,
it's possible to be inefficient.

Best Solution 16/7
UlLUlUdrdrrrRDrD


ExtremelyEasy, "Easy #08"

    ###
   ##@#
  ## $###
 ## $.#.#
## $.#.$#
# $.#.$ #
# .#.$ ##
# ##$ ##
#    ##
######

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 21/8
DlDlDlDldddrrrUrUrUrU


ExtremelyEasy, "Easy #09"

       ###
      ##@#
####### $#
#    # $.#
# ##  $.####
#$ ###.###.#
#.$ #####.$#
##.$   #.$ #
 ##.## #$ ##
  #### # ##
     #   #
     #####

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels.

Best Solution 31/9
DlDlDllullldDrDrDrrrdddrruUrUrU


ExtremelyEasy, "Easy #10"

         ###
         #.##
         #$.##
         # $.#
         ## $#
          ## #
  ########## #
 ##          #  #####
##  ########## ## $.#
#  ##   #     ## $.##
# ## $# #     # $.##
# # $.# #  #### ###
#  $.## ####.## #
###.###         #
  ### ######$####
           #@#
           ###

Author: Alonso del Arte
Email: sokoban@mail.com
Original level website: https://github.com/Alonso-del-Arte/

These levels are copyright (c) by Alonso del Arte and may be freely
distributed for non-commercial use.

Author's note: The idea is that these levels be as easy as possible. One
may restart a level, but that should never be necessary. Deadlock
situations are impossible in these levels. However, in this particular level,
it's possible to be inefficient.

Best Solution 65/11 (YASO 2.142 Optimizer)
UUrrruuuRuRuRldldldddlllllllluuuullDlDlDlluuurururrrrrrrrruuUlUlU

Optimizer: YASO 2.142
Optimizer time: 00:00:00
Optimizer date: 2020-05-16  20:39:50
Optimizer metrics: Pushes, moves

Solution 95/11
UUllllluuuullDlDlDlluuurururrrrrrrrruuUlUlUdrdrdddllllllllldldldddrrur
ururrddddrrrrrrrruuuRuRuR
`;