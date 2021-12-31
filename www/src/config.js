// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3mtq5m4km47o4nnn1t9866tqsm",     // CognitoClientID
  "api_base_url": "https://6ll18n3pse.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sri-sam-stack1.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://sri.d1fnj31uuiwj7u.amplifyapp.com"                                      // AmplifyURL
};

export default config;
