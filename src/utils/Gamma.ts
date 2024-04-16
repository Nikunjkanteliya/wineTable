
import { wine_data } from '../constants/constant'


const Gamma = () => {
    function calculateGamma(wine_data:any[]) {
        return wine_data.map(point => ({
            ...point,
            Gamma: (point.Ash * point.Hue) / point.Magnesium
        }));
    }
    
    // Function to calculate mean of an array of values
    function calculateMean(array:any[]) {
       
        const sum = array.reduce((total, value) => total + value, 0);
        return sum / array.length;
    }
    
    // Function to calculate median of an array of values
    function calculateMedian(array:any[]) {
        const sortedArray = array.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedArray.length / 2);
    
        if (sortedArray.length % 2 === 0) {
            return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
        } else {
            return sortedArray[middleIndex];
        }
    }
    
    // Function to calculate mode of an array of values
   // Function to calculate the mode (most frequently occurring value) of an array
function calculateMode(array:any[]) {
    // Create an object to store the count of each unique value
    const countMap = array.reduce((count, value) => {
        // Increment the count for the current value in the map
        count[value] = (count[value] || 0) + 1;
        return count;
    }, {});

    // Initialize variables to keep track of the maximum count and the mode value
    let maxCount = 0;
    let mode;

    // Iterate through each key-value pair in the count map
    for (const value in countMap) {
        // Check if the count of the current value is greater than the maximum count encountered so far
        if (countMap[value] > maxCount) {
            // If yes, update the maximum count and set the mode to the current value
            maxCount = countMap[value];
            mode = value;
        }
    }

    // Return the mode value
    return mode;
}

    
    // Calculate Gamma for the dataset
    const datasetWithGamma = calculateGamma(wine_data);
    
    // Extract Gamma values for each class
    const class1Gamma = datasetWithGamma.filter(point => point.Alcohol === 1).map(point => point.Gamma);
    const class2Gamma = datasetWithGamma.filter(point => point.Alcohol === 2).map(point => point.Gamma);
    const class3Gamma = datasetWithGamma.filter(point => point.Alcohol === 3).map(point => point.Gamma);
    
    // Calculate mean, median, mode for each class
    const meanClass1Gamma = calculateMean(class1Gamma);
    const meanClass2Gamma = calculateMean(class2Gamma);
    const meanClass3Gamma = calculateMean(class3Gamma);
    const medianClass1Gamma = calculateMedian(class1Gamma);
    const medianClass2Gamma = calculateMedian(class2Gamma);
    const medianClass3Gamma = calculateMedian(class3Gamma);
    const modeClass1Gamma = calculateMode(class1Gamma);
    const modeClass2Gamma = calculateMode(class2Gamma);
    const modeClass3Gamma = calculateMode(class3Gamma);
    
    
    
        const gammaMean = {
            meanClass1Gamma:meanClass1Gamma.toFixed(3),
            meanClass2Gamma:meanClass2Gamma.toFixed(3),
            meanClass3Gamma:meanClass3Gamma.toFixed(3)

        }
        const gammaMedian = {
            medianClass1Gamma:medianClass1Gamma.toFixed(3),
            medianClass2Gamma:medianClass2Gamma.toFixed(3),
            medianClass3Gamma:medianClass3Gamma.toFixed(3)
        }
        const gammaMode = {
            modeClass1Gamma:Number(modeClass1Gamma).toFixed(3),
            modeClass2Gamma:Number(modeClass2Gamma).toFixed(3),
            modeClass3Gamma:Number(modeClass3Gamma).toFixed(3)
        }
    return ({
        gammaMean , gammaMedian ,gammaMode
    })
}

export default Gamma