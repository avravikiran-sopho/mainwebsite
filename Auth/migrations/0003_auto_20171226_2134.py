# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-26 16:04
from __future__ import unicode_literals

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('Auth', '0002_auto_20171226_2132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='mobile',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128),
        ),
    ]
