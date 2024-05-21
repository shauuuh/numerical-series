class SeriesCalculator{
  static instances = 0
  constructor() {
    if(this.instances === 1){
      throw new Error('SingletonError: Not implemented')
    }
    this.instances = 1
  }

  fibonacci(n) {
    if(n<=1){
      return n;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  }

  triangular(n){
    return (n*(n+1))/2;
  }

  primeNumber(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
  calculatePrimeNumber(n) {  
    let cont = 0;               
    let num = 1;             
    while (cont < n) {      
      num++;                  
      if (this.primeNumber(num)) cont++;
    }
    return num;
  }


  getResultSerie(n) {
    const fibonacciTerm = this.fibonacci(n);
    const triangularTerm = this.triangular(n - 1);
    const primeTerm = this.calculatePrimeNumber(n + 2);

    return (5 * fibonacciTerm - 3 * triangularTerm) / (2 * primeTerm);    
  }


}

export default new SeriesCalculator();