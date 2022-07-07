from exercise1 import is_divisible_by, check_fizz_buzz
import pytest


# test is_divisible_by
def test_is_divisible_by_returns_true():
    """When first param is divisible by second function must return True"""
    assert is_divisible_by(16, 2) is True


def test_is_divisible_by_returns_false():
    """When first param is divisible by second function must return False"""
    assert is_divisible_by(16, 3) is False


def test_is_divisible_by_zero_raises_exception():
    """When second param is zero function must raises exception"""

    pattern = "integer division or modulo by zero"
    with pytest.raises(ZeroDivisionError, match=pattern):
        is_divisible_by(5, 0)


def test_is_divisible_by_when_first_param_is_not_number_raises_exception():
    """When first param is not a number function must raises exception"""
    with pytest.raises(
        TypeError, match="not all arguments converted during string formatting"
    ):
        is_divisible_by("16", 2)


def test_is_divisible_by_when_second_param_is_not_number_raises_exception():
    """When second param is not a number function must raises exception"""
    pattern = "unsupported operand type\\(s\\) for %: 'int' and 'str'"
    with pytest.raises(TypeError, match=pattern):
        is_divisible_by(16, "2")


# test check_fizz_buzz
def test_check_fizz_buzz_when_number_is_divisible_only_by_three():
    """When number divisible by three function must return Fizz"""
    assert check_fizz_buzz(9) == "Fizz"


def test_check_fizz_buzz_when_number_is_divisible_only_by_five():
    """When number divisible by five function must return Buzz"""
    assert check_fizz_buzz(10) == "Buzz"


def test_check_fizz_buzz_when_number_is_divisible_by_both_three_and_five():
    """When number divisible by three and five function must return FizzBuzz"""
    assert check_fizz_buzz(15) == "FizzBuzz"


def test_check_fizz_buzz_when_number_is_divisible_by_neither_three_nor_five():
    """When number not divisible by three nor five function must return it"""
    assert check_fizz_buzz(11) == 11
