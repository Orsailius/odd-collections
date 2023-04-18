import Splay from '../src/Splay';

describe("add 4 test",()=>
{
  var splay:Splay<number> = new Splay(5,(a,b) => Math.abs(a-b));
  const result = splay.add(4);

  test('result is null', () => {
      expect(result).toBe(null);
    });
});

describe("add 4, add -2 test",()=>
{
  var splay:Splay<number> = new Splay(5,(a,b) => Math.abs(a-b));
  splay.add(4);
  const result = splay.add(-2);

  test('result is null', () => {
      expect(result).toBe(null);
    });
});

describe("add full test",()=>
{
  var splay:Splay<number> = new Splay(5,(a,b) => Math.abs(a-b));
  splay.add(4);
  splay.add(-2);
  splay.add(5);
  splay.add(-10);
  const result = splay.add(6);

  test('result is null', () => {
      expect(result).toBe(null);
    });
});

describe("add full+1 test",()=>
{
  var splay:Splay<number> = new Splay(5,(a,b) => Math.abs(a-b));
  splay.add(4);
  splay.add(-2);
  splay.add(5);
  splay.add(-10);
  splay.add(6);
  const result = splay.add(-11);

  test('result is 4', () => 
    {
      expect(result).toBe(4);
    });
});

describe("add full+2 test",()=>
{
  var splay:Splay<number> = new Splay(2,(a,b) => Math.abs(a-b));
  splay.add(1);
  splay.add(3);
  const result =splay.add(5);
  const result2 = splay.add(2);

  test('result is 3', () => 
  {
    expect(result).toBe(3);
  });
  
  test('result is 2', () => 
  {
    expect(result2).toBe(2);
  });
});