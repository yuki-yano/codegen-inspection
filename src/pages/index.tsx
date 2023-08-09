import { graphql } from "@/generated/graphql";

const userNameFragment = graphql(`
  fragment UserNameFragment on User {
    name
  }
`);

const userIdAndNameFragment = graphql(`
  fragment UserIdAndNameFragment on User {
    id
    name
  }
`);

const query = graphql(`
`)

export default function Home() {
  return <></>;
}
