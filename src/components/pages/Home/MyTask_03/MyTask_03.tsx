function MyTask_03() {

    let isLoading: boolean = true;
    
    isLoading = false;

    let num: number | string = 50;
    // let num;
    num = 32;
    num = "33"
    console.log(num);

    //  type - name always with UpperCase
    type Loading = 'loading';
    type Success = 'success';
    type Err = 'error';

    type Status = Loading | Success | Err;

    let stat: Status = "loading";

    console.log(typeof(num)); // get the time of (smth)

    console.log("isArray: ", Array.isArray(num));


    return(
        <div>Hi m 3</div>
    )
}

export default MyTask_03;