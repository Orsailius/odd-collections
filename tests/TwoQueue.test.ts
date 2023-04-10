import TwoQueue from '../src/TwoQueue';

describe("empty queue tests",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();

  test('empty queue: oldest is undefined', () => {
      expect(queue.oldest()).toBe(undefined);
    });

  test('empty queue: newest is undefined', () => {
      expect(queue.newest()).toBe(undefined);
    });

  test('empty queue: peek is undefined', () => {
    expect(queue.peek()).toBe(undefined);
  });

  test('empty queue: poll is undefined', () => {
    expect(queue.poll()).toBe(undefined);
  });

  test('empty queue: poll is undefined', () => {
    expect(queue.poll()).toBe(undefined);
  });

  test('empty queue: count is 0', () => {
    expect(queue.count()).toBe(0);
  });

  test('empty queue: peek(and the others) is falsey', () => {
    expect(queue.peek()).toBeFalsy();
  });

  test('empty queue: peek is null or undefined (equivaled to == null)', () => {
    expect(queue.peek() == null);
  });

  test('peek is null or undefined (equivaled to == null)', () => {
    expect(queue.peek() == null);
  });
});

describe("After adding nubmer 5 to empty queue",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);

  test('count is 1', () => {
    expect(queue.count()).toBe(1);
  });

  test("oldest is 5", () => {
    expect(queue.oldest()).toBe(5);
  });

  test('newest is 5', () => {
    expect(queue.newest()).toBe(5);
  });

  test('peek is 5', () => {
  expect(queue.peek()).toBe(5);
  });

  test('poll is 5', () => {
  expect(queue.poll()).toBe(5);
  });
});

describe("After adding number 5 to empty then poll",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.poll();

  test('count is 0', () => {
    expect(queue.count()).toBe(0);
  });
 
});

describe("After adding 5, poll, adding 4",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.poll();
  queue.add(4);

  test('count is 1', () => {
    expect(queue.count()).toBe(1);
  });

  test('peek is 4', () => {
    expect(queue.peek()).toBe(4);
  });

  test("oldest is 4", () => {
    expect(queue.oldest()).toBe(4);
  });

  test('newest is 4', () => {
    expect(queue.newest()).toBe(4);
  });

 
});

describe("After adding 5, then adding 4",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);

  test('count is 2', () => {
    expect(queue.count()).toBe(2);
  });

  test('peek is 5', () => {
    expect(queue.peek()).toBe(5);
  });

  test("oldest is 5", () => {
    expect(queue.oldest()).toBe(5);
  });

  test('newest is 4', () => {
    expect(queue.newest()).toBe(4);
  }); 
});

describe("After adding 5, then adding 4, then poll",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);
  queue.poll();

  test('count is 1', () => {
    expect(queue.count()).toBe(1);
  });

  test('peek is 4', () => {
    expect(queue.peek()).toBe(4);
  });

  test("oldest is 4", () => {
    expect(queue.oldest()).toBe(4);
  });

  test('newest is 4', () => {
    expect(queue.newest()).toBe(4);
  }); 
});

describe("After adding 5, then adding 4, then poll, then poll",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);
  queue.poll();
  queue.poll();

  test('count is 0', () => {
    expect(queue.count()).toBe(0);
  });

  test('peek is undefined', () => {
    expect(queue.peek()).toBe(null);
  });

  test("oldest is undefined", () => {
    expect(queue.oldest()).toBe(null);
  });

  test('newest is undefined', () => {
    expect(queue.newest()).toBe(null);
  }); 
});

describe("After adding 5, then adding 4, then adding 3",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);
  queue.add(3);

  test('count is 2', () => {
    expect(queue.count()).toBe(2);
  });

  test('peek is 4', () => {
    expect(queue.peek()).toBe(4);
  });

  test("oldest is 4", () => {
    expect(queue.oldest()).toBe(4);
  });

  test('newest is 3', () => {
    expect(queue.newest()).toBe(3);
  }); 

  test('poll is 4', () => {
    expect(queue.poll()).toBe(4);
  }); 
});

describe("After adding 5, then adding 4, then adding 3, then poll",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);
  queue.add(3);
  queue.poll();

  test('count is 1', () => {
    expect(queue.count()).toBe(1);
  });

  test('peek is 3', () => {
    expect(queue.peek()).toBe(3);
  });

  test("oldest is 3", () => {
    expect(queue.oldest()).toBe(3);
  });

  test('newest is 3', () => {
    expect(queue.newest()).toBe(3);
  }); 

  test('poll is 3', () => {
    expect(queue.poll()).toBe(3);
  }); 
});

describe("After adding 5, then adding 4, then adding 3, then poll, then poll",()=>
{
  var queue:TwoQueue<number> = new TwoQueue();
  queue.add(5);
  queue.add(4);
  queue.add(3);
  queue.poll();
  queue.poll();

  test('count is 0', () => {
    expect(queue.count()).toBe(0);
  });

  test('peek is null', () => {
    expect(queue.peek()).toBe(null);
  });

  test("oldest is null", () => {
    expect(queue.oldest()).toBe(null);
  });

  test('newest is null', () => {
    expect(queue.newest()).toBe(null);
  }); 
});