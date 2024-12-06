let sentenceBuilder = {

subject: "I",

verb: "am",

object: "coding",

buildSentence: function(subject,verb,object) { 
  if(subject||verb||object){
  return subject+" "+verb+" "+object;
  }else{
    return this.subject+" "+this.verb+" "+this.object;
  }
},

updateProperty: function(property, value) { 
  if(property===this.key){
  this.key+=value;
  return this.subject+" "+this.verb+" "+this.object;
  }else{
    return "invalid property";
  }
} 
};
console.log(sentenceBuilder.buildSentence("who","are","completed"));
console.log(sentenceBuilder.buildSentence());
console.log(sentenceBuilder.updateProperty("verb","are"));
