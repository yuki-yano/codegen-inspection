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

const userQuery = graphql(`
  query user($id: ID!) {
    user(id: $id) {
      ...UserNameFragment
    }
  }
`);

const usersQuery = graphql(`
  query users {
    users {
      ...UserIdAndNameFragment
    }
  }
`);

// 検証用
graphql(`

`)

export default function Home() {
  return <></>;
}
