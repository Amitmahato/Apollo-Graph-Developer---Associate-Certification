import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";

/** GET_TRACK query to retrieve a single track */
const GET_TRACK = gql`
  query Track($trackId: ID!) {
    track(id: $trackId) {
      author {
        id
        name
        photo
      }
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

/**
 * Track Page is the Catstronauts track detail page.
 */
const Track = () => {
  const { trackId } = useParams();
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });

  return (
    <Layout grid>
      <QueryResult data={data} error={error} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
