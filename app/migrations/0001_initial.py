# Generated by Django 5.1.1 on 2025-02-23 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='media/')),
                ('description', models.TextField()),
                ('project_type', models.CharField(max_length=100)),
                ('project_type_color', models.CharField(choices=[('green', 'Green'), ('orange', 'Orange'), ('blue', 'Blue')], default='blue', max_length=10)),
                ('url', models.URLField()),
            ],
        ),
    ]
