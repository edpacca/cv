#!/usr/bin/env python
from jsonschema import validate
import yaml
import json
import datetime

def DateEncoder(obj):
  if isinstance(obj, (datetime.datetime, datetime.date)):
      return obj.strftime('%Y-%m-%d')

def main():

    input_dir = "./data/"
    output_dir = "./src/data"

    with open(f"{input_dir}/cv_000.yml") as input_file:
        data = yaml.safe_load(input_file)

    with open(f"{output_dir}/cv.json", "w") as output_file:
        output_file.write(json.dumps(data, indent=2, default=DateEncoder))

    print("success fully wrote new cv file")

if __name__ == '__main__':
    raise SystemExit(main())