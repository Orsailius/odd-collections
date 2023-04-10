import MaxHistogram from '../src/MaxHistogram';

describe("empty histogram tests",()=>
{
  var histogram:MaxHistogram<string> = new MaxHistogram();

  test('max amount is 0', () => {
      expect(histogram.getMaxAmount()).toBe(0);
    });

  test('max key is undefined', () => {
      expect(histogram.getMaxKey()).toBe(undefined);
    });

    test('percent of red is 0', () => {
      expect(histogram.percent('red')).toBe(0);
    });
});

describe("histogram put 'red'",()=>
{
  var histogram:MaxHistogram<string> = new MaxHistogram();
  histogram.add('red');

  test('max amount is 1', () => {
      expect(histogram.getMaxAmount()).toBe(1);
    });

  test('max key is red', () => {
      expect(histogram.getMaxKey()).toBe('red');
    });

  test('percent of red is 1', () => {
    expect(histogram.percent('red')).toBe(1);
  });
});

describe("histogram put 'red' 'red",()=>
{
  var histogram:MaxHistogram<string> = new MaxHistogram();
  histogram.add('red');
  histogram.add('red');

  test('max amount is 2', () => {
      expect(histogram.getMaxAmount()).toBe(2);
    });

  test('size is 1', () => {
      expect(histogram.size).toBe(1);
    });

    test('total is 2', () => {
      expect(histogram.total).toBe(2);
    });

  test('max key is red', () => {
      expect(histogram.getMaxKey()).toBe('red');
    });

    test('percent of red is 1', () => {
      expect(histogram.percent('red')).toBe(1);
    });
});

describe("histogram put 'red' 'green",()=>
{
  var histogram:MaxHistogram<string> = new MaxHistogram();
  histogram.add('red');
  histogram.add('green');

  test('max amount is 1', () => {
      expect(histogram.getMaxAmount()).toBe(1);
    });

    test('size is 2', () => {
      expect(histogram.size).toBe(2);
    });

    test('total is 2', () => {
      expect(histogram.total).toBe(2);
    });

  /** We only change max on greater than, so this will always be the first max reached 
   * This is more performant, but assumes we don't care the order or we want the first max first
  */
  test('max key is red', () => {
      expect(histogram.getMaxKey()).toBe('red');
    });

    test('percent of red is 0.5', () => {
      expect(histogram.percent('red')).toBe(0.5);
    });
});

describe("histogram put 'red' 'green' 'green' ",()=>
{
  var histogram:MaxHistogram<string> = new MaxHistogram();
  histogram.add('red');
  histogram.add('green');
  histogram.add('green');

  test('max amount is 2', () => {
      expect(histogram.getMaxAmount()).toBe(2);
    });

    test('size is 2', () => {
      expect(histogram.size).toBe(2);
    });

    test('total is 3', () => {
      expect(histogram.total).toBe(3);
    });

  test('max key is green', () => {
      expect(histogram.getMaxKey()).toBe('green');
    });

    test('percent of red is 0.33', () => {
      expect(histogram.percent('red')).toBeCloseTo(0.33);
    });
});