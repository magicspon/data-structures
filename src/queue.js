function createQueue() {
	let queue = []

	return {
		add(item) {
			queue.push(item)
		},
		remove() {
			queue.pop()
		},
		peek() {
			return queue[queue.length - 1]
		},
		get length() {
			return queue.length
		},
		get isEmpty() {
			return !queue.length
		}
	}
}

module.exports = createQueue
