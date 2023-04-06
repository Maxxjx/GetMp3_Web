n<-as.numeric(readline(prompt="Enter which table: "))
m<-as.numeric(readline(prompt="upto which step: "))
for(i in 1:m){
  cat(i,"x",n,"=",i*n,"\n")
}