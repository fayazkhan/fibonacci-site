from django.http import HttpResponse
from django.shortcuts import render
from memoize import memoize
# Create your views here.


def index(request):
    return render(request, 'index.html')


def calculate(request):
    return HttpResponse(str(fibonacci(int(request.GET['n']))))


@memoize()
def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
