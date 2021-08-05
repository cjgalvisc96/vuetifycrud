from rest_framework import generics
from articles.models import Article
from articles.serializers import ArticleSerializer


class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    lookup_field = '_id'