import MedianList from "../../src/MedianList";

function testPerformance()
{
  const array:Array<number> = new Array();
  const medianList:MedianList<number> = MedianList.forNumbers();

  console.time("medianlist push 10000000 items");
  for(var i =0; i < 10000000;i++)
  {
    medianList.add(~~(Math.random()*100));
  }
  console.timeEnd("medianlist push 10000000 items");

  console.time("array push 10000000 items");
  for(var i =0; i < 10000000;i++)
  {
    array.push(~~(Math.random()*100));
  }
  console.timeEnd("array push 10000000 items"); 

  console.time("array find max");
  var arrMax = 0;
  array.forEach(x=>
    {
      if(x > arrMax)
      {
        arrMax = x;
      }
    })
  console.timeEnd("array find max");

  console.time("medianlist find max");
  var medianMax = medianList.getMax();
  console.timeEnd("medianlist find max");

  console.time("array find min");
  var arrMin = Number.MAX_SAFE_INTEGER;
  array.forEach(x=>
    {
      if(x < arrMin)
      {
        arrMin = x;
      }
    })
  console.timeEnd("array find min");

  console.time("medianlist find min");
  var medianMin = medianList.getMin();
  console.timeEnd("medianlist find min");

  console.time("array find median");
  var arrMin = Number.MAX_SAFE_INTEGER;
  array.sort();
  var arrayMedian = array[array.length/2];
  console.timeEnd("array find median");


  console.time("medianlist find median");
  var medianMedian = medianList.getMedian();
  console.timeEnd("medianlist find median");

}

testPerformance();