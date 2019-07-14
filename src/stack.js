function createStack() {
	const stack = []

	return {
		add(item) {
			stack.push(item)
		},

		remove() {
			stack.pop()
		},

		peek() {
			return stack[stack.length - 1]
		},

		get length() {
			return stack.length
		},
		get isEmpty() {
			return !stack.length
		}
	}
}

module.exports = createStack
