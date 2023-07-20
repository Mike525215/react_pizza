from django.db import models

class Pizza(models.Model):
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    image = models.ImageField(upload_to='pizzas/')
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Pizza'
        verbose_name_plural = 'Pizzas'


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'