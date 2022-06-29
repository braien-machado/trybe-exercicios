PI = 3.14


def square(side):
    """Recebe um número n, retorna o quadrado de n"""
    return side**2


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * (radius**2)


if __name__ == "__main__":
    print(print.__doc__)
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
