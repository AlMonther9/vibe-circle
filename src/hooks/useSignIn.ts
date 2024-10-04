'use client';

import { useState } from 'react';

export const useSignIn = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignIn = () => setIsSignInOpen(!isSignInOpen);

  return { isSignInOpen, handleSignIn };
};
