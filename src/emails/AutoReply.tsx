import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AutoReplyProps {
  name: string;
}

export default function AutoReply({
  name,
}: AutoReplyProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Thank you for contacting Capiche Labs
      </Preview>

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "620px",
            margin: "40px auto",
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #e5e5e5",
          }}
        >
          {/* Header */}

          <Section
            style={{
              background: "#000000",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "32px",
              }}
            >
              Capiche Labs
            </Heading>

            <Text
              style={{
                color: "#bbbbbb",
                marginTop: "10px",
              }}
            >
              AI • Software • Cloud
            </Text>
          </Section>

          {/* Body */}

          <Section
            style={{
              padding: "40px",
            }}
          >
            <Heading
              style={{
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              Hi {name} 👋
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "30px",
              }}
            >
              Thank you for contacting
              <strong> Capiche Labs.</strong>

              <br />
              <br />

              We have successfully received your inquiry.

              <br />
              <br />

              Our engineering team will carefully review your project
              requirements and get back to you within
              <strong> 24 hours.</strong>
            </Text>

            <Hr />

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "30px",
              }}
            >
              While you wait, feel free to explore our latest projects,
              AI solutions, and technology stack.
            </Text>

            <Button
              href="https://capichelabs.com"
              style={{
                marginTop: "30px",
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "14px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "bold",
              }}
            >
              Visit Our Website
            </Button>
          </Section>

          {/* Footer */}

          <Section
            style={{
              backgroundColor: "#fafafa",
              textAlign: "center",
              padding: "30px",
            }}
          >
            <Text
              style={{
                color: "#888888",
                fontSize: "14px",
              }}
            >
              Capiche Labs
            </Text>

            <Text
              style={{
                color: "#999999",
                fontSize: "13px",
              }}
            >
              Ahmedabad, Gujarat, India
            </Text>

            <Text
              style={{
                color: "#999999",
                fontSize: "13px",
              }}
            >
              © {new Date().getFullYear()} Capiche Labs.
              All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}