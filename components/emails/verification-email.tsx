import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

export const VerificationEmail = ({userName, verificationUrl}: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head/>
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-stone-50 font-sans py-[40px]">
          <Container className="mx-auto py-[40px] px-[20px] max-w-[580px]">
            {/* Header */}
            <Section className="bg-white rounded-[8px] border border-stone-200 p-[40px]">
              <Heading className="text-stone-900 text-[28px] font-bold text-center mb-[32px] mt-0">
                Verify Your Email Address
              </Heading>

              {/* Main Content */}
              <Section className="mb-[32px]">
                <Text className="text-stone-700 text-[16px] leading-[24px] mb-[24px]">
                  Hi {userName},
                </Text>

                <Text className="text-stone-700 text-[16px] leading-[24px] mb-[24px]">
                  Thank you for signing up! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
                </Text>

                <Text className="text-stone-700 text-[16px] leading-[24px] mb-[24px]">
                  This verification link will expire in 24 hours for security purposes.
                </Text>

                <Text className="text-stone-600 text-[14px] leading-[20px] mb-[32px]">
                  Email to verify: <strong className="text-stone-900">{userName}</strong>
                </Text>
              </Section>

              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-stone-900 text-white px-[32px] py-[16px] rounded-[6px] text-[16px] font-medium no-underline box-border inline-block"
                >
                  Verify Email Address
                </Button>
              </Section>

              {/* Alternative Link */}
              <Text className="text-stone-600 text-[14px] leading-[20px] mb-[24px]">
                If the button above doesn&apos;t work, you can also verify your email by copying and pasting this link into your browser:
              </Text>

              <Text className="text-stone-500 text-[14px] leading-[20px] mb-[32px] break-all">
                {verificationUrl}
              </Text>

              {/* Security Notice */}
              <Section className="bg-stone-100 border border-stone-200 rounded-[6px] p-[20px] mb-[32px]">
                <Text className="text-stone-700 text-[14px] leading-[20px] mb-[8px] font-medium">
                  Security Notice
                </Text>
                <Text className="text-stone-600 text-[14px] leading-[20px] m-0">
                  This verification link will expire in 24 hours. If you didn&apos;t create an account, you can safely ignore this email.
                </Text>
              </Section>

              {/* Support */}
              <Text className="text-stone-600 text-[14px] leading-[20px] mb-[24px]">
                If you have any questions or need assistance, please don&apos;t hesitate to contact our support team.
              </Text>

              <Text className="text-stone-700 text-[16px] leading-[24px] mb-[8px]">
                Best regards,<br/>
                The Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-[32px] text-center">
              <Text className="text-stone-500 text-[12px] leading-[16px] mb-[8px] m-0">
                This email was sent by RichNote by B4JD1K
              </Text>
              {/*<Text className="text-stone-500 text-[12px] leading-[16px] m-0">*/}
              {/*  123 Business Street, Suite 100, City, State 12345*/}
              {/*</Text>*/}
              <Text className="text-stone-500 text-[12px] leading-[16px] mt-[8px] m-0">
                {/*<a href="#" className="text-stone-500 underline">Unsubscribe</a> |*/}
                {/*<a href="#" className="text-stone-500 underline ml-[4px]">Privacy Policy</a>*/}
                © {new Date().getFullYear()} RichNote by B4JD1K. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
