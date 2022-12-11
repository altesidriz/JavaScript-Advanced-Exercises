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
        console.log(speedDifference(curSpeed, speedLimit));
    }

    return printResult(curSpeed, speedLimit);
}
roadRadar(200, 'motorway');



