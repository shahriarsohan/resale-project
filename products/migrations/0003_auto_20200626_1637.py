# Generated by Django 3.0.7 on 2020-06-26 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_products_featured'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='documents/%Y/%m/%d/'),
        ),
    ]
