n<-as.integer(readline(prompt = "Enter the no of years: "))
p<-as.integer(readline(prompt = "Enter the princeple amount: "))
r<-as.integer(readline(prompt="Enter the rate of interest: "))
s.i<- n*p*r/100

cat("The simple interest of ",p,"princeple with ",r,"rate of interest in",n,"no of years is:",s.i)