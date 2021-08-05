# Generated by Django 3.2.6 on 2021-08-03 23:10

from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=200)),
                ('price', models.FloatField()),
                ('stock', models.IntegerField()),
            ],
        ),
    ]