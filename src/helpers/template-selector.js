module.exports = function(options) {
  
  var currentPage = options.data.root.page;
  var data = options.hash.data;
  var output = options.hash.output;
  
  if(currentPage === data.templateId) {
    
    return data[output];
    
  } else {
    
    return;
  
  }
  
}