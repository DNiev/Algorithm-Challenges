/**
 * @param {number[]} height
 * @return {number}
 */
height = [10,5,10]

var maxArea = function(height) {

    //create a variable to hold our answer
    let largestArea = 0;
    //create a left marker at position 0 in the array
    let leftMarker = 0;
    //create a right marker a the final position in the array
    let rightMarker = height.length - 1;

    //run the following code until the markers meet
    while (leftMarker < rightMarker) {
        //this will set our max height to the shorter of the two columns (or water will spill out)
        const maxHeight = Math.min(height[leftMarker], height[rightMarker]);
        //finds the area of the current box
        const area = maxHeight * (rightMarker - leftMarker);

        //take the largest area along the way and store it to our variable
        largestArea = Math.max(largestArea, area);

        //move the markers
        if (height[leftMarker] < height[rightMarker]) {
            leftMarker++;
        } else {
            rightMarker--;
        }
    }

    return(largestArea);
}
 

maxArea(height)