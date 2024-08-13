import React, { useEffect, } from 'react'
import { Spin } from 'antd';
import { AppContext } from '../components/AppContext/AppContext';
import AuthorCard from '../components/Card/AuthorCard';
import { ListContainer } from '../components/Layout/ListContainer';
import { AppLayout } from '../components/Layout/AppLayout';

const GetAuthors = () => {


  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;

  const { authors, setAuthors } = React.useContext(AppContext);


  const loadAuthors = async () => {
    const query = await fetch('http://localhost:3000/authors');
    const result = await query.json();
    console.log(result);
    setAuthors(result.authors);
  }

  useEffect(() => {
    console.log(authors);

  }, [authors]);

  useEffect(() => {
    console.log('GetAuthors mounted');
    loadAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <AppLayout>
      <div className="w-full min-w-full h-full min-h-full md:h-screen py-20 md:py-4  bg-tertiary flex justify-center justify-items-center align-middle items-center">
        {authors && authors.length ? (
          <ListContainer>
            {/* <pre>{JSON.stringify(authors, null, 2)}</pre> */}
            {authors.map(author => {
              return (
                <AuthorCard author={author} key={author._id.toString()} />
              )
            }
            )}
          </ListContainer>

        ) : (<Spin tip="Loading" size="large">
          {content}
        </Spin>)}
      </div>
    </AppLayout>
  )
}

export default GetAuthors