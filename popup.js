const newRule = {
	name: '',
	url: ''
}
const tabRules = [
	{
		...newRule
	}
]
const addNewButton = document.getElementById("add-new-button")
addNewButton.addEventListener("click", async () => {
	tabRules.push({ ...newRule })
})