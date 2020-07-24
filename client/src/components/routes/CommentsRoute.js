import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function CommentsRoute() {
  const [commentsData, setCommentsData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('https://europe-west1-nodeapi-2f12c.cloudfunctions.net/app/comments')
      .then((res) => res.json())
      .then((json) => {
        setCommentsData(JSON.stringify(json, undefined, 2));
        setDataLoaded(true);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Comments in JSON format</h3>
          <pre>
            {dataLoaded ? (
              commentsData
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </pre>
        </div>
        <div className="col-md-12">
          <Link to="/">
            <Button style={{ marginBottom: '20px' }}>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
