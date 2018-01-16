from django.db import models

class SensorData(models.Model):
    #check on this
    battery = models.DecimalField(max_digits=3, demical_places=2, null=True)
    created_at = models.DateTimeField(null=True)
    data1 = models.IntegerField(null=True)
    data2 = models.IntegerField(null=True)
    data3 = models.IntegerField(null=True)
    message_id = models.IntegerField(null=True)
    network = models.IntegerField(null=True)
    node_id = models.IntegerField(null=True)
    ram = models.IntegerField(null=True)
    recieved_at = models.DateTimeField(auto_now_add=True)
    record_id = models.CharField(max_length=100, blank=True, default='')
    timestamp = models.DateTimeField(auto_now_add=True)
    version = models.IntegerField(null=True)
