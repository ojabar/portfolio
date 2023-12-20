import gql from "graphql-tag";

export const HomeBlogsQL = gql`
  query getPosts($start: Int, $limit: Int) {
    blogs(pagination: { start: $start, limit: $limit }) {
      data {
        id
        attributes {
          title
          discription_short
          createdAt
          image {
            data {
              attributes {
                url
              }
            }
          }
          seo {
            canonicalURL
          }
          categories {
            data {
              id
              attributes {
                title
                seo {
                  canonicalURL
                }
              }
            }
          }
        }
      }
    }
  }
`;
