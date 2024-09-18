import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createClient } from "contentful";

// Contentful client setup
const contentfulClient = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

// Fetch all entries
const fetchContentfulEntries = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
  });
  return entries.items;
};

// Fetch entry by slug
const fetchContentfulEntryBySlug = async (slug) => {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  return entries.items[0];
};

// Fetch posts by category
const fetchContentfulPostsByCategory = async (category) => {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.category": category,
  });
  return entries.items;
};

// Fetch all transfers from Contentful
const fetchTransfers = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "transferEntry",
  });
  return entries.items;
};

// Fetch transfer by ID from Contentful
const fetchTransferById = async (id) => {
  const entry = await contentfulClient.getEntry(id);
  return entry.fields;
};

const fetchAllTransfers = async (page) => {
  const response = await fetch(`/api/fotmob?endpoint=transfers&page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch all transfers");
  }
  const data = await response.json();
  return data.transfers;
};

const fetchWorldNews = async (page) => {
  const response = await fetch(
    `/api/fotmob?endpoint=worldnews&lang=en&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch world news");
  }
  const data = await response.json();
  return data; // Return the correct data
};

// Fetch all game modes from Contentful
const fetchGameModes = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "gameMode",
  });
  return entries.items;
};

// Fetch Trivia Game Modes from Contentful
const fetchTriviaGameModes = async (gamemode) => {
  const entries = await contentfulClient.getEntries({
    content_type: "triviaGameMode",
    "fields.gameMode.sys.contentType.sys.id": "gameMode", // Specify the content type of the reference
    "fields.gameMode.fields.url": gamemode,
  });
  return entries.items;
};

// Fetch Quiz Questions from Contentful
const fetchQuizQuestions = async (triviaGameModeId) => {
  const entries = await contentfulClient.getEntries({
    content_type: "quizQuestions",
    "fields.triviaGameMode.sys.contentType.sys.id": "triviaGameMode", // Specify the content type of the reference
    "fields.triviaGameMode.fields.gameMode.sys.id": triviaGameModeId,
  });
  return entries.items;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cdn.contentful.com",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      queryFn: async () => {
        try {
          const data = await fetchContentfulEntries();
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
    }),
    getPostBySlug: builder.query({
      queryFn: async (slug) => {
        try {
          const post = await fetchContentfulEntryBySlug(slug);
          return { data: post };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
    getPostsByCategory: builder.query({
      queryFn: async (category) => {
        try {
          const data = await fetchContentfulPostsByCategory(category);
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
    }),
    getTransfers: builder.query({
      queryFn: async () => {
        try {
          const data = await fetchTransfers();
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
    }),
    getTransferById: builder.query({
      queryFn: async (id) => {
        try {
          const data = await fetchTransferById(id);
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
    getAllTransfers: builder.query({
      queryFn: async (id) => {
        try {
          const data = await fetchAllTransfers(id);
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
    getWorldNews: builder.query({
      queryFn: async (id) => {
        try {
          const data = await fetchWorldNews(id);
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
    // Fetch all game modes
    getGameModes: builder.query({
      queryFn: async () => {
        try {
          const data = await fetchGameModes();
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),

    // Fetch all trivia game modes
    getTriviaGameModes: builder.query({
      queryFn: async (gamemode) => {
        try {
          const data = await fetchTriviaGameModes(gamemode);
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),

    // Fetch quiz questions by game mode ID
    getQuizQuestions: builder.query({
      queryFn: async (gameModeId) => {
        try {
          const data = await fetchQuizQuestions(gameModeId);
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostBySlugQuery,
  useGetPostsByCategoryQuery,
  useGetTransfersQuery,
  useGetTransferByIdQuery,
  useGetAllTransfersQuery,
  useGetWorldNewsQuery,
  useGetGameModesQuery,
  useGetTriviaGameModesQuery,
  useGetQuizQuestionsQuery,
} = apiSlice;
