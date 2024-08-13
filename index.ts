import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("bucket", {
  bucket: "crk-main-example-drift",
  tags: {
    Name: "crk-main-example-drift",
  },
});

const ownership = new aws.s3.BucketOwnershipControls("ownership", {
  bucket: bucket.id,
  rule: {
    objectOwnership: "BucketOwnerEnforced",
  },
});

const versioning = new aws.s3.BucketVersioningV2("versioning", {
  bucket: bucket.id,
  versioningConfiguration: {
      status: "Enabled",
  },
});
