import DoublyLinkedList from "./DoublyLinkedList";

/**
 * O(1) add
 * O(n) remove !
 * O(1) find max
 * O(1) find min
 * O(1) find median
 * O(n) find !
 */
export default class MedianList<T>
{    
    private min:T|null;
    private lowerList: DoublyLinkedList<T> = new DoublyLinkedList();
    private median:T | null;
    private upperList: DoublyLinkedList<T> = new DoublyLinkedList();
    private max:T|null;
    //
    private compareTo:(a:T|null,b:T|null)=>number
    //
    private size:number = 0;

    constructor(greaterThanFunction:any|null = null)
    {
        this.compareTo = greaterThanFunction;
    }

    static forNumbers() : MedianList<number>
    {
        return new MedianList((a,b)=>a > b ? 1 : a < b ? -1 : 0);
    }

    private isGreaterThan(a,b)
    {
        return this.compareTo(a,b) > 0;
    }

    /*find(predicate:(t:T|null)=>boolean)
    {
        if(predicate(this.median))
        {
            return this.median;
        }
        if(predicate(this.max))
        {
            return this.max;
        }
        if(predicate(this.min))
        {
            return this.min;
        }
        return 
    }*/

    get length()
    {
        return this.size;
    }

    getMin()
    {
        if(this.size == 1)
        {
            return this.median;
        }
        return this.min;
    }

    getMax()
    {
        if(this.size == 1)
        {
            return this.median;
        }
        return this.max;
    }

    getMedian()
    {
        if(this.size == 2)
        {
            return this.min;
        }
        return this.median;
    }

    add(t:T)
    {
        if(this.size == 0)
        {
            this.median = t;
            this.size = 1;
        }
        else if(this.size == 1)
        {
            if(this.isGreaterThan(t,this.median))
            {
                this.min = this.median;
                this.max = t;
            }
            else
            {
                this.max = this.median;
                this.min = t;
            }
            this.size = 2;
        }
        else if(this.size == 2)
        {
            if(this.isGreaterThan(t, this.min))
            {
                if(this.isGreaterThan(t, this.max))
                {
                    this.median = this.max;
                    this.max = t;
                }
                else
                {
                    this.median = t;
                }
            }
            else
            {
                this.median = this.min;
                this.min = t;
            }
            this.size = 3;
        }
        else
        {
            if(this.isGreaterThan(t,this.max))
            {
                var temp = this.max;
                this.max = t;
                this.addToMiddle(temp!);
            }
            else if(this.isGreaterThan(this.min, t))
            {
                var temp = this.min;
                this.min = t;
                this.addToMiddle(temp!);
            }
            else
            {
                this.addToMiddle(t);
            }
            this.size++;
        }
    }

    private addToMiddle(t:T)
    {        
        if(this.isGreaterThan(t, this.median))
        {           
            if(this.upperList.size > this.lowerList.size)
            {
                this.lowerList.addToBack(this.median!);
                this.median = t;
            }
            else
            {
                this.upperList.addToFront(t);
            }
        }
        else
        {
            if(this.lowerList.size > this.upperList.size)
            {
                this.upperList.addToFront(this.median!);
                this.median = t;
            }
            else
            {
                this.lowerList.addToBack(t);
            }
        }
    }
}