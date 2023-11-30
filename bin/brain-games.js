#!/usr/bin/env node
import readlineSync from 'readline-sync';
import namer from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = namer();
console.log(`Hello, ${name}!`);
