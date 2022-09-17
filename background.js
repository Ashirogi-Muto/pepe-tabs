const RULE_STORAGE_KEY = "rules"
const DEFAULT_RULE_NAME = "google"
const DEFAULT_RULE_URL = "*.google.com"
const NEW_RULE = {
	name: '',
	url: ''
}

chrome.runtime.onInstalled.addListener(async () => {
	try {
		chrome.storage.sync.clear()
		const rulesObject = await getRules()
		
		// const defaultRule = {...NEW_RULE, name: DEFAULT_RULE_NAME, url: DEFAULT_RULE_URL }
		// const tabRules = [defaultRule]
		// await setRule(null)
		
		// console.log("DEF", rules)
	} catch (error) {
		console.error(error)
	}
})

chrome.tabs.onActivated.addListener(async (tab) => {
	console.log("onActive", tab)
})

// chrome.webNavigation.onCommitted.addListener(async (tab) => {
// 	console.log("NAVGATE", tab)
// })

const getRules = () => {
	return new Promise((resolve, reject) => {
		chrome.storage.sync.get(RULE_STORAGE_KEY, (result) => {
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