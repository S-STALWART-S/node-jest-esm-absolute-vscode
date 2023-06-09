#! LINUX|MAC USERS ONLY. I haven't tested it on Mac, so use with caution

#* To use these aliases, you need to manually load this file with "source ./aliases.sh"
#* or run aliasLoader.sh to add it to your current shell configurations,
#* so the aliases can Automatically loaded when opening the shell.

#* How to run aliasLoader.sh? E.g. bash ./aliasLoader.sh

#? Docker

#? Railway
alias rwl="railway logs"
alias rwu="railway up"

#? Liara
alias lrdd="liara deploy --platform=docker"
alias lrdn="liara deploy --platform=node"
alias lrl="liara logs"

#? npm
alias nrb="npm run build"
alias nrcf="npm run check:format"
alias nrcl="npm run check:lint"
alias nrcs="npm run check:style"
alias nrsd="npm run start:dev"
alias nrsp="nrb&&npm run start:production"
alias nrspl="nrb&&npm run start:production:local"
alias nrtc="npm run test:coverage"
alias nrtd="npm run test:dev"
alias nrtp="nrb&&npm run test:production"
alias nrtpl="nrb&&npm run test:production:local"

#? yarn
alias ya="yarn add"
alias yd="yarn dev"
alias ys="yarn start"
alias yy="yarn"
