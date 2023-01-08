const hello = "Hello, World!";

function sum(...args: number[]) {
  return [...args].reduce((acc, n) => acc + n, 0);
}

console.log(sum(2, 3, 5, 6));
