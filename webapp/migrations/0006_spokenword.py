# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-27 15:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0005_auto_20180127_1244'),
    ]

    operations = [
        migrations.CreateModel(
            name='SpokenWord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('mobile', models.TextField(max_length=15)),
            ],
        ),
    ]