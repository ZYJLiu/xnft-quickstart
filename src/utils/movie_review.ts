export type MovieReview = {
  version: "0.1.0"
  name: "movie_review"
  instructions: [
    {
      name: "addMovieReview"
      accounts: [
        {
          name: "movieReview"
          isMut: true
          isSigner: false
          pda: {
            seeds: [
              {
                kind: "arg"
                type: "string"
                path: "title"
              },
              {
                kind: "account"
                type: "publicKey"
                path: "initializer"
              }
            ]
          }
        },
        {
          name: "initializer"
          isMut: true
          isSigner: true
        },
        {
          name: "systemProgram"
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: "title"
          type: "string"
        },
        {
          name: "description"
          type: "string"
        },
        {
          name: "rating"
          type: "u8"
        }
      ]
    },
    {
      name: "updateMovieReview"
      accounts: [
        {
          name: "movieReview"
          isMut: true
          isSigner: false
          pda: {
            seeds: [
              {
                kind: "arg"
                type: "string"
                path: "title"
              },
              {
                kind: "account"
                type: "publicKey"
                path: "initializer"
              }
            ]
          }
        },
        {
          name: "initializer"
          isMut: true
          isSigner: true
        },
        {
          name: "systemProgram"
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: "title"
          type: "string"
        },
        {
          name: "description"
          type: "string"
        },
        {
          name: "rating"
          type: "u8"
        }
      ]
    },
    {
      name: "close"
      accounts: [
        {
          name: "movieReview"
          isMut: true
          isSigner: false
        },
        {
          name: "user"
          isMut: true
          isSigner: true
        }
      ]
      args: []
    }
  ]
  accounts: [
    {
      name: "movieAccountState"
      type: {
        kind: "struct"
        fields: [
          {
            name: "reviewer"
            type: "publicKey"
          },
          {
            name: "rating"
            type: "u8"
          },
          {
            name: "title"
            type: "string"
          },
          {
            name: "description"
            type: "string"
          }
        ]
      }
    }
  ]
}

export const IDL: MovieReview = {
  version: "0.1.0",
  name: "movie_review",
  instructions: [
    {
      name: "addMovieReview",
      accounts: [
        {
          name: "movieReview",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "arg",
                type: "string",
                path: "title",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "initializer",
              },
            ],
          },
        },
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "rating",
          type: "u8",
        },
      ],
    },
    {
      name: "updateMovieReview",
      accounts: [
        {
          name: "movieReview",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "arg",
                type: "string",
                path: "title",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "initializer",
              },
            ],
          },
        },
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "rating",
          type: "u8",
        },
      ],
    },
    {
      name: "close",
      accounts: [
        {
          name: "movieReview",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "movieAccountState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "reviewer",
            type: "publicKey",
          },
          {
            name: "rating",
            type: "u8",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
        ],
      },
    },
  ],
}
