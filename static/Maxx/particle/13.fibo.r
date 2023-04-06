# Generate Fibonacci sequence up to nth number
n <-as.integer(readline(prompt = "enter the no of fibo series to be genetreated: "))
fibonacci <- numeric(n)
fibonacci[1] = 1
fibonacci[2] = 1
if(n<1) cat("zero and negetive no are not allowed")
for (i in 3:n) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

print(fibonacci)