# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-26 16:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Auth', '0003_auto_20171226_2134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='mobile',
            field=models.TextField(max_length=15),
        ),
    ]
