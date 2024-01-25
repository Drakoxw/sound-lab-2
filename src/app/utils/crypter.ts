import { logDev } from './console'
// import constants from 'constants'
const crypto = require('crypto')
const { constants } = crypto

// /////// LIBRERIAS PACKAGE ///////////
// import EncryptRsa from 'encrypt-rsa'
// const CryptoJS = require('crypto-js')
// /////// WINDOW CONSOLE LOG ///////////
// /////// LIBRERIAS NATIVAS ///////////

// const Hex = CryptoJS.enc.Hex
// const Utf8 = CryptoJS.enc.Utf8
// const Base64 = CryptoJS.enc.Base64

const publicKeyApi = `-----BEGIN PUBLIC KEY-----
-----END PUBLIC KEY-----`

const privateKeyApi = `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----`

// const secret_key = 'IGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBg'
// const secret_iv = '1234567890123456'

// var key2 = CryptoJS.SHA256(secret_key).toString(Hex).substr(0,32)
// var iv2 = CryptoJS.SHA256(secret_iv).toString(Hex).substr(0,16)

// /**
//  * CONVIERTE UN 'string' EN UNA FIRMA `SHA-256`
//  * @param value -> valor que se desea convertir en SHA-256
//  * @returns Promise<string>
//  */
// const encrypter256 = async (value: string): Promise<string> => {
//   const msgUint8 = new TextEncoder().encode(value)
//   const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
//   const hashArray = Array.from(new Uint8Array(hashBuffer))
//   const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
//   return hashHex
// }

// /**
//  * ENCRYPTADOR `RSA` PARA ENVIAR DATOS HACIA EL API
//  * * no usa el desencritador
//  * @param value
//  * @returns string
//  */
// const encryptRSAtoApi = (value: string) => {
//   const bufferToEncrypt = new Buffer(value)
//   const encrypted = crypto.publicEncrypt({
//     key: publicKeyApi,
//     padding : constants.RSA_PKCS1_PADDING
//   }, bufferToEncrypt)
//   return encrypted.toString('base64')
// }

// /**
//  * CRYPTER `RSA` PARA USO Y CONSUMO FRONT
//  * * No usar para desencriptar en el api
//  * @returns func
//  */
// const crypterRSA = () => {
//   const encryptRsa = new EncryptRsa()
//   return {
//     encrypt: (value: string) => {
//       const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
//         text: value,
//         publicKey: publicKeyApi
//       })
//       return encryptedText
//     },
//     decrypt: (value: string) => {
//       const encryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
//         text: value,
//         privateKey: privateKeyApi
//       })
//       return encryptedText
//     }
//   }
// }

// /**
//  * CRYPTER `AES` PARA USO INTERNO Y UN METODO PARA ENCRYPTAR HACIA LA API
//  */
// const crypterAES = {
//   Decrypt: (value: string): string => {
//     const decrypted = CryptoJS.AES.decrypt(value, Utf8.parse(key2), { iv: Utf8.parse(iv2) })
//     return decrypted.toString(Utf8)
//   },
//   Encrypt: (value: string): string => {
//     const encrypted = CryptoJS.AES.encrypt(value, Utf8.parse(key2), { iv: Utf8.parse(iv2) })
//     return encrypted.toString()
//   },
//   /**METODO COMPATIBLE CON LA API */
//   EncryptApi: (value: string): string => {
//     const outputEnc = CryptoJS.AES.encrypt(value, Utf8.parse(key2), { iv: Utf8.parse(iv2) })
//     return Utf8.parse(outputEnc).toString(Base64)
//   }
// }

/**
 * ENCRYPTADOR `RSA` PARA ENVIAR DATOS HACIA EL API V2
 * @param value
 * @returns string
 */
const crypterRsaApi = {
  encrypt: (value: string) => {
    try {
      const encryptedData = crypto.publicEncrypt(
        {
          key: publicKeyApi,
          padding: constants.RSA_PKCS1_PADDING,
          oaepHash: 'sha256'
        },
        Buffer.from(value)
      )
      return encryptedData.toString('base64')
    } catch (error) {
      logDev('Encrypt', String(error))
    }
  },
  decrypt: (value: string) => {
    try {
      const decryptedData = crypto.privateDecrypt(
        {
          key: privateKeyApi,
          padding: constants.RSA_PKCS1_PADDING,
          oaepHash: 'sha256'
        },
        Buffer.from(value, 'base64')
      )
      return decryptedData.toString('utf8')
    } catch (error) {
      logDev('Decrypt', String(error))
    }
  },
  signature: (toSign: string) => {
    try {
      const signer = crypto.createSign('RSA-SHA256')
      signer.update(toSign)
      return signer.sign(privateKeyApi, 'base64')
    } catch (error) {
      logDev('Signature', String(error))
    }
  },
  verifySign: (signed: string, toSign: string) => {
    try {
      const verify = crypto.createVerify('RSA-SHA256')
      verify.update(toSign)
      return verify.verify(publicKeyApi, signed, 'base64')
    } catch (error) {
      logDev('VerifySign', String(error))
    }
  }
}
// export { encrypter256, crypterRSA, crypterAES, encryptRSAtoApi, crypterRSA_Api }
export { crypterRsaApi }
