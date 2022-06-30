# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
# Entrada:
# PEDRO
# Saída:
# PEDRO
# PEDR
# PED
# PE
# P

def vertical_inverted_ladder(word):
  while len(word) > 0:
    print(word)
    head, *tail = word
    word = ''.join(tail)


if __name__ == '__main__':
  name = input('Digite um nome: ')
  vertical_inverted_ladder(name)
