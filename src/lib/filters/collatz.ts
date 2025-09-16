// For each number n, if n is odd, replace by 3n + 1 otherwise replace by n / 2
export function collatz(n: number): number 
{
    // Check if n is odd
    if (n % 2 != 0)
    {
        // Odd -> replace with 3n + 1
        return (3 * n) + 1;
    }
    else
    {
        // Even -> replace by n / 2
        return n / 2;
    }
  //return n;
}

// Map over a sequence
export function collatzs(ns: number[]): number[] 
{
  return ns.map(collatz);
}