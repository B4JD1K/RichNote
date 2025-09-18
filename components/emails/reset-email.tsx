import * as React from 'react';
import {Body, Button, Container, Head, Heading, Html, Preview, Section, Tailwind, Text,} from '@react-email/components';

interface PasswordResetEmailProps {
  userName: string;
  resetUrl: string;
  requestTime: string;
}

const PasswordResetEmail = ({userName, resetUrl, requestTime}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head/>
      <Preview>Reset your password - secure link inside</Preview>
      <Tailwind>
        <Body className="bg-stone-50 font-sans py-[40px]">
          <Container className="mx-auto py-[40px] px-[20px] max-w-[580px]">
            <Section className="bg-white rounded-[8px] border border-stone-200 p-[40px]">
              {/* Header */}
              <Heading className="text-stone-900 text-[28px] font-bold text-center mb-[32px] mt-0">
                Reset Your Password
              </Heading>

              {/* Main Content */}
              <Text className="text-stone-700 text-[16px] leading-[24px] mb-[24px]">
                Hi {userName},
              </Text>

              <Text className="text-stone-700 text-[16px] leading-[24px] mb-[24px]">
                We received a request to reset the password for your account associated with <strong className="text-stone-900">✨RichNote</strong> at <strong
                className="text-stone-900">{requestTime}</strong>.
              </Text>

              <Text className="text-stone-700 text-[16px] leading-[24px] mb-[32px]">
                If you made this request, click the button below to reset your password. If you didn&apos;t request a password reset, you can safely ignore this email.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-stone-900 text-white px-[32px] py-[16px] rounded-[6px] text-[16px] font-medium no-underline box-border inline-block"
                >
                  Reset Password
                </Button>
              </Section>

              {/* Alternative Link */}
              <Text className="text-stone-600 text-[14px] leading-[20px] mb-[24px]">
                If the button above doesn&apos;t work, copy and paste this link into your browser:
              </Text>

              <Text className="text-stone-500 text-[14px] leading-[20px] mb-[32px] break-all">
                {resetUrl}
              </Text>

              {/* Security Information */}
              <Section className="bg-stone-100 border border-stone-200 rounded-[6px] p-[20px] mb-[32px]">
                <Text className="text-stone-700 text-[14px] leading-[20px] mb-[12px] font-medium">
                  🔒 Security Information
                </Text>
                <Text className="text-stone-600 text-[14px] leading-[20px] mb-[8px] m-0">
                  • This password reset link will expire in 1 hour for your security
                </Text>
                <Text className="text-stone-600 text-[14px] leading-[20px] mb-[8px] m-0">
                  • The link can only be used once
                </Text>
                <Text className="text-stone-600 text-[14px] leading-[20px] m-0">
                  • If you didn&apos;t request this reset, your account is still secure
                </Text>
              </Section>

              {/* Warning Section */}
              <Section className="bg-red-50 border border-red-200 rounded-[6px] p-[20px] mb-[32px]">
                <Text className="text-red-800 text-[14px] leading-[20px] mb-[8px] font-medium">
                  ⚠️ Important
                </Text>
                <Text className="text-red-700 text-[14px] leading-[20px] m-0">
                  If you didn&apos;t request a password reset, please contact our support team immediately. Someone may be trying to access your account.
                </Text>
              </Section>

              {/* Additional Help */}
              <Text className="text-stone-600 text-[14px] leading-[20px] mb-[24px]">
                Need help? Contact our support team or visit our help center for assistance with your account.
              </Text>

              <Text className="text-stone-700 text-[16px] leading-[24px] mb-[8px]">
                Best regards,<br/>
                The Security Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-[32px] text-center">
              <Text className="text-stone-500 text-[12px] leading-[16px] mb-[8px] m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-stone-500 text-[12px] leading-[16px] m-0">
                123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className="text-stone-500 text-[12px] leading-[16px] mt-[8px] m-0">
                <a href="#" className="text-stone-500 underline">Unsubscribe</a> |
                <a href="#" className="text-stone-500 underline ml-[4px]">Privacy Policy</a> |
                <a href="#" className="text-stone-500 underline ml-[4px]">Support</a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PasswordResetEmail.PreviewProps = {
  userEmail: 'bajdik@yahoo.com',
  userName: 'John',
  resetUrl: 'https://yourapp.com/reset-password?token=abc123xyz789',
};

export default PasswordResetEmail;