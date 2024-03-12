import bcrypt from 'bcryptjs';

export default function useEncrypt() {
  async function encryptPlainText(plainText: string) {
    try {
      const salt = import.meta.env.VITE_ECRYPTION_SALT;
      return await bcrypt.hashSync(plainText, salt);
    } catch (error) {
      console.error('Encryption error:', error);
      throw error;
    }
  }

  return encryptPlainText;
}
