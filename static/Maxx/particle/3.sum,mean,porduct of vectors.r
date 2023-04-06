n=readline(prompt = "enter the no of elements to enter into the list: ")
v=c()
for (i in 1:n) {
  i=as.integer(readline(prompt = "Enter the number :"))
  v<-append(v,i)
}
cat("Sum of the vector:",sum(v))
cat("mean of the vector ",mean(v))
cat("porduct of the vector",prod(v))