import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const {id} = useParams();
useEffect (()=>{
apiGet('/shows/${}?embed[]=season&embed[]=cast')
}),[]) ;

  return <div>This is show page</div>;
};

export default Show;
