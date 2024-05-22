class SeriesCalculator{

  /* Fibonacci function */ 
  fibonacci(n) {
    if(n<=1){
      return n;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  }
  /* Triangular function  */
  triangular(n){
    return (n*(n+1))/2;
  }
  /* Prime number function  */
  primeNumber(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) return false; 
    }
    return num > 1;
  }
  // Get a prime number 
  calculatePrimeNumber(n) {  
    let cont = 0;               
    let num = 1;             
    while (cont < n) {    
      num++;                  
      if (this.primeNumber(num)) cont++;  
    }
    return num;
  }
  // Calculate n 
  getResultSerie(n) {
    const fibonacciTerm = this.fibonacci(n);
    const triangularTerm = this.triangular(n - 1);
    const primeTerm = this.calculatePrimeNumber(n + 2);

    return (5 * fibonacciTerm - 3 * triangularTerm) / (2 * primeTerm);    
  }
}

export default new SeriesCalculator();