import SeriesCalculator from "../../SeriesCalculator"

describe('SeriesCalculator tests', () => {
  test('series calculator simple case', () => {
    const results = [null,0.5,0.14285,0.045454,-0.115384,-0.14705,-0.131578,0.04347,0.36206,1,1.89189];
    for(let n=1; n<= 10; n++){
      const result = SeriesCalculator.getResultSerie(n);
      expect(result).toBeCloseTo(results[n],4);
    }      
  });
});