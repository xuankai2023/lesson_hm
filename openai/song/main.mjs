import { readFile } from 'node:fs/promises';!function main() {
    const input = await readFile('input.txt', 'utf8');
    const lines = input.split('\n');
    const nums = lines.map((line) => line.split('').map((char) => parseInt(char)));
    const visible = new Set();
    const scores = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (i === 0 || i === nums.length - 1 || j === 0 || j === nums[i].length - 1) {
                visible.add(`${i},${j}`);
                continue;
            }
            const num = nums[i][j];