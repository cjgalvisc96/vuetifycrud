import json
from rest_framework import generics, status
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from django_filters.rest_framework import DjangoFilterBackend
from articles.models import Article
from articles.serializers import ArticleSerializer


class MyPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size' 
    max_page_size = 100
    

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = MyPagination
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = ('description', 'price', 'stock')
    search_fields = ('description', 'price', 'stock')
    ordering_fields = ('stock',)


class ArticleRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    lookup_field = '_id'


class TestJsonView(APIView):
    parser_classes = (MultiPartParser, )

    def post(self, request):
        file = request.data.get('file')
        file_content = file.read().decode('utf-8')
        response = json.loads(file_content)
        return Response(response, status=status.HTTP_200_OK)
