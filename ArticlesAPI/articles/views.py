from bson import ObjectId
from rest_framework import generics, status
from rest_framework.response import Response
from articles.models import Article
from articles.serializers import ArticleSerializer


class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


    def retrieve(self, request, *args, **kwargs):
        _id = self.kwargs.get('_id')
        object = Article.objects.get(_id=_id)
        serializer = ArticleSerializer(object)
        return Response(serializer.data)