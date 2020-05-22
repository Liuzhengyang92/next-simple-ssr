import styles from './SearchBox.module.css';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className={styles.search}>
      <label className={styles.label}>
        <h3>Search Robots:</h3>
        <input
          style={{ height: '2vw' }}
          className={styles.input}
          type='search'
          placeholder="search robots"
          onChange={onSearchChange}
        />
      </label>
    </div>
  )
}

export default SearchBox;
