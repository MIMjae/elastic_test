from flask import Flask, render_template,request
from elastic_kook import dataInsert
from elasticsearch import Elasticsearch

app = Flask(__name__)

ELASTIC_PASSWORD = "L0iFQrmhaqpL0Dc1W8vwrFc8"

CLOUD_ID = "kookdata:YXAtbm9ydGhlYXN0LTIuYXdzLmVsYXN0aWMtY2xvdWQuY29tOjkyNDMkZjhmY2IzMDdhNmY1NDcxYTgxOGZiYjljZTlhN2NkY2IkNmZiNzg5Yzg1YmIzNGFhNmFiNjQ5OTYzMzdmNGYzZDA="
# Create the client instance
client = Elasticsearch(
    #hosts=["https://kookdata.kb.ap-northeast-2.aws.elastic-cloud.com:9243"],
    cloud_id=CLOUD_ID,
    basic_auth=("elastic", ELASTIC_PASSWORD)
)

@app.route('/', methods=['GET'])
def main():
    if request.method == 'GET':
        return render_template("index.html")

@app.route('/analysis', methods=['GET'])
def analysis():
    if request.method == 'GET':
        return render_template("accident_analysis_mb.html")

@app.route('/hazard', methods=['GET'])
def hazard():
    if request.method == 'GET':
        return render_template("accident_hazard2_mb.html")

@app.route('/get_location', methods=['POST'])
def get_location():
    if request.method == "POST" :
        data = request.get_json()
        #print(type(data))
        print("받아온 정보는 다음과 같다 ", data)
        dataInsert(client, data)
        return {}

@app.route('/accident_eye', methods=['GET'])
def accident_eye():
    if request.method == 'GET':
        return render_template("accident_eye.html")

@app.route('/accident_category', methods=['GET'])
def accident_category():
    if request.method == 'GET':
        return render_template("accident_category.html")

if __name__ == "__main__":
    app.run(host='localhost', debug=False)