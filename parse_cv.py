#!/usr/bin/env python
import os
from dotenv import load_dotenv
from jsonschema import validate
import yaml
import json
import datetime

def DateEncoder(obj):
  if isinstance(obj, (datetime.datetime, datetime.date)):
      return obj.strftime('%Y-%m-%d')

def main():

    load_dotenv()
    input_dir = os.getenv("CV_DATA_DIR")
    input_file = os.getenv("CV_FILE")
    print(input_file)
    output_dir = "./src/data"

    with open(f"{input_dir}/{input_file}") as input_file:
        data = yaml.safe_load(input_file)

    with open(f"{output_dir}/cv.json", "w") as output_file:
        output_file.write(json.dumps(data, indent=2, default=DateEncoder))

    print("success fully wrote new cv file")

if __name__ == '__main__':
    raise SystemExit(main())
