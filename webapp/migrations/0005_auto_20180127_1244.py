# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-27 07:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0004_social'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventname',
            name='shortname',
            field=models.CharField(max_length=50),
        ),
    ]
