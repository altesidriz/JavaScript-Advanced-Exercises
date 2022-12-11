function roadRadar(curSpeed, area) {

    let areaValues = {
      motorway: 130,
      initi: 90,
      city: 50,
      residential: 20
    }
    
    function speedDifference(givvenSpeed, speedLimit) {
        difference = givvenSpeed - speedLimit;
        if (givvenSpeed > speedLimit) {
            return (`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${spdDiffMsg(givvenSpeed, speedLimit)}`);
        } else {
            return (`Driving ${givvenSpeed} km/h in a ${speedLimit} zone`);
        }
    }
 
    function spdDiffMsg(speed, speedLimit) {
        let message = '';
        let speeDifference = Math.abs(speedLimit - speed);
        if (speeDifference <= 20) {
            message = 'speeding';
        } else if (speeDifference <= 40) {
            message = 'excessive speeding';
        } else {
            message = 'reckless driving'
        }
        return message;
    }
 
    function printResult(curSpeed, sLimit) {
        return speedDifference(curSpeed, sLimit);
    }
    
    return printResult(curSpeed, areaValues[area]);
}
console.log(roadRadar(200, 'motorway'));



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function roadRadar(curSpeed, area) {
    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        // default: console.log('Error!');
        //     break;
    }
 
    function speedDifference(givvenSpeed, speedLimit) {
        difference = givvenSpeed - speedLimit;
        if (givvenSpeed > speedLimit) {
            return (`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${spdDiffMsg(givvenSpeed, speedLimit)}`);
        } else {
            return (`Driving ${givvenSpeed} km/h in a ${speedLimit} zone`);
        }
    }
 
    function spdDiffMsg(speed, speedLimit) {
        let message = '';
        let speeDifference = Math.abs(speedLimit - speed);
        if (speeDifference <= 20) {
            message = 'speeding';
        } else if (speeDifference <= 40) {
            message = 'excessive speeding';
        } else {
            message = 'reckless driving'
        }
        return message;
    }
 
    function printResult(curSpeed, speedLimit) {
        return speedDifference(curSpeed, speedLimit);
    }
    
    return printResult(curSpeed, speedLimit);
}
console.log(roadRadar(200, 'motorway'))