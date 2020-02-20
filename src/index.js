
exports.min = function min (array) {
  let minValue=Number.MAX_VALUE,res;
   
    for (var i = 0; i < arguments.length; i++) {
      if(minValue>arguments[i])
      minValue=arguments[i]
    }
    res=minValue;
    Math.round(res)==Math.round(Number.MAX_VALUE)?res=0:res;
    console.log("min value is "+res);
    return res;
}

exports.max = function max (array) {
  let maxValue=Number.MIN_VALUE,res;
   
    for (var i = 0; i < arguments.length; i++) {
      if(maxValue<arguments[i])
      maxValue=arguments[i]
    }
    res=maxValue;
    Math.round(res)==Math.round(Number.MIN_VALUE)?res=0:res;
    console.log("max value is "+res);
    return res;
}

exports.avg = function avg (array) {
  let sum=0,res;
    for (var i = 0; i < arguments.length; i++) {
      sum+= arguments[i];
    }
    res=sum/arguments.length;
    console.log("avg value is "+res);
    return res;
}
