# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def greater_than(x, y):
    if x > y:
        return x
    return y


print(greater_than(5, 7))  # 7

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    sum = 0
    for number in list:
        sum += number

    return sum / len(list)


print(average([1, 2, 3, 4, 5, 6]))  # 3.5

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_square(n):
    for number in range(0, n):
        print(n * "*")


print_square(4)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def biggest_name(list):
    biggest = ""
    for name in list:
        if len(biggest) < len(name):
            biggest = name
    return biggest


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).


# def wall_paint_calc(area):
#     can_price = 80.00
#     meters_per_liter = 3
#     liters_per_can = 18
#     required_liters = area / meters_per_liter
#     required_cans = required_liters // liters_per_can
#     if required_liters % liters_per_can:
#         required_cans += 1
#     return (required_cans, required_cans * can_price)

# ou

import math

def wall_paint_calc(area):
    can_price = 80.00
    meters_per_liter = 3
    liters_per_can = 18
    required_liters = area / meters_per_liter
    required_cans = math.ceil(required_liters / liters_per_can)
    return (required_cans, required_cans * can_price)

print(wall_paint_calc(55))


# Exercício 6: Crie uma função que receba os três lados de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

def triangle_type(side1, side2, side3):
  if side1 == side2 == side3:
    return 'equilátero'
  if (side1 + side2 <= side3) or (side1 + side3 <= side2) or (side2 + side3  <= side1):
    return 'não é um triângulo'
  if side1 != side2 and side2 != side3 and side1 != side3:
    return 'escaleno'
  return 'isósceles'

print(triangle_type(2,8,3))
print(triangle_type(5,5,5))
print(triangle_type(2,3,2))
print(triangle_type(2,4,3))