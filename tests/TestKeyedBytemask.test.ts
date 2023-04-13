import KeyedBytemask from '../src/KeyedBytemask';

describe("empty tests",()=>
{
  var mask:KeyedBytemask<string> = new KeyedBytemask(['red',"blue","green", "yellow", "purple"]);

  test('has element red', () => {
      expect(mask.has('red')).toBe(false);
    });
  
    test('has element blue', () => {
      expect(mask.has("blue")).toBe(false);
    });
});

describe("add 'red'",()=>
{
  var mask:KeyedBytemask<string> = new KeyedBytemask(['red',"blue","green", "yellow", "purple"]);
  mask.add('red');

  test('has element red', () => {
      expect(mask.has('red')).toBe(true);
    });
  
  test('has element blue', () => {
    expect(mask.has("blue")).toBe(false);
  });

  test('has element cyan', () => {
    expect(mask.has("cyan")).toBe(false);
  });
});

describe("add 'red' and 5",()=>
{
  var mask:KeyedBytemask<string> = new KeyedBytemask(['red',"blue","green", "yellow", "purple"]);
  mask.add('red');
  mask.add('green');

  test('has element red', () => {
      expect(mask.has('red')).toBe(true);
    });
  
    test('has element blue', () => {
      expect(mask.has("blue")).toBe(false);
    });

  test('has element green', () => {
    expect(mask.has('green')).toBe(true);
  });

});

describe("add 'red' and 5, remove 'red'",()=>
{
  var mask:KeyedBytemask<string> = new KeyedBytemask(['red',"blue","green", "yellow", "purple"]);
  mask.add('red');
  mask.add('green');
  mask.remove('red');

  test('has element red', () => {
      expect(mask.has('red')).toBe(false);
    });
  
    test('has element blue', () => {
      expect(mask.has("blue")).toBe(false);
    });

  test('has element green', () => {
    expect(mask.has('green')).toBe(true);
  });
});

describe("add 'red' and 5, not 'red', 2",()=>
{
  var mask:KeyedBytemask<string> = new KeyedBytemask(['red',"blue","green", "yellow", "purple"]);
  mask.add('red');
  mask.add('green');
  mask.not('red');
  mask.not('yellow');

 
  test('has element red', () => {
      expect(mask.has('red')).toBe(false);
    });
  
    test('has element blue', () => {
      expect(mask.has("blue")).toBe(false);
    });

  test('has element green', () => {
    expect(mask.has('green')).toBe(true);
  });
 
  test('has element yellow', () => {
    expect(mask.has('yellow')).toBe(true);
  });
});