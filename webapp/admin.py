# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Detail, EventName, EventRegister
# Register your models here.

admin.site.register(Detail)
admin.site.register(EventName)
admin.site.register(EventRegister)