#!/usr/bin/env node
import readlineSync from 'readline-sync';
import namer from '../src/cli.js';
import evengame from './brain-even.js';

console.log("Welcome to the Brain Games!")


const name = namer()
console.log(`Hello, ${name}!`)
