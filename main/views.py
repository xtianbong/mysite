from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    return render(request,"main/index.html",{
        "featured":Project.objects.filter(featured=True),
        "projects":Project.objects.filter(complete=True)
    })

def contact(request):
    return render(request,"main/contact.html")

def projects(request):
    return render(request,"main/projects.html",{
        "projects":Project.objects.filter(complete=True)
    })