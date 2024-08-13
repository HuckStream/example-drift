import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.s3.BucketV2("bucket", {
    bucket: "example-drift",
    tags: {
        Name: "example-drift",
    },
});