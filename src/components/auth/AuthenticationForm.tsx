import React, { useState } from 'react'
import ResetPasswordForm from './ResetPasswordForm'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const AuthStates = {
  signUp: {
    mainText: 'Sign Up',
    subText: "Don't have an account? Sign up now.",
    component: SignUpForm,
  },
  signIn: {
    mainText: 'Sign In',
    subText: 'Sign in to access now.',
    component: SignInForm,
  },
  reset: {
    mainText: 'Reset Password',
    subText: 'Enter your email address to reset your password.',
    component: ResetPasswordForm,
  },
} as const

const AuthenticationForm: React.FC = () => {
  const [mode, setMode] = useState<keyof typeof AuthStates>('signIn')

  return (
    <div className="space-x-6">
      <div className="flex flex-col space-y-2 text-sidebar-accent-foreground">
        <h1 className="text-2xl font-semibold tracking-tight">
          {AuthStates[mode].mainText}
        </h1>
        <p className="text-sm text-muted-foreground">
          {AuthStates[mode].subText}
        </p>
      </div>
      {React.createElement(AuthStates[mode].component)}
    </div>
  )
}

export default AuthenticationForm
