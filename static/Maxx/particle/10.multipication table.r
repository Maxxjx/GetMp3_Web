j<-as.integer(readline(prompt = "enter a number: "))
n<-as.integer(readline(prompt = "enter the number of times: "))
for(i in 1:n){
  cat(j,"x",i,"=",j*i,"\n")
}