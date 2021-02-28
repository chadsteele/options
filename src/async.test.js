import { wait } from './async'

test('wait', async () => {
  jest.useFakeTimers()
  let sattled1 = false
  let sattled2 = false
  wait(600).then(() => (sattled1 = true))
  wait(500).then(() => (sattled2 = true))
  jest.runTimersToTime(550)
  return Promise.resolve().then(() => {
    expect(sattled1).toBe(false)
    expect(sattled2).toBe(true)
  })
}, 700)
