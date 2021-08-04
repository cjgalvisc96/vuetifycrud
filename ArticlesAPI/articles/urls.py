from django.urls import path, register_converter

from articles.views import ArticleListAPIView, ArticleRetrieveUpdateDestroyAPIView
from articles.converters import ObjectIDConverter

register_converter(ObjectIDConverter, 'object_id_converter')

urlpatterns = [
    path(
        'articles/',
        ArticleListAPIView.as_view(),
        name="articles-list"
    ),
    path(
        'articles/<object_id_converter:_id>/',
        ArticleRetrieveUpdateDestroyAPIView.as_view(),
        name="articles-actions"
    )
]