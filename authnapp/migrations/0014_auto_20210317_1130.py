# Generated by Django 2.2.17 on 2021-03-17 11:30

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('authnapp', '0013_auto_20210312_1015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopuser',
            name='activation_key_expires',
            field=models.DateTimeField(default=datetime.datetime(2021, 3, 19, 11, 30, 18, 396929, tzinfo=utc), verbose_name='актуальность ключа'),
        ),
    ]