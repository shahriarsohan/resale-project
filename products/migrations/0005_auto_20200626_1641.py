# Generated by Django 3.0.7 on 2020-06-26 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20200626_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/products/%Y/%m/%d/'),
        ),
    ]
