# Generated by Django 2.2.17 on 2021-03-06 19:49

import datetime

from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ("authnapp", "0004_auto_20210306_1939"),
    ]

    operations = [
        migrations.AlterField(
            model_name="shopuser",
            name="activation_key_expires",
            field=models.DateTimeField(
                default=datetime.datetime(2021, 3, 8, 19, 49, 2, 954172, tzinfo=utc), verbose_name="актуальность ключа"
            ),
        ),
    ]
