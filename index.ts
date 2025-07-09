import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("rocketseat-bucket-stg", {
    bucket: 'rocketseat-bucket-stg',
    tags: {
        IAC: "true"
    }
});

const devBucket = new aws.s3.BucketV2("rocketseat-bucket-dev", {
    bucket: 'rocketseat-bucket-dev',
    tags: {
        IAC: "true"
    }
});

const ecr = new aws.ecr.Repository("rocketseat-ecr", {
    name: "rocketseat-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true"
    }
});

export const bucketName = bucket.id;
export const devBucketName = devBucket.id;

export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.id;
export const ecrRepoUrl = ecr.repositoryUrl;


