import DaysOfTheWeek from './$DaysOfTheWeek';

describe("creation of enum ok, can't mess with references",()=>
{
  
  //const DaysOfTheWeek = makeMany($DaysOfTheWeek, new $DaysOfTheWeek(), ["Monday","Tuesday"]);
 // console.log("Now is " + Object.getOwnPropertyNames(DaysOfTheWeek));
 // console.log(DaysOfTheWeek.Monday);
  DaysOfTheWeek.Monday.randomStuff = 15;
  DaysOfTheWeek.Tuesday.randomStuff = 6;
  
  test('dummy', () => {
    expect(true);
  });  

 test('has Monday', () => {
      expect(DaysOfTheWeek.Monday != null);
  });  

  test('Monday is 15', () => {    
    expect(DaysOfTheWeek.Monday.randomStuff).toBe(15);
  });  

  test('Tuesday is 6', () => {    
    expect(DaysOfTheWeek.Tuesday.randomStuff).toBe(6);
  });  

  test('Friday first letter is F', () => {    
    expect(DaysOfTheWeek.Friday.getFirstLetter()).toBe('F');
  });  

});

describe("has SuperEnum properties",()=>
{ 
  console.log(DaysOfTheWeek.Monday.toString());

  test('Monday is named Monday', () => {
      expect(DaysOfTheWeek.Monday.toString()).toBe("Monday");
  });  

  test('Tuesday is named Tuesday', () => {
    expect(DaysOfTheWeek.Tuesday.toString()).toBe("Tuesday");
  });  
});

describe("collection tests",()=>
{ 
  console.log(DaysOfTheWeek);

  test('values 0 is Monday', () => {
      expect(DaysOfTheWeek.values[0] == DaysOfTheWeek.Monday);
  });  

  test('values 3 is Wednesday', () => {
    expect(DaysOfTheWeek.values[3] == DaysOfTheWeek.Wednesday);
  }); 

  test('values 2 is not Friday', () => {
    expect(DaysOfTheWeek.values[2] != DaysOfTheWeek.Friday);
  });  

  test('superenum size is 7', () => {
    expect(DaysOfTheWeek.size).toBe(7);
  });  

});

describe("index tests",()=>
{ 
  console.log(DaysOfTheWeek);
  const someDay = DaysOfTheWeek.Thursday;


  test('Monday is 0', () => {
      expect(DaysOfTheWeek.Monday.id).toBe(0);
  });  

  test('Wednesday is 2', () => {
    expect(DaysOfTheWeek.Wednesday.id).toBe(2);
  });

  test('Sunday is 6', () => {
    expect(DaysOfTheWeek.Sunday.id).toBe(6);
  });

  test('Our id of Thursday indexes Thursday in values', () => {
    expect(DaysOfTheWeek.values[someDay.id!]).toBe(DaysOfTheWeek.Thursday);
  });
});

/*describe("random test",()=>
{ 
  console.log(DaysOfTheWeek.getRandom());
  console.log(DaysOfTheWeek.getRandom());
  console.log(DaysOfTheWeek.getRandom());
  console.log(DaysOfTheWeek.getRandom());
  console.log(DaysOfTheWeek.getRandom());
  console.log(DaysOfTheWeek.getRandom()); 

});*/