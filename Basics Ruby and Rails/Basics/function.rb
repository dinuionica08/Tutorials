# this is a function that is gonna print a message
def hello_name # a function start with BEGIN
  @name = "Tom"
  puts "Hello #@name"
end 
# this is a function that is gonna print sum of two numbers
def sum_two_number
  @number1= 2
  @number2 = 3
  puts @number1 + @number2
end
# this represent the main function of the the program
begin
  sum_two_number
  hello_name
end