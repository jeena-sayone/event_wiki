# Generated by Django 4.0.6 on 2022-07-15 12:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EventApp', '0004_rename_fk_user_id_clseventdetails_fk_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clsuser',
            old_name='vhr_actual_name',
            new_name='vhr_email',
        ),
    ]
