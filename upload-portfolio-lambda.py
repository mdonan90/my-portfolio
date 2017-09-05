import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))


    portfolio_bucket = s3.Bucket('onanlabs.com')
    build_bucket = s3.Bucket('portfoliobuild.onanlabs.com')


    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
      for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm)
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    print "Job Complete!"
    return 'Hello from Lambda'
