import bcrypt from 'bcrypt';

async function hashPassword(plainTextPassword: string): Promise<string> {
  const saltRounds = 6;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}

async function verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  return isMatch;
}

export default { hashPassword, verifyPassword };
