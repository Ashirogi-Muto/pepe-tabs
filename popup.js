let changeColor = document.getElementById("changeColor")

chrome.storage.sync.get("color", ({ color }) => {
	changeColor.style.backgroundColor = color
})

changeColor.addEventListener("click", async () => {
	console.log("CLICK HERE")
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
	console.log(tab)
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageBackgroundColor
	})
})

const setPageBackgroundColor = () => {
	chrome.storage.sync.get("color", ({ color }) => {
		document.body.style.backgroundColor = color
	})
}