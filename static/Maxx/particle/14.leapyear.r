leap<-function(n){
 year<-0
   if(n%%4==0) { year=1}
 else { year=0}
  if(year==1) cat(n,"is a leap year")
  else cat(n,"is not a leap year")
  }
n<-as.integer(readline(prompt = "Enter the year : "))
leap(n)