const hash = (password: string): string => {
    return password + '.';
}

const verify = (passwordAttempt: string): boolean => {
  return passwordAttempt === hash(passwordAttempt);
}

export {
  hash,
  verify
}