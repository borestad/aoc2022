#!/usr/bin/env zx
/* eslint-disable no-console */

import { fs, path } from 'zx'
import { sum } from 'lodash-es'

async function input() {
  const input = await fs.readFile(path.resolve(__dirname, 'input.txt'), 'utf8')
  return input
    .split('\n\n')
    .map(x => x.split('\n'))
}

const data = await input()
const calories = data
  .map(elf => elf.reduce((i, total) => i + Number(total), 0)) // Aggregate all calories
  .sort((a, b) => b - a) // Sort numerical

console.dir(calories, { maxArrayLength: null })

const answer1 = calories[0]
const answer2 = sum(calories.slice(0, 3))

console.log('1. Answer:', answer1)
console.log('2. Answer:', answer2)
