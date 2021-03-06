import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function PeopleRoute() {
  const [peopleData, setPeopleData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('https://europe-west1-nodeapi-2f12c.cloudfunctions.net/app/people')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPeopleData(JSON.stringify(json, undefined, 2));
        setDataLoaded(true);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>People in JSON format</h3>
          <pre>
            {dataLoaded ? (
              peopleData
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
