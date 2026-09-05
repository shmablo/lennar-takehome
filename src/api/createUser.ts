const GRAPHQL_ENDPOINT = 'https://graphqlzero.almansi.me/api';

const CREATE_USER_MUTATION = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      email
    }
  }
`;

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface CreateUserResponse {
  data?: {
    createUser: User;
  };
  errors?: Array<{
    message: string;
  }>;
}

export async function createUser(email: string): Promise<User> {
  const username = email.split('@')[0];

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CREATE_USER_MUTATION,
      variables: {
        input: {
          name: username,
          username,
          email,
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error('The request could not be completed.');
  }

  const result = (await response.json()) as CreateUserResponse;

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  if (!result.data?.createUser) {
    throw new Error('The server returned an unexpected response.');
  }

  return result.data.createUser;
}