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
};

module.exports = resolvers;
