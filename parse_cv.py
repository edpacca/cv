#!/usr/bin/env python
import os
from dotenv import load_dotenv
from spellchecker import SpellChecker
import string
import yaml
import json
import datetime

valid_words = [
    "app",
    "impactful",
    "lifecycle",
    "frontend",
    "HIPAA",
    "roadmap",
    "triaged",
    "gdpr",
    "oauth",
    "SDLC",
    "roi",
    "devs",
    "backend",
    "3d",
    "architected",
    "codebase",
    "containerized",
    "ci",
    "gui",
    "webdriver",
    "rois",
    "ct",
    "2d3d",
    "github",
    "slackbot",
    "pr",
    "qa",
    "triaging",
    "itg",
    "dicom",
    "poc",
    "pkce",
    "scottish",
    "sso",
    "cicd",
    "phd",
    "multi",
    "codebases",
    "architecting",
    "datasets"
]

def DateEncoder(obj):
  if isinstance(obj, (datetime.datetime, datetime.date)):
      return obj.strftime('%Y-%m-%d')

def text_to_wordlist(text):
    return text.replace("-", " ").translate(str.maketrans('', '', string.punctuation)).split()

def validate_information(data):
    phone_validator = os.getenv("PHONE")
    email_validator = os.getenv("EMAIL")

    assert data["profile"]["phone"].replace("-", "") == phone_validator, "phone number incorrect"
    assert data["profile"]["email"] == email_validator, "email incorrect"

def validate_spelling(data):

    spell = SpellChecker()
    spell.word_frequency.load_words(valid_words)

    def check_unknown(text, field):
        unknown = spell.unknown(text_to_wordlist(text))
        assert len(unknown) == 0, f"\nfound misspelled words in {field}: {unknown}"

    check_unknown(data["summary"], "summary")

    for job in data["experience"]:
        for note in job["notes"]:
            check_unknown(note["note"], job["company"])


def main():

    load_dotenv()
    input_dir = os.getenv("CV_DATA_DIR")
    input_filename = os.getenv("CV_FILE")
    main_cv_filename = os.getenv("MAIN_CV_FILE")
    print(input_filename)
    output_dir = "./src/data"

    with open(f"{input_dir}/{input_filename}") as input_file:
        data = yaml.safe_load(input_file)

    if input_filename != main_cv_filename:
        validate_information(data)
    validate_spelling(data)

    with open(f"{output_dir}/cv.json", "w") as output_file:
        output_file.write(json.dumps(data, indent=2, default=DateEncoder))

    print("success fully wrote new cv file")

if __name__ == '__main__':
    raise SystemExit(main())
