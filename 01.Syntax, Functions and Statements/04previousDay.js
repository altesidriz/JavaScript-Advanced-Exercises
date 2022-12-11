function previousDay(year, month, day){
    let calculatedDate = new Date(year, month-1, day-1);
    //console.log(calculatedDate);
    console.log(`${calculatedDate.getFullYear()}-${calculatedDate.getMonth()+1}-${calculatedDate.getDate()}`);    
}
previousDay(2016, 9, 30)
previousDay(2016, 10, 1)