import Bytemask from '../src/Bytemask';

describe("empty tests",()=>
{
  var mask:Bytemask = new Bytemask();

  test('has element 3', () => {
      expect(mask.has(3)).toBe(false);
    });
  
    test('has element 0', () => {
      expect(mask.has(0)).toBe(false);
    });

    test('has element 7', () => {
      expect(mask.has(7)).toBe(false);
    });

    test('has element 8', () => {
      expect(mask.has(8)).toBe(false);
    });
});

describe("add 3",()=>
{
  var mask:Bytemask = new Bytemask();
  mask.add(3);

  test("bitmask is 00010000", () => {
    expect(mask.toString()).toBe("00010000");
  });

  test('has element 3', () => {
      expect(mask.has(3)).toBe(true);
    });
  
  test('has element 0', () => {
    expect(mask.has(0)).toBe(false);
  });

  test('has element 1', () => {
    expect(mask.has(1)).toBe(false);
  });

  test('has element 2', () => {
    expect(mask.has(2)).toBe(false);
  });

  test('has element 4', () => {
    expect(mask.has(4)).toBe(false);
  });
});

describe("add 3 and 5",()=>
{
  var mask:Bytemask = new Bytemask();
  mask.add(3);
  mask.add(5);

  test("bitmask is 00010100", () => {
    expect(mask.toString()).toBe("00010100");
  });

  test('has element 3', () => {
      expect(mask.has(3)).toBe(true);
    });
  
  test('has element 0', () => {
    expect(mask.has(0)).toBe(false);
  });

  test('has element 5', () => {
    expect(mask.has(5)).toBe(true);
  });

  test('has element 4', () => {
    expect(mask.has(4)).toBe(false);
  });
});

describe("add 3 and 5, remove 3",()=>
{
  var mask:Bytemask = new Bytemask();
  mask.add(3);
  mask.add(5);
  mask.remove(3);

  test("bitmask is 00000100", () => {
    expect(mask.toString()).toBe("00000100");
  });

  test('has element 3', () => {
      expect(mask.has(3)).toBe(false);
    });
  
  test('has element 0', () => {
    expect(mask.has(0)).toBe(false);
  });

  test('has element 5', () => {
    expect(mask.has(5)).toBe(true);
  });

  test('has element 4', () => {
    expect(mask.has(4)).toBe(false);
  });
});

describe("add 3 and 5, not 3, 2",()=>
{
  var mask:Bytemask = new Bytemask();
  mask.add(3);
  mask.add(5);
  mask.not(3);
  mask.not(2);

  test("bitmask is 00100100", () => {
    expect(mask.toString()).toBe("00100100");
  });

  test('has element 3', () => {
      expect(mask.has(3)).toBe(false);
    });
  
  test('has element 0', () => {
    expect(mask.has(0)).toBe(false);
  });

  test('has element 5', () => {
    expect(mask.has(5)).toBe(true);
  });

  test('has element 2', () => {
    expect(mask.has(2)).toBe(true);
  });

  test('has element 4', () => {
    expect(mask.has(4)).toBe(false);
  });
});