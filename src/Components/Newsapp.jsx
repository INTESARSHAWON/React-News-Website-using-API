import Card from "./Card"

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending News</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Seacrh News"/>
          <button>Search</button>
        </div>
      </nav>

      <div className="categoryBtn">
          <button>Sports</button>
          <button>Politics</button>
          <button>Entertainment</button>
          <button>Health</button>
          <button>Fitness</button>
      </div>

      <div>
          <Card/>
      </div>
    </div>
  )
}

export default Newsapp
