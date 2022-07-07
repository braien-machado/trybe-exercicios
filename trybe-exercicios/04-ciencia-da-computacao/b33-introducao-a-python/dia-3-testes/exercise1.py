# 🚀 Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções:
# Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
# Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como "FizzBuzz"
# ao invés do número.
# Exemplo: 3 -> [1, 2, "Fizz"].


def is_divisible_by(dividend, divisor):
    return dividend % divisor == 0


def check_fizz_buzz(number):
    is_divisible_by_three = is_divisible_by(number, 3)
    is_divisible_by_five = is_divisible_by(number, 5)

    if is_divisible_by_three and is_divisible_by_five:
        return "FizzBuzz"
    if is_divisible_by_three:
        return "Fizz"
    if is_divisible_by_five:
        return "Buzz"
    return number


def list_number_fizz_buzz(n):
    return [check_fizz_buzz(number) for number in range(1, n + 1)]


if __name__ == "__main__":
    while True:
        try:
            number = int(input("Digite um número: "))
            print(list_number_fizz_buzz(number))

            break
        except ValueError:
            print("Entrada inválida. Tente novamente.")
