# Generated by Django 2.2.17 on 2021-02-15 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("basketapp", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="basket",
            name="price",
            field=models.PositiveIntegerField(default=0, verbose_name="стоимость"),
        ),
    ]
