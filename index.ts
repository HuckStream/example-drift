import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.s3.BucketV2("bucket", {
  bucket: "crk-main-example-drift",
  tags: {
    Name: "crk-main-example-drift",
  },
});
