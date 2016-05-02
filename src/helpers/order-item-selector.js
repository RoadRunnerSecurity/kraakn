module.exports = function(options) {
  
  var queryParam = options.hash.queryParam;
  var queryValue = options.hash.queryValue;
  var orderItem = options.hash.orderItem;
  console.log(options.hash);
  if(orderItem[queryParam] === queryValue) {
    
    return orderItem;
    
  } else {
    
    return;
  
  }
  return
  
}