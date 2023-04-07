const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // returns a single Track that matches the id received as an argument
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    author: (parent, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: (parent, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(parent.id);
    },
  },

  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      const track = await dataSources.trackAPI.incrementTrackViews(id);
      return {
        code: 200,
        success: true,
        message: `Successfully incremented the number of views for track ${id}`,
        track,
      };
    },
  },
};

module.exports = resolvers;
