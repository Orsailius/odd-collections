import HashOfLists from '../src/HashOfLists';

describe("empty tests",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();

  test('key count is 0', () => {
      expect(hashlist.keyCount).toBe(0);
    });

  test('has 4 is false', () => {
      expect(hashlist.has(4)).toBe(false);
    });
});

describe("hashlist add(4,red)",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();
  hashlist.add(4,'red');

  test('key count is 1', () => {
    expect(hashlist.keyCount).toBe(1);
  });

  test('has 4 is true', () => {
    expect(hashlist.has(4)).toBe(true);
  });

  test('getCount 4 is 1', () => {
    expect(hashlist.getCount(4)).toBe(1);
  });

  test('get 4 has red', () => {
    expect(hashlist.get(4)?.has('red')).toBe(true);
  });
});

describe("hashlist add(4,red), add(4,green)",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();
  hashlist.add(4,'red');
  hashlist.add(4,'green');

  test('key count is 1', () => {
    expect(hashlist.keyCount).toBe(1);
  });

  test('has 4 is true', () => {
    expect(hashlist.has(4)).toBe(true);
  });

  test('getCount 4 is 2', () => {
    expect(hashlist.getCount(4)).toBe(2);
  });

  test('get 4 has red and green', () => {
    expect(hashlist.get(4)?.has('red') && hashlist.get(4)?.has('green')).toBe(true);
  });
});

describe("hashlist add(4,red), add(4,green) remove(4,red)",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();
  hashlist.add(4,'red');
  hashlist.add(4,'green');
  hashlist.remove(4,'red');

  test('key count is 1', () => {
    expect(hashlist.keyCount).toBe(1);
  });

  test('has 4 is true', () => {
    expect(hashlist.has(4)).toBe(true);
  });

  test('getCount 4 is 1', () => {
    expect(hashlist.getCount(4)).toBe(1);
  });

  test('get 4 has green and not red', () => {
    expect(!hashlist.get(4)?.has('red') && hashlist.get(4)?.has('green')).toBe(true);
  });
});

describe("hashlist add(4,red), add(4,green) add(5,red)",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();
  hashlist.add(4,'red');
  hashlist.add(4,'green');
  hashlist.add(5,'red');

  test('key count is 2', () => {
    expect(hashlist.keyCount).toBe(2);
  });

  test('has 4 and has 5 is true', () => {
    expect(hashlist.has(4) && hashlist.has(5)).toBe(true);
  });

  test('getCount 5 is 1', () => {
    expect(hashlist.getCount(5)).toBe(1);
  });

  test('get 5 has red', () => {
    expect(hashlist.get(5)?.has('red')).toBe(true);
  });
});

describe("hashlist add(4,red), add(4,green) add(5,red) remove(5,red)",()=>
{
  var hashlist:HashOfLists<number,string> = new HashOfLists();
  hashlist.add(4,'red');
  hashlist.add(4,'green');
  hashlist.add(5,'red');
  hashlist.remove(5,'red');

  test('key count is 1', () => {
    expect(hashlist.keyCount).toBe(1);
  });

  test('has 4 and has not has 5 is true', () => {
    expect(hashlist.has(4) && !hashlist.has(5)).toBe(true);
  });

  test('getCount 5 is 0', () => {
    expect(hashlist.getCount(5)).toBe(0);
  });

  test('get 5 is nully', () => {
    expect(hashlist.get(5) == null).toBe(true);
  });
});