import { expect, test } from 'vitest'
import { LogLevel, getLogger, getLoggerBuilder } from '../lib/index'
import { ConsoleLogger } from '../lib/ConsoleLogger'
import { LoggerBuilder } from '../lib/LoggerBuilder'

test('getLoggerBuilder', () => {
	const builder = getLoggerBuilder()
	expect(builder).toBeInstanceOf(LoggerBuilder)
})

test('getLogger', () => {
	const logger = getLogger()
	expect(logger).toBeInstanceOf(ConsoleLogger)
})

test('exported LogLevel', () => {
	expect(typeof LogLevel === 'object').toBe(true)
})
