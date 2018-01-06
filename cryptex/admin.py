# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import player
from .models import answer
from django.contrib import admin

# Register your models here.
admin.site.register(player)
admin.site.register(answer)