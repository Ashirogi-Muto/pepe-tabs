const RULE_STORAGE_KEY = "rules"
const newRule = {
	name: '',
	url: ''
}
const tabRules = [
	{
		...newRule
	}
]

chrome.runtime.onInstalled.addListener(async () => {
	try {
		await setRule(tabRules)
		const rules = await getRules()
		console.log(rules)
	} catch (error) {
		console.error(error)
	}
})


const getRules = () => {
	return new Promise((resolve, reject) => {
		chrome.storage.sync.get([RULE_STORAGE_KEY], (result) => {
			if(chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}
			resolve(result)
		})
	})
}

const setRule = (newRules) => {
	return new Promise((resolve, reject) => {
		chrome.storage.sync.set({[RULE_STORAGE_KEY]: newRules}, function() {
			if(chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}
			resolve()
		})
	})
}