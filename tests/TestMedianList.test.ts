import MedianList from '../src/MedianList';

describe("empty median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();

  test('length is 0', () => {
      expect(list.length).toBe(0);
    });

  test('min is undefined', () => {
      expect(list.getMin()).toBe(undefined);
    });

  test('max is undefined', () => {
    expect(list.getMax()).toBe(undefined);
  });

  test('median is undefined', () => {
    expect(list.getMedian()).toBe(undefined);
  });
});

describe("add 3 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(3);

  test('length is 1', () => {
      expect(list.length).toBe(1);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 3', () => {
    expect(list.getMax()).toBe(3);
  });

  test('median is 3', () => {
    expect(list.getMedian()).toBe(3);
  });
});

describe("add 3 add 5 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(3);
  list.add(5);

  test('length is 2', () => {
      expect(list.length).toBe(2);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 5', () => {
    expect(list.getMax()).toBe(5);
  });

  test('median is 3 or 5', () => {
    expect(list.getMedian() == 3 || list.getMedian() == 5);
  });
});

describe("add 3 add 5 add 4 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(3);
  list.add(5);
  list.add(4);

  test('length is 3', () => {
      expect(list.length).toBe(3);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 5', () => {
    expect(list.getMax()).toBe(5);
  });

  test('median is 4', () => {
    expect(list.getMedian()).toBe(4);
  });
});

describe("add 3 add 4 add 5 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(3);
  list.add(4);
  list.add(5);

  test('length is 3', () => {
      expect(list.length).toBe(3);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 5', () => {
    expect(list.getMax()).toBe(5);
  });

  test('median is 4', () => {
    expect(list.getMedian()).toBe(4);
  });
});

describe("add 4 add 3 add 5 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(4);
  list.add(3);
  list.add(5);

  test('length is 3', () => {
      expect(list.length).toBe(3);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 5', () => {
    expect(list.getMax()).toBe(5);
  });

  test('median is 4', () => {
    expect(list.getMedian()).toBe(4);
  });
});

describe("add 5 add 4 add 3 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(5);
  list.add(4);
  list.add(3);

  test('length is 3', () => {
      expect(list.length).toBe(3);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 5', () => {
    expect(list.getMax()).toBe(5);
  });

  test('median is 4', () => {
    expect(list.getMedian()).toBe(4);
  });
});

describe("add 6 add 3 add 4 add 5 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(6);
  list.add(3);
  list.add(4);
  list.add(5);

  test('length is 4', () => {
      expect(list.length).toBe(4);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 6', () => {
    expect(list.getMax()).toBe(6);
  });

  test('median is 4 or 5', () => {
    expect(list.getMedian() == 4 || list.getMedian() == 5);
  });
});

describe("add 6 add 3 add 5 add 4 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(6);
  list.add(3);
  list.add(5);
  list.add(4);

  test('length is 4', () => {
      expect(list.length).toBe(4);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 6', () => {
    expect(list.getMax()).toBe(6);
  });

  test('median is 4 or 5', () => {
    expect(list.getMedian() == 4 || list.getMedian() == 5);
  });
});

describe("add 6 add 3 add 5 add 2 add 4 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(6);
  list.add(3);
  list.add(5);
  list.add(2);
  list.add(4);

  test('length is 5', () => {
      expect(list.length).toBe(5);
    });

  test('min is 2', () => {
      expect(list.getMin()).toBe(2);
    });

  test('max is 6', () => {
    expect(list.getMax()).toBe(6);
  });

  test('median is 4 ', () => {
    expect(list.getMedian() == 4);
  });
});

describe("add 0 thru 100 median tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  for(var i = 0; i < 100;i++)
  {
    list.add(i);
  }

  test('length is 100', () => {
      expect(list.length).toBe(100);
    });

  test('min is 0', () => {
      expect(list.getMin()).toBe(0);
    });

  test('max is 99', () => {
    expect(list.getMax()).toBe(99);
  });

  test('median is 49 or 50 ', () => {
    expect(list.getMedian() == 49 || list.getMedian() == 50);
  });
});

describe("add 3's and 7's tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(3);
  list.add(3);
  list.add(3);
  list.add(7);
  list.add(7);
  list.add(7);
  list.add(7);

  test('length is 7', () => {
      expect(list.length).toBe(7);
    });

  test('min is 3', () => {
      expect(list.getMin()).toBe(3);
    });

  test('max is 7', () => {
    expect(list.getMax()).toBe(7);
  });

  test('median is 7', () => {
    expect(list.getMedian() == 7);
  });
});

describe("iterator tests",()=>
{
  var list:MedianList<number> = MedianList.forNumbers();
  list.add(4);
  list.add(3);
  list.add(3);
  list.add(7);
  list.add(7);
  list.add(8);
  list.add(7);
  var arr:Array<number> = new Array();
  for(var num of list)
  {
    arr.push(num);
  }

  test('max is 8', () => {
    expect(list.getMax()).toBe(8);
  });

  test("arr is length 7", () => {
    expect(arr.length).toBe(7);
  });

  test('(min) arr[0] is 3', () => {
      expect(arr[0]).toBe(3);
    });

    test('(median) arr[3] is 7', () => {
      expect(arr[3]).toBe(7);
    });

    test('(max) arr[6] is 8', () => {
      expect(arr[6]).toBe(8);
    });
});