export type Steps = 'GENERATOR' | 'TEMPLATE' | 'DONE'

export function canChangeStep(from: Steps, to: Steps) {
  const values = {
    GENERATOR: 1,
    TEMPLATE: 2,
    DONE: 3
  }

  return values[from] > values[to]
}
