import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # 读取 CSV 文件
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        data = [row for row in csv_reader]

    # 将数据写入 JSON 文件
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json_file.write(json.dumps(data, indent=4))

csv_to_json('data.csv', 'data.json')