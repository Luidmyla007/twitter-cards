import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import {TweetsWrapper, TweetsList, GoBackWrapper, Link, BtnContainer } from "./Tweets.styled";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from 'components/Button/Button';
import { fetchUsers } from "Fetch/fetchUsers";
import  Card from "components/Card/Card";

function Tweets() {
  const location = useLocation(); 
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const PER_PAGE = 3;
  const [type] = useState('');

  useEffect(() => {  
          const getUsers = async ({page,per_page, value })=>{
              try{
                  setIsLoading(true)
              return await fetchUsers(page,per_page, value).then((data) => {
              data.length >= PER_PAGE ? setShowLoadMoreBtn(true) :  setShowLoadMoreBtn(false)
              setUsers([...users, ...data])}
              )}
              catch(err) {console.log(err)}
              finally{
                  setIsLoading(false)
              }
      }
    getUsers({ page: pageNumber, per_page: PER_PAGE, value: type }) 
     // eslint-disable-next-line
    }, [pageNumber, type]);

  const loadMore = () => {
    setPageNumber(pageNumber + 1)
  };  

  return (
    <TweetsWrapper>
       {isLoading && <Loader/>}
      <GoBackWrapper>
        <Link to={location.state?.from ?? '/'}><FaArrowLeft/>Go back</Link>
      </GoBackWrapper>  
      <TweetsList>
         {users.length>0 && users.map(({id, user, avatar,followers,tweets}) => <Card key={id} id={id} tweets={tweets} followers={followers} user={user} avatar={avatar} />)}      
      </TweetsList>
       <BtnContainer>
        {showLoadMoreBtn && <Button text="Load more" onClick={loadMore} />}
      </BtnContainer>
    </TweetsWrapper> 
  );
}

export default Tweets;