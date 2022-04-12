# Overview
- [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- AWS responsibility “Security of the Cloud”
- Customer responsibility “Security in the Cloud”
- [Global](https://aws.amazon.com/about-aws/global-infrastructure/?p=ngi&loc=1)
- [Regions & AZs](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
- 84 Azs
- 300 Edge locations
- The cloud is spongy!  Some things take awhile to propogate/activate.
- Avoid using the root account as your "goto" account
- Create at least three billing alarms:
  - $1.00/day
  - $1.50/day
  - $2.00/day
- AWS Web Console is a great place to learn AWS, HOWEVER it is NOT a good place for developing enterprise grade applications that require multiple environments

# Videos
[AWS Foundations: Getting Started with the AWS Cloud Essentials (66m)](https://app.pluralsight.com/course-player?clipId=d9197e74-8d70-45c2-a951-0ad7845e3daa)
  - Deployments
     - Full Cloud
     - Hybrid
     - Private Cloud
  - Many Regions
     - Availability Zones (AZs)
  - Supports Docker Containers
  - Load Balancing
  - Auto Scaling
  - S3: "Infinite" object store (buckets)
  - EBS/EFS
  - Database
    - Unmanaged (EC2)
    - Managed (RDS)
        - Amazon Auroa (Flagship DB)
            - Relational
            - HA
            - 5x faster than MySQL
            - Inexpensive
        - DynamoDB
            - NoSQL
        - Redshift: Data warehouse
        - Amazon DocumentDB: Managed MongoDB
        - Neptune: Graph DB
  - Direct Connect
  - VPC 
  - IAM     
  - AWS Shield
    - Standard
    - Advanced
  - Pricing: Pay as you/pay for what you use

[Fundamental Cloud Concepts for AWS (1h 24m)](https://app.pluralsight.com/library/courses/fundamental-cloud-concepts-aws/table-of-contents)
- Budget Alerts
- Edge Locations
  - CloudFront/Lambda
  - R53
- AWS TCO Calculator/Monthly Calculator
- Resource tags
- Support tiers


# All Services
[AWS Cloud](https://docs.aws.amazon.com/cli/latest/reference/)

```
accessanalyzer
account
acm***
acm-pca
alexaforbusiness
amp
amplify
amplifybackend
amplifyuibuilder
apigateway
apigatewaymanagementapi
apigatewayv2
appconfig
appconfigdata
appflow
appintegrations
application-autoscaling
application-insights
applicationcostprofiler
appmesh
apprunner
appstream
appsync
athena
auditmanager
autoscaling
autoscaling-plans
backup
backup-gateway
batch
billingconductor
braket
budgets
ce
chime
chime-sdk-identity
chime-sdk-meetings
chime-sdk-messaging
cloud9
cloudcontrol
clouddirectory
cloudformation
cloudfront
cloudhsm
cloudhsmv2
cloudsearch
cloudsearchdomain
cloudtrail
cloudwatch***
codeartifact
codebuild
codecommit
codeguru-reviewer
codeguruprofiler
codepipeline
codestar
codestar-connections
codestar-notifications
cognito-identity
cognito-idp
cognito-sync
comprehend
comprehendmedical
compute-optimizer
configservice
configure
connect
connect-contact-lens
connectparticipant
cur
customer-profiles
databrew
dataexchange
datapipeline
datasync
dax
deploy
detective
devicefarm
devops-guru
directconnect
discovery
dlm
dms
docdb
drs
ds
dynamodb***
dynamodbstreams
ebs
ec2***
ec2-instance-connect
ecr
ecr-public
ecs
efs
eks
elastic-inference
elasticache
elasticbeanstalk
elastictranscoder
elb
elbv2
emr
emr-containers
es
events
evidently
finspace
finspace-data
firehose
fis
fms
forecast
forecastquery
frauddetector
fsx
gamelift
gamesparks
glacier
globalaccelerator
glue***
grafana
greengrass
greengrassv2
groundstation
guardduty
health
healthlake
history
honeycode
iam***
identitystore
imagebuilder
importexport
inspector
inspector2
iot***
iot-data
iot-jobs-data
iot1click-devices
iot1click-projects
iotanalytics
iotdeviceadvisor
iotevents
iotevents-data
iotfleethub
iotsecuretunneling
iotsitewise
iotthingsgraph
iottwinmaker
iotwireless
ivs
kafka
kafkaconnect
kendra
keyspaces
kinesis
kinesis-video-archived-media
kinesis-video-media
kinesis-video-signaling
kinesisanalytics
kinesisanalyticsv2
kinesisvideo
kms***
lakeformation
lambda***
lex-models
lex-runtime
lexv2-models
lexv2-runtime
license-manager
lightsail
location
logs
lookoutequipment
lookoutmetrics
lookoutvision
machinelearning
macie
macie2
managedblockchain
marketplace-catalog
marketplace-entitlement
marketplacecommerceanalytics
mediaconnect
mediaconvert
medialive
mediapackage
mediapackage-vod
mediastore
mediastore-data
mediatailor
memorydb
meteringmarketplace
mgh
mgn
migration-hub-refactor-spaces
migrationhub-config
migrationhubstrategy
mobile
mq
mturk
mwaa
neptune
network-firewall
networkmanager
nimble
opensearch
opsworks
opsworks-cm
organizations
outposts
panorama
personalize
personalize-events
personalize-runtime
pi
pinpoint
pinpoint-email
pinpoint-sms-voice
pinpoint-sms-voice-v2
polly
pricing
proton
qldb
qldb-session
quicksight
ram
rbin
rds***
rds-data
redshift
redshift-data
rekognition
resiliencehub
resource-groups
resourcegroupstaggingapi
robomaker
route53***
route53-recovery-cluster
route53-recovery-control-config
route53-recovery-readiness
route53domains
route53resolver
rum
s3***
s3api
s3control
s3outposts
sagemaker
sagemaker-a2i-runtime
sagemaker-edge
sagemaker-featurestore-runtime
sagemaker-runtime
savingsplans
schemas
sdb
secretsmanager
securityhub
serverlessrepo
service-quotas
servicecatalog
servicecatalog-appregistry
servicediscovery
ses***
sesv2
shield
signer
sms
snow-device-management
snowball
sns***
sqs***
ssm
ssm-contacts
ssm-incidents
sso
sso-admin
sso-oidc
stepfunctions
storagegateway
sts***
support
swf
synthetics
textract
timestream-query
timestream-write
transcribe
transfer
translate
voice-id
waf***
waf-regional
wafv2
wellarchitected
wisdom
workdocs
worklink
workmail
workmailmessageflow
workspaces
workspaces-web
xray
```

*** My experience.

# Pricing
- [What is free and what is not?](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free%7Ctier%2312monthsfree&awsf.Free%20Tier%20Categories=*all&all-free-tier.q=s3&all-free-tier.q_operator=AND)
