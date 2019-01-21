export type Steps = 'FIELDS' | 'TEMPLATE' | 'DONE'

export function canChangeStep(from: Steps, to: Steps) {
  const values = {
    FIELDS: 1,
    TEMPLATE: 2,
    DONE: 3
  }

  return values[from] > values[to]
}
