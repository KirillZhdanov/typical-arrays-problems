
exports.min = function min (array) {
let minValue=Number.MAX_VALUE,res=0;
    if(array!=undefined){
    for (let i = 0; i < arguments.length; i++) {
      if(minValue>arguments[i])
      minValue=arguments[i]
    }
    for (let i = 0; i < array.length; i++) {
      if(minValue>array[i])
      minValue=array[i]
    }
  } res=0;
    res+=minValue;
    res=Math.round(res)==Math.round(Number.MAX_VALUE)?0:res;
    console.log("min value is "+res);
    return res;
}

exports.max = function max (array) {
  let maxValue=Number.MIN_VALUE,res=0;
    if(array!=undefined){
    for (let i = 0; i < arguments.length; i++) {
      if(maxValue<arguments[i])
      maxValue=arguments[i]
    }
    for (let i = 0; i < array.length; i++) {
      if(maxValue<array[i])
      maxValue=array[i]
    }
  } 
    res=0;
    res+=maxValue;
    Math.round(res)==Math.round(Number.MIN_VALUE)?res=0:res;
    console.log("max value is "+res);
    return res;
}

exports.avg = function avg (array) {
 let sum=0,res=0;
    if(array!==undefined && array.length!==0){
        
    for (let i = 0; i < array.length; i++) {
      sum+= array[i];
    }
      res=0;
    res=sum/array.length;
    console.log("avg value is "+res);
    return res;
}
}
