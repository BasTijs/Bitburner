# Bitburner

Welcome to my log of [Bitburner](https://danielyxie.github.io/bitburner/) scripts.

Collection from various sources that worked for me as a beginner, main sources are reddit for the HackNet.ns, scan.js, server_costs.js and stock-trader.ns. All others are from the follow, but fixed for the steam version 1.2:
https://github.com/moriakaice/bitburner/tree/master/src

After BN1, I switched to using the awesome code from Alain Bryden, which should be pretty newbie friendly also but change the host-manager settings (reservedMoneyPercent, reserve-percent, utilization-trigger) to spend more money:
https://github.com/alainbryden/bitburner-scripts

## Installation

Copy the contents of install.ns to a new file in your game editor and run it. This will download everything.

## Commands for main hacking/money making method early game:

run runHacking.ns (main script that hacks servers, makes money and purchaces and upgrades new servers)

run HackNet.ns (Uprades HackNet, only profitable for long games, not if you install augments often)

run stock-trader.ns (not tested much but it makes a profit, game needs to be active so no offline)

run killAll.ns (kill all scripts and restart hacking scripts)

run scan.js (makes a map of all servers with info. Seems a bit buggy but works. Click in menu and back to terminal to continue working on that server)

run server_costs.js (overview of upgrading costs servers)

## Focus:
Upgrade your home pc for more memory, make programs, faction reputation for new augments. Focus on a single faction and buy the most expensive one first, as it gets more and more expansive. Install after 10-15 new augments, because it will reset your game, but with the scripts it is easy to restart.
After that focus on getting Tor, connect to darkweb and start buying programs instead of creating them.

## Alias

Here is a nice trick using alias to buy all hack tools (TOR required) for early game when you can make quick money but dont have access to advanced functions yet:

alias buyhacks="home; connect darkweb; buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; home;"

or everything if you have enough money:

alias buyall="buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy ServerProfiler.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe; buy Formulas.exe"
