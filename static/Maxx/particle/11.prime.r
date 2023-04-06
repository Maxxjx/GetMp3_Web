n=as.numeric(readline(prompt="Enter a number :"))
n1=n/2
for(x in 2:n1){
  prime=TRUE
  if(n%%x == 0){
    prime= FALSE
    break
  }
if(n==2) prime=TRUE
  if(prime) cat("The given number",n, "is an prime number")

  else cat("The given number",n, "is an composite number")
  
}
