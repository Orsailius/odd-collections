import SuperEnum from "../src/SuperEnum";

export class $DaysOfTheWeek extends SuperEnum<$DaysOfTheWeek>
{
    randomStuff:number = 0;

    getFirstLetter()
    {
        return this.name[0];
    }
}    

const values = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const DaysOfTheWeek = SuperEnum.create($DaysOfTheWeek, new $DaysOfTheWeek(), values);

export default DaysOfTheWeek;

