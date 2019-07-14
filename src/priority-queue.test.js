const createQueue = require('./priority-queue')

describe('priority queue', () => {
	it('should return the length of the combined queues', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another', true)
		q.add('thing')

		expect(q).toHaveLength(3)
	})

	it('should return return the priority queued item when peeked', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another', true)
		q.add('thing')

		expect(q.peek()).toBe('another')
	})

	it('should remove high priority items before low ones', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another', true)
		q.add('thing')
		q.remove()

		expect(q.peek()).toBe('thing')
	})
})
