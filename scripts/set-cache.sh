#!/bin/bash

gsutil -m setmeta -r -h "Cache-Control:public, max-age=31536000" gs://brandon-portfolio-448520.firebasestorage.app