# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-05-09 21:54
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensordata', '0011_auto_20180308_1659'),
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ver', models.IntegerField()),
                ('json', django.contrib.postgres.fields.jsonb.JSONField(default=dict)),
            ],
        ),
    ]
