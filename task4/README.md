- KMS 是什么服务？能解决什么问题？
AWS KMS 是一项托管式服务，让您能够轻松地**创建和控制**用于加密操作的密钥。
- 使用 KMS key 的方式有哪些？
加密和解密

### 加密和解密
- 通过saml2aws 创建一个用户
- 创建key
```
aws --profile beach kms create-key
```
- 加密
```
aws kms encrypt \--profile beach \
  --region ap-southeast-2 \
  --key-id create=key \
  --plaintext fileb://plaintext.txt \
  --output text \
  --query CiphertextBlob | base64 > EncryptedFile
```
  
- 多次加密使用相同key，前面有一段感觉一样的，后面不一样
-  解密
```
aws kms decrypt \
--profile beach \
--region ap-southeast-2 \
--ciphertext-blob $(cat EncryptedFile | base64 -d) \
--key-id create-key \
--output text \
--query Plaintext | base64 \
--decode > decryptedFile
```
