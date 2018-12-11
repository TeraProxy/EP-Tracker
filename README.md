##### :heavy_exclamation_mark: Status :heavy_exclamation_mark:
Should work on all regions as long as the opcodes are mapped. Works on Caali's and Pinkie Pie's tera-proxy.

##### :heavy_exclamation_mark: Installation :heavy_exclamation_mark:
1) Download EP-Tracker: https://github.com/TeraProxy/EP-Tracker/archive/master.zip
2) Extract the contents of the zip file into "\tera-proxy\mods\\"
3) Done! (the module will auto-update on Caali's tera-proxy when a new version is released)

If you enjoy my work and wish to support future development, feel free to drop me a small donation: [![Donate](https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=A3KBZUCSEQ5RJ)

# EP-Tracker
A tera-proxy module that shows you information about your Enhancement Points experience, including the daily softcap.  
This is a fork of Owyn's original talents_info.  

![Screenshot](https://i.imgur.com/z9chZyt.png)

## Usage
**By opening the ingame EP menu** you will get a report about your EP level, EP experience and the daily softcap.  
**On gaining EP experience** in any form, the module will let you know how much experience you exactly got and how much is left until you only get a reduced amount for the day.  
  
While in game, open a proxy chat session by typing "/proxy" or "/8" in chat and hitting the space bar.  
This serves as the script's command interface.  
The following commands are supported:  
  
* **ep** - shows a report about your EP level, EP experience and the daily softcap

## Safety
Whatever you send to the proxy chat in game is intercepted client-side. The chat is NOT sent to the server.

## Credits
Original by Owyn -> https://github.com/Owyn

## FAQ
**Q.** - Why does the module show a different level than the ingame menu?
**A.** - The game doesn't actually show your real level, only the EP. Check this document for more info: https://docs.google.com/spreadsheets/d/e/2PACX-1vTy7_5TYA_WUd--cFqYeGFm0mnb9oaCzcar3yH3FgkQD6y-mRD7id9k97ttrMbkjjId8ly-aBWzexZt/pubhtml?gid=5547005

**Q.** - Why is my daily experience not 0 even though I didn't do anything yet?
**A.** - The daily EP experience resets once per day at a specific time. When exactly depends on your server.

**Q.** - Why does the daily softcap in the module not match what's written in that document?
**A.** - After 89% of your daily softcap you already start to gain a reduced amount of EP experience. Check this document for more info: https://docs.google.com/document/d/16wuje8nV7yYd0y2gq3oVFbjpR2Ulx4SQRWQQkK-LVrs

## Changelog
<details>

### 1.0.0
* [*] Now using protocol definition instead of raw hook to be future proof
* [-] Added display of EP in report
* [-] Removed ugly HTML tags from module name
* [~] Code beautification

</details>