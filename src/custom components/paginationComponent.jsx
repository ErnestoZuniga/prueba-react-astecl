import React from 'react';

import styles from '../styles/styles.module.scss';

const Pagination = (props) => {
  const {
    onPageChange,
    currentPage,
    pageSize,
  } = props;

  const onNext = () => {
    currentPage === 10 ? onPageChange( 10 ) : onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  
  return(
    <div className={styles.box}>
    <button onClick={onPrevious}> {"<--"} </button>
    <p>{currentPage}</p>
    <button onClick={onNext}> {'-->'} </button>
    </div>
  )
}

export default Pagination;