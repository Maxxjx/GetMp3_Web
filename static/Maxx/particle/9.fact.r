n<-as.integer(readline(prompt = "enter a number: "))
fact <- function(n) {
  if (n < 0){
    cat ("Sorry, factorial does not exist for negative numbers", "\n")
  } else if (n == 0){
    cat ("The factorial of 0 is 1", "\n")
  } else {
    results = 1
    for (i in 1:n){
      results = results * i
    }
    cat(paste("The factorial of", n ,"is", results, "\n"))
  }
}
fact(n)6
