


export function assume(desc:string, runnable: any, binary:any, result:any)
{
    if(binary(runnable(),result))
    {
        console.log(desc + " : " + "PASSED");
    }
    else 
    {
        console.log(desc + " : " + "FAILED");
    }
};

export function equality(a:any,b:any)
{
    return a == b;
}