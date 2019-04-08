function check_a_number_is_prime(number){
    var isCheck = true;
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            isCheck = false;
        }
    }
    return(isCheck);
}

function find_prime_numbers_in_range(){
    document.write("<h>The prime numbers in the range are: <br></h>")
    for (let i = 1; i < range; i++){
        if (check_a_number_is_prime(i)){
            document.write(i + "<br/>");
        }
    }

}