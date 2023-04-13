import Playlist from '../src/Playlist';

describe("empty tests",()=>
{
  var playlist:Playlist<string> = new Playlist();

  test('size is 0', () => {
      expect(playlist.size()).toBe(0);
    });

  test('getRandom is nully', () => {
      expect(playlist.getRandom() == null);
    });
});

describe("add red tests",()=>
{
  var playlist:Playlist<string> = new Playlist();
  playlist.add("red");

  test('size is 1', () => {
      expect(playlist.size()).toBe(1);
    });

  test('getRandom is red', () => {
      expect(playlist.getRandom()).toBe("red");
    });
});

describe("add red, then get random tests",()=>
{
  var playlist:Playlist<string> = new Playlist();
  playlist.add("red");
  playlist.getRandom();

  test('size is 1', () => {
      expect(playlist.size()).toBe(1);
    });

  test('getRandom is red', () => {
      expect(playlist.getRandom()).toBe("red");
    });
});

describe("add red, add green tests",()=>
{
  var playlist:Playlist<string> = new Playlist();
  playlist.add("red");
  playlist.add("green");  

  test('size is 2', () => {
      expect(playlist.size()).toBe(2);
    });

  test('getRandom is red or green, getRandom again is the other', () => {
      expect(()=>{
        var one = playlist.getRandom();
        var two = playlist.getRandom();
        return (one == 'red' && two =='green') || (one == 'green' && two == 'red')
      });
    });
});

describe("add red, add green, add blue tests",()=>
{
  var playlist:Playlist<string> = new Playlist();
  playlist.add("red");
  playlist.add("green");  
  playlist.add("blue");  

  test('size is 3', () => {
      expect(playlist.size()).toBe(3);
    });

  test('getRandom is differnt for 3 calls', () => {
      expect(()=>{
        var one = playlist.getRandom();
        var two = playlist.getRandom();
        var three = playlist.getRandom();
        return one != two && two != three && three != one;
      });
    });
});

describe("add red, get random , add green, add blue tests",()=>
{
  var playlist:Playlist<string> = new Playlist();
  playlist.add("red");
  playlist.getRandom();
  playlist.add("green");  
  playlist.add("blue");  

  test('size is 3', () => {
      expect(playlist.size()).toBe(3);
    });

  test('getRandom is green or blue, then the other', () => {
      expect(()=>{
        var one = playlist.getRandom();
        var two = playlist.getRandom();
        return (one == 'blue' && two =='green') || (one == 'green' && two == 'blue')
      });
    });
});