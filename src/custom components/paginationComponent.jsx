import React from 'react';

const Pagination = (props) => {
  const {
    onPageChange,
    currentPage,
    pageSize,
  } = props;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  
  return(
    <>
    <button onClick={onPrevious}> {"<--"} </button>
    <p>{currentPage}</p>
    <button onClick={onNext}> {'-->'} </button>
    </>
  )
}

export default Pagination;