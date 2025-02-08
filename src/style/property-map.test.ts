import { describe, expect, test } from 'bun:test'
import { propertyMap } from './property-map'

describe('propertyMap', () => {
  test('should have unique prod values in className', () => {
    const prodValues = Object.values(propertyMap).map(
      (entry) => entry.className.prod
    )

    const uniqueProdValues = new Set(prodValues)

    if (prodValues.length !== uniqueProdValues.size) {
      // Find duplicates
      const duplicates = prodValues.filter(
        (value, index, self) => self.indexOf(value) !== index
      )

      console.error('Duplicate prod values found:', [...new Set(duplicates)])
    }

    expect(prodValues.length).toBe(uniqueProdValues.size)
  })
})
