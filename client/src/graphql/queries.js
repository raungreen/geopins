export const ME_QUERY = `
{
  me {
  	_id
    name
    email
    picture
  }
}
`;

export const GET_PINS_QUERY = `
{
  getpins {
    _id
    createdAt
    title
    image
    content
    latitude
    longitude
    author {
      _id
      name
      email
      picture
    }
    comments {
      text
      createdAt
      author {
        _id
        name
        picture
      }
    }
  }
}
`