pathName = (fileName) => {
  let fileNameArr = fileName.split('.');
  let extension = fileNameArr[fileNameArr.length - 1];
  console.log(extension)
  let file = fileNameArr.filter((element,index,fileNameArr)=>{
    return index!= fileNameArr.length-1;
   })
  let actualFileName = file.join('_');
  fileName = actualFileName.replace(/ /g,'_')
  return`${fileName}.${extension}`
  
}

module.exports = {
  pathName
}