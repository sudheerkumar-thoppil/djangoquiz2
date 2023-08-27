from django.shortcuts import render,HttpResponse
from.models import Questions
# Create your views here.
def index(request):
    questions =Questions.objects.all()
    return render(request,'index.html',{'questions':questions})
    print(questions)

