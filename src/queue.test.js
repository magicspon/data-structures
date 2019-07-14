const createQueue = require('./queue')

describe('queue', () => {
	it('should return the length of the queue', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another')
		q.add('thing')

		expect(q).toHaveLength(3)
	})

	it('should add items to the queue', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another')

		expect(q).toHaveLength(2)
	})

	it('should remove items from the queue', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another')
		q.remove()

		expect(q).toHaveLength(1)
	})

	it('should return the last item in the queue when peek is called', () => {
		const q = createQueue()
		q.add('hello')
		q.add('another')
		const item = q.peek()
		expect(item).toBe('another')
	})
})
