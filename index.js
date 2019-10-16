'use strict'

const SOFTCAP = 0.8901403358192

module.exports = function EPTracker(mod) {

	let capped = false,
		lvl = 0,
		exp = 0,
		dailyExp = 0,
		dailyCap = 0,
		ep = 0,
		usedPoints = 0,
		dailySoftcap = 0

	mod.hook('S_LOAD_EP_INFO', 1, event => {
		exp = event.exp
		lvl = event.level
		dailyExp = event.dailyExp
		dailyCap = event.dailyExpMax
		ep = event.totalPoints
		usedPoints = event.usedPoints
		dailySoftcap = Math.floor(dailyCap * SOFTCAP)
	})

	mod.hook('S_CHANGE_EP_EXP_DAILY_LIMIT', 1, event => {
		dailyCap = event.limit
		dailySoftcap = Math.floor(dailyCap * SOFTCAP)
	})

	mod.hook('S_PLAYER_CHANGE_EP', 1, event => {
		let gained = event.expDifference,
			softCapMod = Math.round(event.tsRev * 100)

		exp = event.exp
		lvl = event.level
		dailyExp = event.dailyExp
		dailyCap = event.dailyExpMax
		ep = event.totalPoints
		dailySoftcap = Math.floor(dailyCap * SOFTCAP)

		if(gained) {
			if(dailyExp >= dailySoftcap) {
				if(!capped) {
					mod.command.message('Daily softcap <font color="#FF0000">reached!</font>')
					capped = true
				}
			}
			else capped = false

			mod.command.message('<font color="#00FFFF">+' + gained + ' EXP</font>' + (!capped ? ' (' + dailyExp + ' / ' + dailySoftcap + ' -> <font color="#FDD017">' + (dailySoftcap - dailyExp) + '</font> EXP left until daily softcap)' : ' (' + softCapMod + '% efficiency)'))
		}
	})

	mod.hook('C_REQUEST_CONTRACT', 1, event => {
		if (event.type == 78) msg() // EP UI
	})

	// Function to show lvl, usedPoints/ep, exp, dailyExp/dailySoftcap (% of daily softcap)
	function msg() {
		mod.command.message(`LVL: <font color="#00FFFF">${lvl}</font>, Used EP: <font color="#00FFFF">${usedPoints}/${ep}</font>, EXP: <font color="#00FFFF">${exp}</font>, Daily EXP: <font color="#00FFFF">${dailyExp}/${dailySoftcap} (${Math.round(100 * dailyExp / dailySoftcap)}%)</font>`)
	}

	// Commands
	mod.command.add(['talent', 'talents', 'ep'], msg)
}
