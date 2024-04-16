/* eslint-disable no-lone-blocks */
import { wine_data } from '../constants/constant'
import React, { useEffect, useState } from 'react'


 const Flovidemean = () => {

      const [class1, setClass1]:any = useState([]);
      const [class2, setClass2]:any = useState([]);
      const [class3, setClass3]:any = useState([]);
    
      useEffect(() => {
        
        // seprating Alcohol value acording to class
        const class1Items = wine_data.filter(item => item.Alcohol === 1);
        const class2Items = wine_data.filter(item => item.Alcohol === 2);
        const class3Items = wine_data.filter(item => item.Alcohol === 3);
      
        setClass1(class1Items);
        setClass2(class2Items);
        setClass3(class3Items);
      }, []);
       
      const calculateTotalFlavanoids = (data: any[]) => {
        // to get total of item flavanoids
        return data.reduce((total, item) => total + Number(item.Flavanoids), 0);
    };
    const totalFlovideclass1 = calculateTotalFlavanoids(class1);
    const totalFlovideclass2 = calculateTotalFlavanoids(class2);
    const totalFlovideclass3 = calculateTotalFlavanoids(class3);
   
    // clacluting the mean 
    const meanClass = {
        class1: (totalFlovideclass1 / class1.length).toFixed(3),
        class2: (totalFlovideclass2 / class2.length).toFixed(3),
        class3: (totalFlovideclass3 / class3.length).toFixed(3)
    };
     

    // clacluting the median 

    function calculateMedian(flavanoidsArray:number[]) {
        // sorting the array to find median
      const sortedFlavanoids = flavanoidsArray.sort((a, b) => a - b);
      //to find middle index number
      const middleIndex = Math.floor(sortedFlavanoids.length / 2);
  
      let medianFlavanoids;
      if (sortedFlavanoids.length % 2 === 0) {
          // Even number of values
          medianFlavanoids = (sortedFlavanoids[middleIndex - 1] + sortedFlavanoids[middleIndex]) / 2;
      } else {
          // Odd number of values
          medianFlavanoids = sortedFlavanoids[middleIndex];
      }
  
      return medianFlavanoids;
  }
  
  //values of Flavanoids of diff classes
  const class1Flavanoids = class1.map((item: { Flavanoids: any; }) => item.Flavanoids);
  const class2Flavanoids = class2.map((item: { Flavanoids: any; }) => item.Flavanoids);
  const class3Flavanoids = class3.map((item: { Flavanoids: any; }) => item.Flavanoids);

  const medianClass1 = calculateMedian(class1Flavanoids);
  const medianClass2 = calculateMedian(class2Flavanoids);
  const medianClass3 = calculateMedian(class3Flavanoids);

   const medianClass = {
    medianClass1:medianClass1.toFixed(3),
    medianClass2:medianClass2.toFixed(3),
    medianClass3:medianClass3.toFixed(3)
   }
   


   // calculation of mode

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




const modeClass1 = calculateMode(class1Flavanoids);

const modeClass2 = calculateMode(class2Flavanoids);

const modeClass3 = calculateMode(class3Flavanoids);

const modeClass = {
  modeClass1:Number(modeClass1).toFixed(3),
  modeClass2:Number(modeClass2).toFixed(3),
  modeClass3:Number(modeClass3).toFixed(3)
}
    return({ meanClass,medianClass , modeClass})
    

}

export default Flovidemean