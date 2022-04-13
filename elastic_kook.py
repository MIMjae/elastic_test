
from elasticsearch import Elasticsearch

# Password for the 'elastic' user generated by Elasticsearch
ELASTIC_PASSWORD = " "

CLOUD_ID = " "
# Create the client instance
client = Elasticsearch(
    hosts=[" "],
    cloud_id=CLOUD_ID,
    basic_auth=("elastic", ELASTIC_PASSWORD)
)

def createIndex(client):
    client.indices.create(
        index = "current_location",
        body = {
            "settings" : {
                "number_of_shards": 1
            },
            "mappings" : {
                "properties" : {
                    "current_loc" : {"type":"geo_point"}
                }
            }
        }
    )

def dataInsert(client, data):
    doc= {
        "current_loc" : [data["longitude"], data["latitude"]]
    }
    res = client.index(index="current_location", id=2, body=doc)
    print(res)

# createIndex(client)
# dataInsert(client, x)
# Successful response!
# print(client.info())
