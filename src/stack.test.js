const createStack = require('./stack')

describe('queue', () => {
	it('should return the length of the queue', () => {
		const q = createStack()
		q.add('hello')
		q.add('another')
		q.add('thing')

		expect(q).toHaveLength(3)
	})

	it('should remove items from the end of the queue first', () => {
		const q = createStack()
		q.add('hello')
		q.add('another')
		q.add('thing')
		q.remove()
		expect(q.peek()).toBe('another')
	})

	it('should return true if the stack is empty when isEmpty is called', () => {
		const q = createStack()
		q.add('hello')
		q.add('another')
		q.add('thing')
		q.remove()
		q.remove()
		q.remove()
		expect(q.isEmpty).toBe(true)
	})
})
