const createQueue = require('./queue')

function createPriorityQueue() {
	const low = createQueue()
	const high = createQueue()

	return {
		add(item, priority = false) {
			priority ? low.push(item) : high.push(item)
		},
		remove() {
			return !high.isEmpty ? high.remove() : low.remove()
		},
		peek() {
			return !high.isEmpty ? high.peek() : low.peek()
		},
		get length() {
			return low.length + high.length
		},
		get isEmpty() {
			return !low.length && !high.lenght
		}
	}
}

module.exports = createPriorityQueue
