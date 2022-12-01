#!/usr/bin/env zx --quiet
import { echo, fs, path } from 'zx'

function sum(arr) {
  return arr.reduce((sum, i) => sum + Number(i), 0)
}

const calories = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  .split('\n\n')
  .map(elf => elf.split('\n'))
  .map(sum)
  .sort((a, b) => b - a)

echo('Answer 1:', calories[0])
echo('Answer 2:', sum(calories.slice(0, 3)))
