class Solution {
	constructor(greet){
		this.greet = greet
	}
	function main(greet = 'Hello world') {
		console.log(this.greet)
	}
}

Solution.main()
