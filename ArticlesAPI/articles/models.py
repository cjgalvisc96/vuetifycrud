from djongo import models


class Article(models.Model):
    _id=models.ObjectIdField()
    description = models.CharField(max_length=200)
    price = models.FloatField()
    stock = models.IntegerField()
