# Generated by Django 4.2.7 on 2024-09-11 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_course_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
