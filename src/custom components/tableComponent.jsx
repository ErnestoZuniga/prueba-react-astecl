import React from "react";

import styles from '../styles/styles.module.scss'

/*<tr>
{Object.entries(value[1]).map( entry => {
  return <th>{entry}</th>
})
}
</tr>*/

const TableComponent = (props) => {
  const data = props.data
  return (
    <>
    {<table className={styles.table}>
      <tr>
        {Object.keys(data[1]).map( entry => {
          return <th>{entry}</th>
        })
        }
      </tr>
      {
        data.map( (value, index) => {
          return (
              <tr  key={index} >
                <td className={styles.col__light}>{value._id}</td>
                <td className={styles.col__dark}>{value._cityid}</td>
                <td className={styles.col__light}>{value.validdateutc}</td>
                <td className={styles.col__dark}>{value.winddirectioncardinal}</td>
                <td className={styles.col__light}>{value.probabilityofprecip}</td>
                <td className={styles.col__dark}>{value.relativehumidity}</td>
                <td className={styles.col__light}>{value.name}</td>
                <td className={styles.col__dark}>{value["date-insert"]}</td>
                <td className={styles.col__light}>{value.longitude}</td>
                <td className={styles.col__dark}>{value.state}</td>
                <td className={styles.col__light}>{value.lastreporttime}</td>
                <td className={styles.col__dark}>{value.skydescriptionlong}</td>
                <td className={styles.col__light}>{value.stateabbr}</td>
                <td className={styles.col__dark}>{value.tempc}</td>
                <td className={styles.col__light}>{value.latitude}</td>
                <td className={styles.col__dark}>{value.iconcode}</td>
                <td className={styles.col__light}>{value.windspeedkm}</td>
              </tr>
          )
        })
      }
    </table>
    }
    </>
  );
}

export default TableComponent;